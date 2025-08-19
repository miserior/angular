import { FullnamePipe } from './fullname-pipe';

describe('FullnamePipe', () => {
  it('create an instance', () => {
    const pipe = new FullnamePipe();
    expect(pipe).toBeTruthy();
  });
});

fit('should return full name when first and last names are provided', () => {

  //Setup
  const pipe = new FullnamePipe();
  const firstName = 'John';
  const lastName = 'Doe';

  //Expect
  const result = pipe.transform(firstName, lastName);

  //assert
  expect(result).toBe('John Doe');
});
