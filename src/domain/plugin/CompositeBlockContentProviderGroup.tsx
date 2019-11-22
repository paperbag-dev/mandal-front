import DefaultTitleProvider from '@components/contentProvider/DefaultTitleProvider';
import TitleProvider from '@components/block/TitleProvider';
import React from 'react';
import TitleProviderOption from '@domain/types/TitleProviderOption';

export  default class CompositeBlockContentProviderGroup {

  private readonly defaultTitleProviderOption: TitleProviderOption = {
    textColor: '#aaa'
  };

  constructor () {

  }

  getTitleProviderComponent (titleProviderOption?: TitleProviderOption):
      React.ReactElement<TitleProvider<TitleProviderOption>> {

    if(titleProviderOption){
      return <DefaultTitleProvider
        titleProvider={titleProviderOption}
      />;
    }else{
      return <DefaultTitleProvider
        titleProvider={this.defaultTitleProviderOption}
      />;
    }

  }

}