import Block from '@domain/block/Block';
import {GetBlockResponse} from '@domain/block/GetBlockResponse';
import DynamicClass from '../util/DynamicClass';

export default class BlockFactory {

  public static of (blockOption: GetBlockResponse): Block{
    return new DynamicClass(blockOption.blockType, blockOption) as Block;
  }

}