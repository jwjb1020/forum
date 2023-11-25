import { connectDB } from "@/util/database";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]";
import { ObjectId } from "mongodb";

export default async function handler(req,res){
    const session = await getServerSession(req,res,authOptions)
    
    if(req.method == "POST"){
        const reqList = {
            content : req.body.content,
            parent : new ObjectId(req.body.parent),
            author : session.user.email
        }
        console.log(reqList)
        const db = (await connectDB).db("forum")
        const result = await db.collection("comment").insertOne(reqList)
        const result2 = await db.collection("comment").find({parent : new ObjectId(req.query.id)}).toArray()
        res.status(200).json(result2)
    }

}