import reactify from "@quarkd/reactify";
import "quarkd/lib/image";
import { FC } from "react";
import { Props, CustomEvent } from "quarkd/lib/image";
import { componentBaseInterface, ReactifyProps } from "../type";

type ImageProps = componentBaseInterface & ReactifyProps<Props, CustomEvent>;
type ImageType = FC<ImageProps>;

const Image = reactify("quark-image") as ImageType;
export default Image;
