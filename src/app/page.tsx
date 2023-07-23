'use client'

import Input from '@/components/atoms/Input'
import Form from '@/components/organisms/Form'

export default function Home() {
  return (
    <main className="w-full bg-gray-sharing-light p-[2rem] font-instrument text-gray-sharing-dark md:p-6">
      <Form
        title="login"
        description="add your details below to get back into the app"
        submitButtonText="login"
      >
        <Input
          label="email address"
          type="email"
          id="email"
          name="email"
          validation={{
            required: {
              value: true,
              message: 'required'
            }
          }}
        />
        <Input
          label="enter your password"
          type="password"
          id="password"
          name="password"
          validation={{
            required: {
              value: true,
              message: 'required'
            },
            minLength: {
              value: 6,
              message: 'min 6 characters'
            }
          }}
        />
      </Form>
    </main>
  )
}

// Reading: https://www.freecodecamp.org/news/how-to-validate-forms-in-react/