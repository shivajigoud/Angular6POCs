import { DynamicAddClassDirective } from './dynamic-add-class.directive';

describe('DynamicAddClassDirective', () => {
  it('should create an instance', () => {
    const directive = new DynamicAddClassDirective(this);
    expect(directive).toBeTruthy();
  });
});
