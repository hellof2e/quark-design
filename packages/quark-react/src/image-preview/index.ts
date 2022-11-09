import reactify from "@quarkd/reactify";
import "quarkd/lib/imagepreview";
import { FC } from "react";
import { Props } from "quarkd/lib/imagepreview";
import { componentBaseInterface, ReactifyProps } from "../type";

type ImagePreviewProps = componentBaseInterface & ReactifyProps<Props, {}>;
interface Options {
  images: string[]; // 要显示的图片数组
  startPosition?: number; // 默认显示位置
  change?: (index: number) => void; // 图片滑到事件
  close: (index: number) => void; // 组件关闭事件
}
interface ImagePreviewRef {
  setData: (data: Options) => void;
}

type ImagePreviewType = FC<ImagePreviewProps>;
const ImagePreview = reactify("quark-image-preview") as ImagePreviewType;

export default ImagePreview;
export { ImagePreviewRef };
