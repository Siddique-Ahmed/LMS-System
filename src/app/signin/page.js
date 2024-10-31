import { redirect } from "next/navigation"
import { auth, signIn } from "../../../auth"

 
export default async function SignIn() {

  const session = await auth()
  
  if(session)redirect("/")
  

  return (
    <div className="container mx-auto w-full min-h-screen flex justify-center items-center">
    <form
      action={async () => {
        "use server"
        await signIn("google")
      }}
    >
      <button className="py-2 px-2 bg-white shadow-black shadow-sm rounded-s-sm font-semibold text-red-700" type="submit">Continue with Google</button>
    </form>
    </div>
  )
} 