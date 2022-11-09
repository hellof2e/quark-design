import reactify from "@quarkd/reactify";
import "quarkd/lib/noticebar";
import { FC } from "react";
import { Props, CustomEvent } from "quarkd/lib/noticebar";
import { componentBaseInterface, ReactifyProps } from "../type";

type NoticebarProps = componentBaseInterface &
  ReactifyProps<Props, CustomEvent>;
type NoticebarType = FC<NoticebarProps>;

const Noticebar = reactify("quark-noticebar") as NoticebarType;
export default Noticebar;
