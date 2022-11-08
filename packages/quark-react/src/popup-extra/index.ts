import reactify from "@quarkd/reactify";
import "quarkd/lib/popupextra";
import { FC } from "react";
import { Props, CustomEvent } from "quarkd/lib/popupextra";
import { componentBaseInterface, ReactifyProps } from "../type";

type PopupExtraProps = componentBaseInterface &
  ReactifyProps<Props, CustomEvent>;
type PopupExtraType = FC<PopupExtraProps>;

const PopupExtra = reactify("quark-popupextra") as PopupExtraType;
export default PopupExtra;
