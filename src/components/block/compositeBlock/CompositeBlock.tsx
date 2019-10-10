import React, {HTMLAttributes, ReactNode} from 'react';
import './styled.scss';
import AbstractBlockComponent from '../abstractBlockComponent/AbstractBlockComponent';

export interface Props extends HTMLAttributes<HTMLDivElement> {

}

interface State {
    mockText: string;
}

/**
 * Block that can be parent of other blocks
 */
export default class CompositeBlockComponent extends AbstractBlockComponent {

    public state: State

    public constructor(props: HTMLAttributes<HTMLDivElement>) {
      super(props);
      this.state = {
        mockText: 'init'
      };
    }

    public onRightClick(): void {
    }

    public onNormalLeftClick(): void {
      this.setState({
        mockText: 'Composite block is currently does nothing'
      });
    }

    public onCtrlLeftClick(): void {

    }

    public onBlur(): void {
      this.setState({
        mockText: 'blurred'
      });
    }

    public render(): ReactNode {
      return(<div className={'item'}
        onClick={this.onLeftClick.bind(this)}
        onBlur={this.onBlur.bind(this)}
        tabIndex={0}
      >
        <p>{this.state.mockText}</p>
      </div>);
    }
}
