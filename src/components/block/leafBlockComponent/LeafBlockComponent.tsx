import React, {HTMLAttributes, ReactNode} from 'react';
import './styled.scss';
import AbstractBlockComponent from '../abstractBlockComponent/AbstractBlockComponent';

export interface Props extends HTMLAttributes<HTMLDivElement> {

}

interface State {
    mockText: string;
    editText: string;
    editMode: boolean;
}

/**
 * Block that is literally a leaf.
 */
export default class LeafBlockComponent extends AbstractBlockComponent<Props, State> {

    public state: State;

    public constructor (props: HTMLAttributes<HTMLDivElement>) {
      super(props);
      this.state = {
        mockText: 'init',
        editText: '',
        editMode: false
      };
    }

    public drawComponent (): ReactNode {

      if (this.state.editMode) {
        return (<input value={this.state.editText}
          onChange={this.onInputChange.bind(this)}
          onBlur={this.onInputBlur.bind(this)}
        />);
      }

      return (<h2>{this.state.mockText}</h2>);
    }

    public onRightClick (): void {

    }

    public onNormalLeftClick (): void {
      this.setState({
        editMode: true
      });
    }

    public onCtrlLeftClick (): void {

    }

    public onBlur (): void {

    }

    private onInputChange (event: React.ChangeEvent<HTMLInputElement>): void {
      this.setState({
        ...this.state,
        editText: event.target.value,
        mockText: event.target.value
      });
    }

    private onInputBlur (event: React.ChangeEvent<HTMLInputElement>): void {
      this.setState({
        ...this.state,
        editMode: false,
        mockText: event.target.value
      });
    }

    public render (): ReactNode {
      return(<div className={'item'}
        onClick={this.onLeftClick.bind(this)}
        onBlurCapture={this.onBlur.bind(this)}
        tabIndex={0}
      >
        {this.drawComponent()}
      </div>);
    }

}
