import React, {ReactNode} from 'react';
import {GetBoardResponse} from '@domain/board/GetBoardResponse';
import {GetBlockResponse} from '@domain/block/GetBlockResponse';
import {BlockTypes} from '@domain/block/BlockTypes';
import Block from '@domain/block/Block';
import BlockFactory from '@domain/block/BlockFactory';

import './styles.scss';

const mockCompositeBlock: any = {
  'blockType': BlockTypes.COMPOSITE,
  'blockData': {
    'title': 'hello world!'
  },
  'blockOption': {
    'titleProviderOption': {
      'textColor': '#ffc125'
    }
  }
};

const mockLeafBlock: GetBlockResponse = {
  blockType: BlockTypes.LEAF,
  blockData: {
    title: 'hello world!'
  }
};
const mockCenterBlock: GetBlockResponse = {
  blockType: BlockTypes.CENTER,
  blockData: {
    title: 'hello world!'
  }
};

export const mockResponse: GetBoardResponse = {
  blocks: [
    mockCompositeBlock,
    mockLeafBlock,
    mockLeafBlock,
    mockCompositeBlock,
    mockCenterBlock,
    mockCompositeBlock,
    mockLeafBlock,
    mockLeafBlock,
    mockLeafBlock
  ]
};

export default class Board extends React.Component {

  private drawBoard (): ReactNode[]{
    const blockResponses: GetBlockResponse[] = mockResponse.blocks;
    const blocks: ReactNode[] = [];
    for(let i=0; i < blockResponses.length; i++){
      const res: GetBlockResponse= blockResponses[i];
      const block: Block = BlockFactory.of(res);
      blocks[i] = block.draw();
    }
    return blocks;
  }

  public render (): ReactNode {
    return (
      <div>
        <div className={'board'}>
          {this.drawBoard()}
        </div>
      </div>
    );}
}
