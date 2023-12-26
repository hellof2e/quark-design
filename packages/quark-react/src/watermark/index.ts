import { FC } from "react";
import reactify from "@quarkd/reactify";
import "quarkd/lib/watermark";
import { Props } from "quarkd/lib/watermark";
import { componentBaseInterface, ReactifyProps } from "../type";

type WaterMarkProps = componentBaseInterface &
  ReactifyProps<Props, Record<string, never>>;
type componentType = FC<WaterMarkProps>;

const WaterMark = reactify("quark-watermark") as componentType;
export default WaterMark;
