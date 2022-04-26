import type { HTMLAttributes } from 'react'
import React from 'react'
import useScopeClass from '../../hooks/scopeClass'
interface ComingButton extends HTMLAttributes<''> {

}
const Button: React.FC<ComingButton> = () => {

  const dialogClass = useScopeClass('coming-button');

  return (
    <div className={dialogClass("33")}>Dialog33</div>
  )
}
export default Button
