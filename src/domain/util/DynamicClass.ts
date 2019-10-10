import {Store} from '../block/BlockTypeStore';

export default class DynamicClass {
  public constructor(className: string, opts?: any) {
    if (Store[className] === undefined || Store[className] === null) {
      throw new Error(`Class type of \'${className}\' is not in the store`);
    }
    return new Store[className](opts);
  }
}