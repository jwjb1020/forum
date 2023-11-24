export default function handler(req,res){
    if (req.method == "GET"){
        res.status(200).json({name: "hello"})
    }
    if (req.method == "POST"){
        res.status(200).json({name : "babo"})
    }

}