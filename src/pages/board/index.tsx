import React, {ReactNode} from 'react';
import {GetBoardResponse} from "@domain/board/GetBoardResponse";
import {GetBlockResponse} from "@domain/block/GetBlockResponse";
import {BlockTypes} from "@domain/block/BlockTypes";
import Block from "@domain/block/Block";
import BlockFactory from "@domain/block/BlockFactory";

import './styles.scss';

let mockCompositeBlock: GetBlockResponse = {
    blockType: BlockTypes.COMPOSITE,
    blockData: {
        title: "hello world!"
    }
};

let mockLeafBlock: GetBlockResponse = {
    blockType: BlockTypes.LEAF,
    blockData: {
        title: "hello world!"
    }
};
let mockCenterBlock: GetBlockResponse = {
    blockType: BlockTypes.CENTER,
    blockData: {
        title: "hello world!"
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
        mockLeafBlock,
    ]
}

export default class Board extends React.Component {

    private drawBoard(): ReactNode[]{
        let blockResponses: GetBlockResponse[] = mockResponse.blocks
        let blocks: ReactNode[] = [];
        for(let i=0; i < blockResponses.length; i++){
            let res: GetBlockResponse= blockResponses[i]
            let block: Block = BlockFactory.of(res)
            blocks[i] = block.draw();
        }
        return blocks
    }

    public render() {
        return (
            <div>
                <div className={"board"}>
                    {this.drawBoard()}
                </div>
            </div>
        )}
}
