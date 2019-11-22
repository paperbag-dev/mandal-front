import CompositeBlockContentProviderGroup from '@domain/plugin/CompositeBlockContentProviderGroup';
import AbstractBlockActionGroup from '@domain/plugin/AbstractBlockActionGroup';
import React from 'react';

export default class CompositeBlockActionGroup extends AbstractBlockActionGroup{

  private contentProviderGroup: CompositeBlockContentProviderGroup;

  constructor ();
  constructor (contentProviderGroup: CompositeBlockContentProviderGroup);
  constructor (contentProviderGroup?: any) {
    super();
    this.contentProviderGroup = contentProviderGroup;
  }

  public onHover (event: React.MouseEvent<HTMLElement>): void {
    console.log('overriden hover '+event.clientX);
  }

}