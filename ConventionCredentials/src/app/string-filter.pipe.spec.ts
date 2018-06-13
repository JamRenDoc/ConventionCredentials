import { StringFilterPipe } from './string-filter.pipe';

describe('FirstNameFilterPipe', () => {
  it('create an instance', () => {
    const pipe = new StringFilterPipe();
    expect(pipe).toBeTruthy();
  });
});
