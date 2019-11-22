import React, {HTMLAttributes} from 'react';
import './styled.scss';

export interface Props extends HTMLAttributes<HTMLDivElement> {

}

interface BlockState {
    mockText: string;
    editMode: true;
}

export default abstract class  AbstractBlockComponent<Props, State> extends React.Component<Props, State> {

  constructor (props: Props){
    super(props);
  }

    abstract onNormalLeftClick(): void;

    abstract onCtrlLeftClick(): void;

    abstract onBlur(): void;

    onLeftClick (event: React.MouseEvent<HTMLElement>): void {
      if(event.ctrlKey){
        return this.onCtrlLeftClick();
      }
      return this.onNormalLeftClick();
    }

    onRightClick (event: MouseEvent): void {
      event;
    }

    onDrag (): void{

    }
}