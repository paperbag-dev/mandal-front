import CompositeBlockActionGroup from '@domain/plugin/CompositeBlockActionGroup';
import CompositeBlockContentProviderGroup from '@domain/plugin/CompositeBlockContentProviderGroup';
import React from 'react';
import TitleProvider, {TitleProviderProps} from '@components/block/TitleProvider';
import CompositeBlockOption from '@domain/types/CompositeBlockOption';
import TitleProviderOption from '@domain/types/TitleProviderOption';

export default class CompositeBlockInteraction {

    private readonly defaultTitleProviderOption: TitleProviderOption = {
      textColor: '#aaa'
    };

    private readonly  option?: CompositeBlockOption;
    // Make Caller of this class passes props, but not raw props
    // The props which has partial props to prevent attack
    private contentProviderGroup: CompositeBlockContentProviderGroup;
    private actionGroup: CompositeBlockActionGroup;

    public titleProvider: React.ReactElement<TitleProvider<TitleProviderProps>>;

    constructor (options?: CompositeBlockOption) {
      this.contentProviderGroup = new CompositeBlockContentProviderGroup();
      this.actionGroup = new CompositeBlockActionGroup(this.contentProviderGroup);

      if(!options){
        this.titleProvider = this.contentProviderGroup.getTitleProviderComponent();
        return;
      }
      this.titleProvider = this.contentProviderGroup.getTitleProviderComponent(options.titleProviderOption);
    }

    leftClickHandler () {
    }

    dragHandler () {

    }

    hoverHandler (event: React.MouseEvent<HTMLElement>): any {
      return this.actionGroup.onHover(event);
    }

}