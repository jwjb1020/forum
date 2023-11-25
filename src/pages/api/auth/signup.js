import { connectDB } from "@/util/database";
import bycrypt from "bcrypt"

export default async function handler(req,res){
    if(req.method == "POST"){
        //bycrypt 가지고 와서 비밀번호 암호화 (숫자 아무거나)
        const hash = await bycrypt.hash(req.body.password,7)
        //body에 있는 password 암호화된 코드로 바꾸기
        req.body.password = hash
        const db = (await connectDB).db("forum");
        const existingUser = await db.collection("user_cred").findOne({ email: req.body.email })
        //유저가 빈칸을 보내면/ 너무 긴 문자
        if(!req.body.name || !req.body.password || !req.body.email){
            res.status(500).json("내용을 입력해주세요.")
        }
        //같은 이메일
        if(existingUser){
            res.status(500).json("같은 이메일이 있어요.")
        } else {
            await db.collection("user_cred").insertOne(req.body);
            res.status(200).redirect(302,"/")
        }


        
        
    }
}