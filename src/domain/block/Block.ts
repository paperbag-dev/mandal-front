import {ReactNode} from 'react';

export default interface Block {
    draw(): ReactNode;
};