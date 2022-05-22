import { describe, test, assert, it, expect } from 'vitest'

import Button from '../../lib/button';

it('renders correctly', () => {
  expect(<Button>333</Button>);
});
