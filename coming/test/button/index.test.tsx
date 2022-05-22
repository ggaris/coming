import { describe, test, assert, it, expect } from 'vitest'
// describe.only("suite", () => {
//   test("sqrt", () => {

//     assert.equal(Math.sqrt(4), 2);
//   });
// });

// describe('other suite', () => {
//   // ... 这里的测试套件将会被跳过
// });


import Button from '../../lib/button';

it('renders correctly', () => {
  // const tree = ren
  //   .create(<Button >Facebook</Button>)
  //   .toJSON();
  expect(<Button>333</Button>);
});
