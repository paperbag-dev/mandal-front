import React, {ReactNode} from 'react';

export interface TitleProviderProps {

}

/**
 * Base class of TitleProvider which has responsibility to draw
 * Title of block. Plugin maker should extends this abstract class
 * To provide TitleProvider
 *
 * method : Native react render function
 * method : Returns raw text of TitleProvider
 */
export default abstract class TitleProvider<T> extends React.Component<T & TitleProviderProps> {

  constructor (props: any) {
    super(props);
  }

  abstract render (): ReactNode;
  abstract getTitleText (): string;

}