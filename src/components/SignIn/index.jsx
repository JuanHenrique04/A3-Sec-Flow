import { signIn } from "@/auth"

export default function SignIn() {
    return (
        <div className="flex mx-auto mt-32 max-w-md text-center w-96 h-96 justify-center items-center bg-gray-700 rounded-lg shadow-lg">
            <form
                action={async () => {
                    "use server"
                    await signIn("github")
                }}
            >
                <button className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" type="submit">Signin with GitHub</button>
            </form>
        </div>
    )
} 