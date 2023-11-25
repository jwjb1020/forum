import { connectDB } from "@/util/database"
import { ObjectId } from "mongodb"

export default async function handler(req,res){
    console.log(req.query)
    if (req.method == "GET"){
        const db = (await connectDB).db("forum")
        const result = await db.collection("comment").find({parent : new ObjectId(req.query.id)}).toArray()
        res.status(200).json(result)
    }
    
}