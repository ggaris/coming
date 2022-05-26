import { describe, test, assert, it, expect } from 'vitest'
import { render, fireEvent, screen } from '@testing-library/react'
import Button from '../../lib/button';

it('renders correctly', () => {
  test("should show title all the time", () => {

    render(<Button onClick={() => {
      console.log(3)
      return 3
    }}>Content</Button>);

    expect(screen.getByText(/Testing/i))
  })
});


test('shows the children when the checkbox is checked', () => {
  const testMessage = 'button'
  render(<Button>{testMessage}</Button>)

  expect(screen.queryByText(testMessage)).toBeDefined()

  fireEvent.click(screen.queryByText(testMessage))

})
