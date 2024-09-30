import { SignUp } from '@clerk/nextjs'

export default function Page() {
  return (
    <div className='flex align-center justify-center mt-40'>
      <SignUp />
    </div>
  )
}