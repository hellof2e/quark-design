import reactify from "@quarkd/reactify";
import "quarkd/lib/overlay";
import { FC } from "react";
import { Props, CustomEvent } from "quarkd/lib/overlay";
import { componentBaseInterface, ReactifyProps } from "../type";

type OverlayProps = componentBaseInterface & ReactifyProps<Props, CustomEvent>;
type OverlayType = FC<OverlayProps>;

const Overlay = reactify("quark-overlay") as OverlayType;
export default Overlay;
