import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]";

export default async function handler(req,res){
    //쿼리스트링
    //console.log(req.query)
    //세션에서 로그인한 사용자 정보 가지고 오기
    const session = await getServerSession(req,res,authOptions)
    console.log(session)
    const db = (await connectDB).db("forum")
    // db에서 사용자 정보 찾기
    const user = await db.collection("post").findOne({_id: new ObjectId(req.query.id)})
    // 사용자 정보와 비교해서 삭제하기
    if (user.author == session.user.email){
        const result = await db.collection("post").deleteOne({_id: new ObjectId(req.query.id)})
        if(result.deletedCount == 1){
        res.status(200).json("삭제완료")
        }
    } else {
        res.status(500).json("작성자 불일치")
        }
    
  

}