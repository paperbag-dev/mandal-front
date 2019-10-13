import React, {HTMLAttributes, ReactNode} from 'react';
import './styled.scss';
import AbstractBlockComponent from '../abstractBlockComponent/AbstractBlockComponent';
import CompositeBlockInteraction from '@domain/plugin/CompositeBlockInteraction';
import {throttle} from 'lodash';
import TitleProvider, {TitleProviderProps} from '@components/block/TitleProvider';
export interface CompositeBlockProps extends HTMLAttributes<HTMLDivElement> {
  interaction: CompositeBlockInteraction;
}

interface CompositeBlockState {
    mockText: string;
}

/**
 * Block that can be parent of other blocks
 */
export default class CompositeBlockComponent<T>
  extends AbstractBlockComponent<CompositeBlockProps, CompositeBlockState> {

    public state: CompositeBlockState;
    public interaction: CompositeBlockInteraction;
    private TitleProviderComponent: React.ReactElement<TitleProvider<TitleProviderProps>>;

    public constructor (props: CompositeBlockProps) {
      super(props);
      this.state = {
        mockText: 'init'
      };

      this.interaction = this.props.interaction;
      this.TitleProviderComponent = this.interaction.titleProvider;
    }

    public onRightClick (): void {
    }

    public onNormalLeftClick (): void {
      this.setState({
        mockText: 'Composite block is currently does nothing'
      });
    }

    public onCtrlLeftClick (): void {

    }

    public onBlur (): void {
      this.setState({
        mockText: 'blurred'
      });
    }

    public render (): ReactNode {

      return(<div className={'item'}
        onClick={this.interaction.leftClickHandler}
        onBlur={this.onBlur.bind(this)}
        onMouseMove={
          throttle(this.interaction.hoverHandler.bind(this.interaction), 500)
        }
        tabIndex={0}
      >

        {this.TitleProviderComponent}
      </div>);
    }
}
