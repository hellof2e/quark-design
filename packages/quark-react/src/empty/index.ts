import { FC } from "react";
import reactify from "@quarkd/reactify";
import "quarkd/lib/empty";
import { Props } from "quarkd/lib/empty";
import { componentBaseInterface, ReactifyProps } from "../type";

type EmptyProps = componentBaseInterface & ReactifyProps<Props, {}>;
type EmptyType = FC<EmptyProps>;

const Empty = reactify("quark-empty") as EmptyType;
export default Empty;
