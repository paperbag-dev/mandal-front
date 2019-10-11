import {BlockTypes} from '@domain/block/BlockTypes';

export interface GetBlockResponse {
    blockType: BlockTypes;
    blockData: BlockData;
}

export interface BlockData {

}