import { connectDB } from "@/util/database"
import Link from "next/link"
import DetailLink from "../components/DetailLink"
import ListItem from "./Listitem"

export default async function List() {
    const db = (await connectDB).db("forum")
    let results =  await db.collection("post").find().toArray()
    results = results.map((result)=>{
      result._id = result._id.toString()
      return result
    })

    return (
        
      <div className="list-bg">
        <ListItem result={results} />
       
      </div>
    )
  } 