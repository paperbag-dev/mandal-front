import {BlockTypes} from '@domain/block/BlockTypes';
import BlockOption from '@domain/types/BlockOption';

export interface GetBlockResponse {
    blockType: BlockTypes;
    blockData: BlockData;
    blockOption?: BlockOption;
}

export interface BlockData {

}