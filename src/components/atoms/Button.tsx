import React from 'react'

interface IButton {
  text?: string
  type?: 'button' | 'submit' | 'reset'
  customClass?: string
  disabled?: boolean
  onClick?: React.MouseEventHandler
}

function Button({text = 'button', type = 'button', customClass, disabled = false, onClick}: IButton) {
  return (
    <button type={type}
            className={`heading-s w-full rounded-lg py-3 first-letter:capitalize${customClass && ' ' + customClass} cursor-pointer transition-all disabled:cursor-auto`}
            onClick={onClick}
            disabled={disabled}>
      {text}
    </button>
  )
}

function PrimaryButton({text, type, customClass, disabled, onClick}: IButton) {
  return (
    <Button
      text={text}
      type={type}
      customClass="bg-purple-sharing text-white hover:bg-purple-sharing-hover disabled:bg-purple-sharing/[25%]"
      onClick={onClick}
      disabled={disabled}
    />
  )
}

function SecondaryButton({text, type, customClass, disabled, onClick}: IButton) {
  return (
    <Button
      text={text}
      type={type}
      customClass="bg-transparent text-purple-sharing border-purple-sharing border-2 hover:bg-purple-sharing-light disabled:hover:bg-transparent disabled:opacity-25"
      onClick={onClick}
      disabled={disabled}
    />
  )
}

export default Button
export {PrimaryButton, SecondaryButton}