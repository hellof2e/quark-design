import reactify from "@quarkd/reactify";
import "quarkd/lib/marketdialog";
import { FC } from "react";
import { Props, CustomEvent } from "quarkd/lib/marketdialog";
import { componentBaseInterface, ReactifyProps } from "../type";

type MarketDialogProps = componentBaseInterface &
  ReactifyProps<Props, CustomEvent>;
type MarketDialogType = FC<MarketDialogProps>;

const MarketDialog = reactify("quark-market-dialog") as MarketDialogType;
export default MarketDialog;
