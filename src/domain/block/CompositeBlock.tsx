import {BlockData, GetBlockResponse} from '@domain/block/GetBlockResponse';
import Block from '@domain/block/Block';
import React, {ReactNode} from 'react';
import CompositeBlockComponent from '../../components/block/compositeBlock/CompositeBlock';
import CompositeBlockOption from '@domain/types/CompositeBlockOption';
import CompositeBlockInteraction from '@domain/plugin/CompositeBlockInteraction';

interface CompositeBlockData extends BlockData{
    title: string;
}

export default class CompositeBlock implements Block {

    private readonly blockData: CompositeBlockData;
    private readonly compositeBlockOption: CompositeBlockOption;
    private interaction: CompositeBlockInteraction;

    public constructor (blockOption: GetBlockResponse){
      this.blockData = blockOption.blockData as CompositeBlockData;
      this.compositeBlockOption = blockOption.blockOption as CompositeBlockOption;
      this.interaction = new CompositeBlockInteraction(this.compositeBlockOption);
    }

    public toString (): string {
      return this.blockData.title;
    }

    public draw (): ReactNode {
      return (<CompositeBlockComponent
        interaction={this.interaction}
      />);
    }
}