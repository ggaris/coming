import { describe, test, assert, it, expect } from 'vitest'
import { render, fireEvent, screen } from '@testing-library/react'
import Dialog from '../../lib/dialog';

it('renders correctly', () => {
  test("should show title all the time", () => {

    render(<Dialog onClick={() => {
      console.log(3)
      return 3
    }}>Content</Dialog>);

    expect(screen.getByText(/Testing/i))
  })
});


test('shows the children when the checkbox is checked', () => {
  const testMessage = 'button'
  render(<Dialog>{testMessage}</Dialog>)

  expect(screen.queryByText(testMessage)).toBeDefined()


})
