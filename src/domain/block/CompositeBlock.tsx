import {BlockData, GetBlockResponse} from '@domain/block/GetBlockResponse';
import Block from '@domain/block/Block';
import React, {ReactNode} from 'react';
import CompositeBlockComponent from '../../components/block/compositeBlock/CompositeBlock';

interface CompositeBlockData extends BlockData{
    title: string;
}

export default class CompositeBlock implements Block {

    private readonly blockData: CompositeBlockData

    public constructor(blockOption: GetBlockResponse){
      this.blockData = blockOption.blockData as CompositeBlockData;
    }

    public toString(): string {
      return this.blockData.title;
    }

    public draw(): ReactNode {
      return (<CompositeBlockComponent></CompositeBlockComponent>);
    }
}