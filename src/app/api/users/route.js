import { UserModel } from "@/lib/Collections/UserModal";
import { connectDB } from "@/lib/dbConnect";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
export async function POST(request) {
  await connectDB();
  const obj = await request.json();

  const user = await UserModel.findOne({ email: obj.email });
  if (user)
    return Response.json(
      { error: true, msg: "User Already Exist" },
      { status: 404 }
    );

  const saltRounds = 10;
  const hashedPassword = await bcrypt.hash(obj.password, saltRounds);
  obj.password = hashedPassword;

  let newUser = new UserModel({ ...obj });
  newUser = await newUser.save();

  const token = jwt.sign(
    { id: newUser._id, role: newUser.role },
    process.env.JWT_KEY
  );

  return Response.json({
    error: false,
    msg: "User Created Successfully",
    user: newUser,
    token,
  });
}

export async function GET(request) {
  return Response.json("User Get Request");
}
