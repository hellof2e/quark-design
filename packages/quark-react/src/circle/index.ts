import { FC } from "react";
import reactify from "@quarkd/reactify";
import "quarkd/lib/cell";
import { Props, StrokeLinecap, CircleStartPosition } from "quarkd/lib/circle";
import { componentBaseInterface, ReactifyProps } from "../type";

type CircleProps = componentBaseInterface & ReactifyProps<Props, {}>;
type CircleType = FC<CircleProps>;

interface Ref {
  setGradient(color: Record<string, string>): void;
}
type CircleRef = Ref & HTMLElement;

const Circle = reactify("quark-circle") as CircleType;

export default Circle;
export { CircleRef, CircleType, StrokeLinecap, CircleStartPosition };
