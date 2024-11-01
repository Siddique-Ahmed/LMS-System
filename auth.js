import { UserModel } from "@/lib/Collections/UserModal";
import { connectDB } from "@/lib/dbConnect";
import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import Credentials from "next-auth/providers/credentials";

const handleLoginUser = async (profile) => {
  await connectDB();
  const user = await UserModel.findOne({ email: profile.email });
  if (user) {
    return user;
  } else {
    const obj = {
      fullName: profile.name,
      email: profile.email,
      provider: "google",
      profileImg: profile.picture,
    };
    let newUser = await new UserModel(obj);
    newUser = await newUser.save();
    return newUser;
  }
};

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Google,
    Credentials({
      credentials: {
        email: {},
        password: {},
      },
      authorize: async (credentials) => {
        let user = null;

        console.log("credentials auth=>", credentials);

        let res = await fetch(
          "https://lms-system-six.vercel.app/api/user/login",
          {
            method: "POST",
            body: JSON.stringify({
              email: credentials.email,
              password: credentials.password,
            }),
          }
        );
        res = await res.json();
        user = res.user;
        console.log("response=>",res);
        
        return user;
      },
    }),
  ],
  callbacks: {
    async signIn({ account, profile }) {
      if (account.provider === "google") {
        const user = await handleLoginUser(profile);
        return { ...profile, role: user?.role };
      }
      return true;
    },
    async jwt({ token }) {
      const user = await handleLoginUser(token);
      token.role = user.role;
      token._id = user._id;

      return token;
    },
    session({ session, token }) {
      session.user._id = token._id;
      session.user.role = token.role;
      return session;
    },
  },
});
