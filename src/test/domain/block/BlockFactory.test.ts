import BlockFactory from '@domain/block/BlockFactory';
import {BlockTypes} from '@domain/block/BlockTypes';
import {BlockOption} from '@domain/block/GetBlockResponse';
import Block from '@domain/block/Block';

describe('BlockFactory test', () => {
  test('LeafBlock make test', () =>{
    const mockBlockResponse: BlockOption = {
      blockType: BlockTypes.LEAF,
      blockData: {
        title: 'hello world!'
      }
    };

    const newBlock: Block = BlockFactory.of(mockBlockResponse);
    expect(newBlock.toString()).toBe('hello world!');
  });

  test('CompositeBlock make test', () =>{
    const mockBlockResponse: BlockOption = {
      blockType: BlockTypes.COMPOSITE,
      blockData: {
        title: 'hello world!'
      }
    };

    const newBlock: Block = BlockFactory.of(mockBlockResponse);
    expect(newBlock.toString()).toBe('hello world!');
  });

  test('CompositeBlock make test', () =>{
    const mockBlockResponse: BlockOption = {
      blockType: BlockTypes.CENTER,
      blockData: {
        title: 'hello world!'
      }
    };

    const newBlock: Block = BlockFactory.of(mockBlockResponse);
    expect(newBlock.toString()).toBe('hello world!');
  });
});
