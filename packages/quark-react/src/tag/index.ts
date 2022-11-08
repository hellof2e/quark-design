import reactify from "@quarkd/reactify";
import "quarkd/lib/tag";
import { FC } from "react";
import { Props } from "quarkd/lib/tag";
import { componentBaseInterface, ReactifyProps } from "../type";

type TagProps = componentBaseInterface & ReactifyProps<Props, {}>;
type TagType = FC<TagProps>;

const Tag = reactify("quark-tag") as TagType;
export default Tag;
