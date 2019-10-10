import CenterBlock from "./CenterBlock";
import CompositeBlock from "./CompositeBlock";
import LeafBlock from "./LeafBlock";
import {BlockTypes} from "@domain/block/BlockTypes";

export const Store: any = {
    [`${BlockTypes.CENTER}`]: CenterBlock,
    [`${BlockTypes.COMPOSITE}`]: CompositeBlock,
    [`${BlockTypes.LEAF}`]: LeafBlock
}