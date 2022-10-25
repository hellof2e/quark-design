import reactify from "@quarkd/reactify";
import "quarkd/lib/marketdialog";
import { FC } from 'react';
import { componentBaseInterface } from '../type';

interface MarketDialogProps extends componentBaseInterface {
    open: boolean
    url?: string
    size?: boolean
    onClose: () => void
}
type MarketDialogType =  FC<MarketDialogProps>;

const MarketDialog = reactify('quark-market-dialog') as MarketDialogType;
export default MarketDialog;