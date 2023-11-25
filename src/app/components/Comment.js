"use client"

import { useEffect, useState } from "react"

export default function Comment({id}){
    const [comment,setComment ] = useState("");
    const [data,setData] = useState([])
    const [reset,setReset] = useState([])
    //쓸데없는 코드 보관함 = 렌더링에 필요없는 코드 (ajax, 타이머 등등)
    // 1. html로드/ 재렌더링 될때 마다 실행됨
    // 2. html 보여준 후에 늦게 실행시작
    
    // 1. 코멘트 컴포넌트 로드시 서버로 ajax 요청해서 데이터 가져옴
    useEffect(()=>{
        fetch(`/api/comment/show?id=${id}`,{method :"GET"})
        .then(res=>res.json())
        .then((result)=>{
            setData(result)

        })
        }
        
        ,[reset])
    // 2. 가져온 데이터를 변수나 state에 저장
    // 3. 변수나 state에 있던 댓글 데이터를 html에 꽂아서 보여줌

    return(
        <div>
            <hr></hr>
            {   data.length > 0 ?
                data.map((comment,i)=>{
                    return(
                        <p key={i}>{comment.content}</p>
                    )
                }) :"로딩중"
            }
            {/* input에 먼갈 입력할때마다 실행 */}
            <input onChange={(e)=>{setComment(e.target.value)}}/>
            <button onClick= {
                ()=>{
                   fetch("/api/post/comment",{
                    method : "POST",
                   headers: {
                    'Content-Type': 'application/json',
                }, 
                // 오브젝트나 어레이 보낼때 JSON.stringify()
                body : JSON.stringify({ content: comment, parent: id })})
                .then(res => res.json())
                .then((res)=> setReset(res))
                }
                }
            >전송</button>
        </div>
    )
}