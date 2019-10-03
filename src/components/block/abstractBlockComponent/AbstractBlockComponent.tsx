import React, {HTMLAttributes} from "react";
import './styled.scss';

export interface Props extends HTMLAttributes<HTMLDivElement> {

}

interface State {
    mockText: string;
    blockFocused: boolean;
}

export default abstract class  AbstractBlockComponent extends React.Component {

    constructor(props: HTMLAttributes<HTMLDivElement>){
        super(props);
    }

    abstract onNormalLeftClick(): void;

    abstract onCtrlLeftClick(): void;

    abstract onBlur(): void;

    onLeftClick(event: React.MouseEvent<HTMLElement>): void {
        if(event.ctrlKey){
            return this.onCtrlLeftClick();
        }
        return this.onNormalLeftClick()
    }

    onRightClick(event: MouseEvent): void {
        event
    }

    onDrag(): void{

    }
}