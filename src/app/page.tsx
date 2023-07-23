import {PrimaryButton, SecondaryButton} from '@/components/atoms/Button'

export default function Home() {
  return (
    <main className="w-full font-instrument p-[2rem] md:p-6">
      <h1 className="heading-m">Hello World!</h1>
      <PrimaryButton text="Button"/>
      <SecondaryButton text="Button"/>
    </main>
  )
}
