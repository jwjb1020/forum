import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";

export default async function handler(req,res){
    //쿼리스트링
    // console.log(req.query.id)
    const db = (await connectDB).db("forum")
    const result = await db.collection("post").deleteOne({_id: new ObjectId(req.query.id)})
    if(result.deletedCount == 1){
    res.status(200).json("삭제완료")
    } else {
        res.status(500).json("삭제실패")
    }
  

}