import { SignOutButton } from '@clerk/clerk-react'

const SignOut = () => {
    return (
        <div className="flex flex-row flex-end">
            <SignOutButton className="text-sky-800 bg-sky-200 text-3xl border rounded-lg p-3 cursor-pointer" />
        </div>
    )
}

export default SignOut