import { FC } from "react";
import reactify from "@quarkd/reactify";
import "quarkd/lib/cell";
import { componentBaseInterface } from "../type";

interface CellGroupProps extends componentBaseInterface {}
type CellGroupType = FC<CellGroupProps>;

const CellGroup = reactify("quark-cell-group") as CellGroupType;
export default CellGroup;
