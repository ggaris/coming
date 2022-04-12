import type { ReactNode } from 'react'
import React, { useEffect } from 'react'
// import { UseScopeClass } from '../../../hooks/index'
import './button.css'

type Mold = 'default' | 'primary' | 'danger' | 'link'
type Size = 'medium' | 'large' | 'small'
/** Button的可支持的参数类型
 * type | size | onClick | className | disabled | icon | loading
 */
export interface ComingButton {
  /**
   * @type  按钮样式
   * @size 按钮尺寸
   * @onClick 点击事件
   * @className 自定义 class name
   * @disabled 禁用状态
   * @icon 图标
   * @loading 加载状态
   */
  type?: Mold
  size?: Size
  onClick?: Function
  disabled?: boolean
  icon?: ReactNode
  loading?: boolean
}

const Button: React.FC<ComingButton> = ({
  type = 'default',
  size = 'medium',
  onClick = () => { },
  disabled = false,
  icon = null,
  loading = false,
  children = '',
}) => {
  // const ButtonClass = UseScopeClass('cui-button')
  useEffect(() => {
  }, [loading])

  return (
    <button className=''
      disabled={disabled}
      onClick={(e) => { onClick(e) }}>
      {icon}
      {children}
    </button>
  )
}

export default Button
