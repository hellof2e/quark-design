import reactify from "@quarkd/reactify";
import "quarkd/lib/swipecell";
import { FC } from "react";
import {
  Props,
  SwipeCellSide,
  SwipeCellPosition,
  BeforeCloseFunc,
} from "quarkd/lib/swipecell/type";
import { componentBaseInterface, ReactifyProps } from "../type";

type SwipeCellProps = componentBaseInterface &
  ReactifyProps<Props, CustomEvent>;

type SwipeCellType = FC<SwipeCellProps>;

interface Ref {
  open(side: SwipeCellPosition): void;
  close(position: SwipeCellPosition): void;
  setBeforeClose(fn: BeforeCloseFunc): void;
}

type SwipeCellRef = Ref & HTMLElement;

const SwipeCell = reactify("quark-swipe-cell") as SwipeCellType;
export default SwipeCell;
export {
  SwipeCellRef,
  SwipeCellSide,
  SwipeCellPosition,
  BeforeCloseFunc,
  SwipeCellProps,
  SwipeCellType,
};
