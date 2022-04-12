import type { HTMLAttributes } from 'react'
import React from 'react'
import "./button.css"
interface ComingButton extends HTMLAttributes<''> {

}
const Button: React.FC<ComingButton> = () => {
  return (
    <div className={'cui-button'}>Button</div>
  )
}
export default Button
