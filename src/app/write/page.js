import { getServerSession } from "next-auth"

export default async function Write(){
    // 세션이 있는 사람만 페이지 접근 가능
    // const session = await getServerSession({req,res,authOptions})
    // console.log("22",session)
    
        return(
            <div className="p-20">
                <h4>글작성</h4>
                <form action="/api/post/new" method="POST">
                    <input name="title" placeholder="글제목"/>
                    <input name="content" placeholder="글내용"/>
                    <button type="submit">버튼</button>
                </form>
            </div>
        )
    

   
}