export interface baseInterface
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLElement>,
    HTMLElement
  > {
  name?: string;
  className?: string;
  key?: string | number;
}
export type componentBaseInterface = Omit<
  baseInterface,
  "onChange" | "onSelect" | "onFocus" | "onInput" | "onBlur"
>;
export type ReactifyProps<
  Props extends Record<string, any>,
  Event extends Record<string, any>
> = Props & {
  [E in keyof Event as E extends string ? `on${Capitalize<E>}` : E]: Event[E];
};
