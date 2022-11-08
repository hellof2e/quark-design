import reactify from "@quarkd/reactify";
import "quarkd/lib/popup";
import { FC } from "react";
import { Props, CustomEvent } from "quarkd/lib/popup";
import { componentBaseInterface, ReactifyProps } from "../type";

type PopupProps = componentBaseInterface & ReactifyProps<Props, CustomEvent>;
type PopupType = FC<PopupProps>;

const Popup = reactify("quark-popup") as PopupType;
export default Popup;
