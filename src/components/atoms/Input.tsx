import React from 'react'

import EmailIcon from '@linksharing/public/images/icon-email.svg'
import PasswordIcon from '@linksharing/public/images/icon-password.svg'
import LinkIcon from '@linksharing/public/images/icon-link.svg'
import {useFormContext} from 'react-hook-form'
import {isFormInvalid} from '@/utils/isFormInvalid'
import {findInputError} from '@/utils/findInputError'

interface IInput {
  label?: string
  id?: string
  type?: string
  name?: string
  placeholder?: string
  required?: boolean
  maxlength?: number
  validation?: any
}

function Input({
                 label = 'label',
                 type = 'text',
                 id,
                 name = 'input',
                 placeholder = 'Something ...',
                 validation,
                 ...rest
               }: IInput) {
  const {
    register,
    formState: {errors}
  } = useFormContext()

  const inputError = findInputError(errors)
  const isInvalid = isFormInvalid(inputError)

  return (
    <div className="input flex w-full flex-col gap-1">
      <label htmlFor={id}
             className="body-s first-letter:capitalize invalid:[&:not(:placeholder-shown):not(:focus)]:text-red-500">{label}</label>

      {/* Input */}
      <div
        className={
          `flex items-center gap-3 rounded-lg border border-gray-sharing-borders px-4 py-3 ${isInvalid && 'invalid:[&:not(:placeholder-shown):not(:focus)]:border-red-500'}`
        }>
        {type === 'email'
          ? <EmailIcon/>
          : type === 'password'
            ? <PasswordIcon/>
            : type === 'url'
              ? <LinkIcon/>
              : null
        }
        <input
          type={type} placeholder={placeholder}
          className="body-m flex-1 bg-transparent outline-none" {...rest}
          pattern={
            type === 'email'
              ? '[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$'
              : type === 'password'
                ? '.{7,}'
                : '*'
          }
          {...register(name, validation)}
        />
      </div>
    </div>
  )
}

export default Input