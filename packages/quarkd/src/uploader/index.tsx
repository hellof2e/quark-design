import QuarkElement, {
  Fragment,
  property,
  createRef,
  customElement,
  state,
} from "quarkc";
import {
  readFileContent,
  isOversize,
  UploaderFileListItem,
  filterFiles,
} from "./utils";
import "@quarkd/icons/lib/camera-fill";
import "@quarkd/icons/lib/close";
import style from "./style.css";
import imagePreview from "../imagepreview/index";
import "../loading";
import "../grid";
export interface Props {
  accept?: string;
  name?: string;
  multiple?: boolean;
  preview?: boolean;
  capture?: boolean;
  maxcount?: number;
  maxsize?: number;
  disabled?: string;
}
export interface CustomEvent {
  afterread?: (e: {
    detail: UploaderFileListItem | UploaderFileListItem[];
  }) => void;
}
export interface CustomEvent {
  oversize?: (e: {
    detail: {
      items: UploaderFileListItem[];
      maxsize: string;
    };
  }) => void;
}

@customElement({ tag: "quark-uploader", style })
class QuarkUploader extends QuarkElement {
  @property()
  id = "";

  @property()
  name = "";

  @property()
  iconcolor = "#ccc";

  @property({ type: Boolean })
  capture = false;

  @property({ type: Boolean })
  preview = false;

  @property()
  accept = "image/*";

  @property({ type: Boolean })
  multiple = true;

  @property({ type: Boolean })
  hidedelete = false;

  @property({ type: Boolean })
  disabled = false;

  @property({ type: Boolean })
  readonly = false;

  @property()
  maxcount = 999;

  @property()
  // 25M
  maxsize = "26214400";

  @state()
  tasks: any[] = [];

  @state()
  fId = 0;

  @state()
  hiddenUpload = false;

  inputRef: any = createRef();

  beforeUpload: any = null;

  beforeDelete: any = null;

  values: any[] = [];

  previewStatus = false;

  previewInstance: any = null;

  resetInput = () => {
    if (this.inputRef.current) this.inputRef.current.value = "";
  };

  componentDidMount(): void {
    if (this.readonly) return;
    const { current } = this.inputRef;
    // 设置退出过渡动画
    if (this.capture) {
      // 由关闭到打开
      current.setAttribute("capture", this.capture);
    }
    // 由打开到关闭
    else current.removeAttribute("capture");
  }

  shouldComponentUpdate(
    propName: string,
    oldValue: string | boolean,
    newValue: string | boolean
  ): boolean {
    const booleAttr = ["capture", "multiple", "disabled", "deletable"];
    const exit = booleAttr.includes(propName);
    if (exit && this.inputRef && this.inputRef.current) {
      const { current } = this.inputRef;
      if (newValue) current.setAttribute(propName, newValue);
      else current.removeAttribute(propName);
    }
    return true;
  }

  onAfterRead = (items: UploaderFileListItem | UploaderFileListItem[]) => {
    const maxsize = Number(this.maxsize);
    if (!isOversize(items, maxsize)) {
      if (Array.isArray(items)) {
        // 过滤符合大小的文件
        const result = filterFiles(items, maxsize);
        items = result.valid;
        if (!items.length) {
          return;
        }
        this.tasks = [...this.tasks, ...items];
      } else {
        this.tasks = [...this.tasks, items];
      }
      this.values = this.preview ? this.tasks.slice(0, this.maxcount) : [];
      this.$emit("afterread", { detail: items });
    } else {
      this.$emit("oversize", {
        detail: {
          items,
          maxsize,
        },
      });
    }
  };

