import { connectDB } from "@/util/database";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]";

export default async function handler(req, res) {

  if (req.method === "POST") {
    const session = await getServerSession(req,res, authOptions)
    console.log(session.user.email)
    if(session){
      req.body.author = session.user.email
    }
    if (req.body.title === "") {
      return res.status(500).json({ error: "글 작성 바람" });
    }

    try {
      const db = (await connectDB).db("forum");
      const result = await db.collection("post").insertOne(req.body);

      // 클라이언트로 성공 메시지를 전달
      res.redirect(302,"/list")
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "서버 에러" });
    }
  }
}
