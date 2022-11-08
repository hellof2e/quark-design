import { FC } from "react";
import reactify from "@quarkd/reactify";
import "quarkd/lib/checkbox";
import { GroupProps, GroupCustomEvent } from "quarkd/lib/checkbox";
import { componentBaseInterface, ReactifyProps } from "../type";

type CheckboxGroupProps = componentBaseInterface &
  ReactifyProps<GroupProps, GroupCustomEvent>;
type CheckboxGroupType = FC<CheckboxGroupProps>;

const CheckboxGroup = reactify("quark-checkbox-group") as CheckboxGroupType;
export default CheckboxGroup;
