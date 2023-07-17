import { Rule } from "async-validator";

export type FormRule = Rule;

export type Rules = Record<string, Rule>;

export type labelPosition = "left" | "right";

export interface IFormProps {
  validatefirst?: boolean;
  hidemessage?: boolean;
  hideasterisk?: boolean;
  labelwidth?: string;
  labelsuffix?: string;
  labelposition?: labelPosition;
}

export interface IFormItemProps {
  prop?: string;
  label?: string;
  labelwidth?: string;
  hidemessage?: boolean;
  hideasterisk?: boolean;
  islink?: boolean;
  rules?: FormRule;
}
