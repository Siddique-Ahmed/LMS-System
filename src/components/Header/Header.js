import Link from "next/link";
import { auth, signOut } from "../../../auth";

export default async function Header() {
  const session = await auth();
  return (
    <div className="bg-slate-950 fixed top-0 left-0 z-50 w-full">
      <div className="flex container px-2 mx-auto items-center justify-between py-2">
        <h1 className="font-mono text-white text-2xl">LMS</h1>
        {session ? (
          <div className="flex items-center">
            <h1 className="text-white mx-2">{session.user.email}</h1>
            <form
              action={async () => {
                "use server";
                await signOut();
              }}
            >
              <button
                className="p-1 bg-white font-semibold text-red-700"
                type="submit"
              >
                Logout
              </button>
            </form>
          </div>
        ) : (
          <Link href={"./signin"} className=" text-white">
            Login
          </Link>
        )}
      </div>
    </div>
  );
}