  readFile = (files: File | File[]) => {
    const resultType = "dataUrl";
    if (Array.isArray(files)) {
      const remainCount = +this.maxcount - this.tasks.length;
      if (files.length > remainCount) {
        files = files.slice(0, remainCount);
      }
      Promise.all(files.map((file) => readFileContent(file, resultType)))
        .then((contents) => {
          const fileList = (files as File[]).map((file, index) => {
            const result: UploaderFileListItem = {
              file,
              status: "done",
              message: "",
              id: this.fId + index,
            };
            if (contents[index]) {
              result.content = contents[index] as string;
            }
            this.fId = this.fId + index;
            return result;
          });
          this.onAfterRead(fileList);
        })
        .catch((e) => {
          console.error(e);
        });
    } else {
      readFileContent(files, resultType).then((content) => {
        const result: UploaderFileListItem = {
          file: files as File,
          status: "done",
          message: "",
          id: this.fId + 1,
        };
        if (content) {
          result.content = content;
        }
        this.fId = this.fId + 1;
        this.onAfterRead(result);
      });
    }
  };

  onChange = async (e: Event) => {
    const target = e.target as HTMLInputElement;
    const { files: rawFiles } = target;
    if (this.disabled || !rawFiles) return;
    let files = ([].slice.call(rawFiles) as File[]) || null;
    if (this.beforeUpload) {
      const bFile = await this.beforeUpload(files);
      files = bFile ? files : bFile;
    }
    if (!files || files.length === 0) {
      return;
    }
    const file =
      files.length === 1 ? files[0] : ([].slice.call(files) as File[]);
    this.readFile(file);
    // @ts-ignore
    e.target.value = "";
  };

  // 设置初始化预览数据
  setPreview = (urls: string[]) => {
    const data = urls.map((i, index) => ({
      status: "done",
      message: "",
      id: index,
      url: i,
    }));
    this.tasks = data;
    this.values = data;
    this.fId = urls.length;
  };

  onRemove = (e: Event, item: UploaderFileListItem, index: number) => {
    if (
      !this.beforeDelete ||
      (typeof this.beforeDelete === "function" &&
        this.beforeDelete(item, { index }))
    ) {
      e.stopPropagation();
      const newData = this.tasks.filter((i) => i.id !== item.id);
      this.tasks = newData;
      this.values = newData;
      this.$emit("onremove", { detail: item });
    }
  };

  myImagePreview = (urls: UploaderFileListItem[], index: number) => {
    if (this.previewStatus) return;
    this.previewStatus = true;
    const data = urls.map((i) => i.url || i.content || "");
    // eslint-disable-next-line
    this.previewInstance = imagePreview({ images: data, startPosition: index });
    this.previewStatus = false;
  };

  // 设置状态
  setStatus(file: UploaderFileListItem) {
    this.tasks = this.tasks.map((i) => {
      if (i.id === file.id) {
        Object.assign(i, file);
      }
      return i;
    });
  }

  closePreview() {
    if (this.previewInstance) this.previewInstance.close();
  }

  render() {
    const { capture, accept, multiple, name, id, disabled } = this;
    const hiddenUpload = this.tasks.length >= Number(this.maxcount);
    const showTasks = this.preview ? this.tasks.slice(0, this.maxcount) : [];
    return (
      <Fragment>
        {!this.readonly && (
          <div
            class={`quark-uploader ${disabled && "uploader-disabled"}`}
            style={{ display: !hiddenUpload ? "block" : "none" }}
          >
            <slot name="uploader">
              <div class="quark-uploader-icon">
                <quark-icon-camera-fill size="32" color={this.iconcolor} />
              </div>
            </slot>
            <input
              ref={this.inputRef}
              name={name}
              id={id}
              type="file"
              accept={accept}
              multiple={multiple}
              capture={capture}
              onchange={this.onChange}
              disabled={disabled}
            />
          </div>
        )}
        {showTasks.map((item, index, n) => (
          <div class="quark-uploader-preview-item" key={item.id}>
            {item.status === "uploading" && (
              <div class="uploading" slot="uploading">
                <quark-loading type="circular" color="#fff" />
                <span class="uploading-text">{item.message}</span>
              </div>
            )}
            <img
              src={item.url || item.content}
              onClick={() => this.myImagePreview(n, index)}
            />
            {!this.hidedelete && !this.readonly && (
              <span
                class="quark-uploader-remove"
                onClick={(e) => this.onRemove(e, item, index)}
              >
                <quark-icon-close />
              </span>
            )}
          </div>
        ))}
      </Fragment>
    );
  }
}

export default QuarkUploader;
