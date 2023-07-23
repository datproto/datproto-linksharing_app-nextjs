import React from 'react'
import {PrimaryButton} from '@/components/atoms/Button'
import Link from 'next/link'
import {FormProvider, useForm} from 'react-hook-form'

interface IForm {
  title?: string
  description?: string
  submitButtonText?: string
  switchAction?: {
    text: string
    ctaText: string
    url: string
  }
  children?: React.ReactNode
}

function Form({
                title = 'form title',
                description = 'form description',
                submitButtonText,
                switchAction = {text: 'something you want to ask user?', ctaText: 'tell them to click here', url: '#'},
                children
              }: IForm) {
  const methods = useForm()

  const onSubmit = methods.handleSubmit(data => {
    console.log(data)
  })

  return (
    <div className="flex flex-col gap-10">
      <div id="form-header" className="flex flex-col gap-2">
        <h1 className="text-xl font-bold leading-[150%] first-letter:capitalize">
          {title}
        </h1>

        <h2 className="body-m first-letter:capitalize">
          {description}
        </h2>
      </div>

      <FormProvider {...methods}>
        <form
          className="flex flex-col gap-6"
          onSubmit={event => event.preventDefault()}
          noValidate
        >
          {children}

          <PrimaryButton onClick={() => onSubmit()} type="submit" text={submitButtonText}/>

          <div className="body-m text-center">
            <p className="first-letter:capitalize">
              {switchAction.text}
            </p>

            <Link href={switchAction.url}>
              <p className="text-purple-sharing first-letter:capitalize">{switchAction.ctaText}</p>
            </Link>
          </div>
        </form>
      </FormProvider>

    </div>
  )
}

export default Form