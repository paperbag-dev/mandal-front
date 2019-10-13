import React, {ReactNode} from 'react';
import TitleProvider from '@components/block/TitleProvider';
import TitleProviderOption from '@domain/types/TitleProviderOption';

interface Props {
  titleProvider: TitleProviderOption;
}

export default class DefaultTitleProvider<T> extends TitleProvider<Props> {

  constructor (props: Props) {
    super(props);
  }

  getTitleText (): string {
    return 'foo';
  }

  render (): ReactNode {
    return (<div>
      <p style={{
        color: this.props.titleProvider.textColor
      }}>bar</p>
    </div>);
  }

}