import type { HTMLAttributes, ReactNode } from 'react'
import React, { useEffect } from 'react'
import useScopeClass from '../../../hooks/scopeClass'
import './button.css'

type Mold = 'primary' | 'danger' | 'link'
type Size = 'medium' | 'large' | 'small'
/** Button的可支持的参数类型
 * type | size | onClick | className | disabled | icon | loading
 */
export interface ComingButton extends HTMLAttributes<HTMLButtonElement> {
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
  disabled?: boolean
  icon?: ReactNode
  loading?: boolean
}

const Button: React.FC<ComingButton> = ({
  type = 'primary',
  size = 'medium',
  onClick = () => { },
  disabled = false,
  icon = null,
  loading = false,
  children = '',
}) => {
  const ButtonClass = useScopeClass('cui-button');
  useEffect(() => {
  }, [loading])

  return (
    <button className={[ButtonClass(''), ButtonClass(type), ButtonClass(size)].join(' ')}
      disabled={disabled}
      onClick={(e) => { onClick(e) }}>
      {icon}
      {children}
    </button>
  )
}

export default Button
