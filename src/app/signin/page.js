import { redirect } from "next/navigation";
import { auth, signIn } from "../../../auth";

export default async function SignIn() {
  const session = await auth();

  if (session) redirect("/");

  return (
    <div className="container mx-auto w-full min-h-screen flex flex-col justify-center items-center">
      <form
        className="flex flex-col gap-3 border border-solid p-5"
        action={async (formData) => {
          "use server";
          await signIn("credentials", formData, { redirect: false });
        }}
      >
        <input
          className="border p-2"
          name="email"
          placeholder="Enter Your Email"
          required
        />
        <input
          className="border p-2"
          name="password"
          placeholder="Enter Your Password"
          required
        />
        <button className="border p-3 px-5 bg-black text-white hover:opacity-75 transition-all">
          Signup
        </button>
      </form>
      <form
        className="mt-4"
        action={async () => {
          "use server";
          await signIn("google");
        }}
      >
        <button
          className="p-3 px-5 bg-white shadow-black shadow-sm rounded-s-sm font-semibold text-red-700"
          type="submit"
        >
          Continue with Google
        </button>
      </form>
    </div>
  );
}
