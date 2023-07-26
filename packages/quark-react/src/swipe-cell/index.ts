import reactify from "@quarkd/reactify";
import "quarkd/lib/swipecell";
import { FC } from "react";
import {
  Props,
  SwipeCellSide,
  SwipeCellPosition,
  BeforeCloseFunc as SwipeCellBeforeClose,
} from "quarkd/lib/swipecell/type";
import { componentBaseInterface, ReactifyProps } from "../type";

type SwipeCellProps = componentBaseInterface &
  ReactifyProps<Props, CustomEvent>;

type SwipeCellType = FC<SwipeCellProps>;

interface Ref {
  open(side: SwipeCellPosition): void;
  close(position: SwipeCellPosition): void;
  setBeforeClose(fn: SwipeCellBeforeClose): void;
}

type SwipeCellRef = Ref & HTMLElement;

const SwipeCell = reactify("quark-swipe-cell") as SwipeCellType;
export default SwipeCell;
export {
  SwipeCellRef,
  SwipeCellSide,
  SwipeCellPosition,
  SwipeCellBeforeClose,
  SwipeCellProps,
  SwipeCellType,
};
