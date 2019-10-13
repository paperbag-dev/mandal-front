import CompositeBlockActionGroup from '@domain/plugin/CompositeBlockActionGroup';

export default abstract class CompositeBlockPlugin {

  private actionGroup: CompositeBlockActionGroup = new CompositeBlockActionGroup();

  showToolTip (){

  }
}