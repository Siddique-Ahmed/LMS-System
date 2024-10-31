import { UserModel } from "@/lib/Collections/UserModal";
import { connectDB } from "@/lib/dbConnect";
import NextAuth from "next-auth";
import Google from "next-auth/providers/google";

const handleLoginUser = async (profile) => {
  await connectDB();
  const user = UserModel.findOne({ email: profile.email });
  if (user) {
    return user;
  } else {
    const obj = {
      fullName: profile.name,
      email: profile.email,
      provider: "google",
      profileImg: profile.picture,
    };
    let newUser = new UserModel(obj);
    newUser = await newUser.save();
    return newUser;
  }
};

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [Google],
  callbacks: {
    async signIn({ account, profile }) {
      const user = await handleLoginUser(profile);

      return { ...profile, role: user.role }; // Do different verification for other providers that don't have `email_verified`
    },
  },
});
