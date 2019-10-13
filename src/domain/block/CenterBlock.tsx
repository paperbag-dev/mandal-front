import {BlockData, GetBlockResponse} from '@domain/block/GetBlockResponse';
import Block from '@domain/block/Block';
import React, {ReactNode} from 'react';
import CompositeBlockComponent from '@components/block/compositeBlock/CompositeBlock';
import CompositeBlockInteraction from '@domain/plugin/CompositeBlockInteraction';

interface CenterBlockData extends BlockData{
    title: string;
}

export default class CenterBlock implements Block {

    //private readonly title: BlockTitle;
    private readonly blockData: CenterBlockData

    public constructor (blockOption: GetBlockResponse){
      this.blockData = blockOption.blockData as CenterBlockData;
    }
    public onLeftClick (): void {
    }

    public onRightClick (): void {
    }

    public toString (): string {
      return this.blockData.title;
    }

    public draw (): ReactNode {
      return (<CompositeBlockComponent
        interaction={new CompositeBlockInteraction()}
      />);
    }
}