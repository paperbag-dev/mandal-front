import BlockOption from '@domain/types/BlockOption';
import TitleProviderOption from '@domain/types/TitleProviderOption';

export default interface CompositeBlockOption extends BlockOption {
  titleProviderOption: TitleProviderOption;
};