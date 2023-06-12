import {
  Fragment,
  property,
  createRef,
  customElement,
  state,
  QuarkElement,
} from "quarkc";
import { UploaderFileListItem } from "./utils";
import "@quarkd/icons/lib/camera-fill";
import "@quarkd/icons/lib/close";
import style from "./style.css";
import imagePreview from "../imagepreview/index";
import "../loading";
import "../grid";

@customElement({ tag: "quark-native-uploader", style })
class QuarkNativeUploader extends QuarkElement {
  @property()
  id = "";

  @property()
  name = "";

  @property()
  iconcolor = "#ccc";

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

  onAfterRead = () => {
    const urls = this.tasks.map((i) => i.url);
    console.log("click");
    this.$emit("onread", { detail: urls });
  };
  // 设置初始化预览数据
  setPreview = (urls: string[]) => {
    const data = urls
      .map((i, index) => ({
        status: "done",
        message: "",
        id: index,
        url: i,
      }))
      .slice(0, this.maxcount);
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

  closePreview() {
    if (this.previewInstance) this.previewInstance.close();
  }

  render() {
    const showUpload = this.tasks.length >= Number(this.maxcount);
    const showTasks = this.tasks.slice(0, this.maxcount);
    return (
      <Fragment>
        {!(this.readonly || showUpload) && (
          <div class="quark-uploader">
            <slot name="uploader">
              <div class="quark-uploader-icon" onClick={this.onAfterRead}>
                <quark-icon-camera-fill size="32" color={this.iconcolor} />
              </div>
            </slot>
          </div>
        )}
        {showTasks.map((item, index, n) => (
          <div
            class="quark-uploader-preview-item"
            key={item.id}
            onClick={() => this.myImagePreview(n, index)}
          >
            {item.status === "uploading" && (
              <div class="uploading" slot="uploading">
                <quark-loading type="circular" color="#fff" />
                <span class="uploading-text">{item.message}</span>
              </div>
            )}
            <img src={item.url || item.content} />
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

export default QuarkNativeUploader;
