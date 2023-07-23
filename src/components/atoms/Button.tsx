import React from 'react'

interface IButton {
  text?: string
  type?: 'button' | 'submit' | 'reset'
  customClass?: string
  disabled?: boolean
}

function Button({text = 'button', type = 'button', customClass, disabled = false}: IButton) {
  return (
    <button type={type}
            className={`heading-s py-3 w-full rounded-lg${customClass && ' ' + customClass} cursor-pointer disabled:cursor-auto transition-all`}
            disabled={disabled}>
      {text}
    </button>
  )
}

function PrimaryButton({text, type, customClass, disabled}: IButton) {
  return (
    <Button
      text={text}
      type={type}
      customClass="bg-purple-sharing text-white hover:bg-purple-sharing-hover disabled:bg-purple-sharing/[25%]"
      disabled={disabled}
    />
  )
}

function SecondaryButton({text, type, customClass, disabled}: IButton) {
  return (
    <Button
      text={text}
      type={type}
      customClass="bg-transparent text-purple-sharing border-purple-sharing border-2 hover:bg-purple-sharing-light disabled:hover:bg-transparent disabled:opacity-25"
      disabled={disabled}
    />
  )
}

export default Button
export {PrimaryButton, SecondaryButton}