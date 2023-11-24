"use client"

import Link from "next/link"

export default function ListItem({result}){
    

    return(
        <div>
        {result.map((list, index)=>{

            return(
                <div key={index} className="list-item">
                <Link href={`/detail/${list._id}`}>
                    <h4>{list.title}</h4>
                    </Link>
                <Link href={`/edit/${list._id}`}>✏️</Link>
                <span onClick={(e)=>{
                    // fetch("/api/post/delete",
                    // {
                    //     method : "DELETE",
                    //     body : list._id
                    // })
                    fetch(`/api/delete/${list._id}`)
                    .then((res)=>{
                        //요청완료시 코드 실행
                       if(res.status == 200){
                        return res.json()
                       } else {
                        //서버가 에러코드 전송시 실행할 코드
                       }
                    })
                    .then((res)=>{
                        e.target.parentElement.style.opacity = 0
                        setTimeout(()=>{
                            e.target.parentElement.style.display = "none"   
                        },1000)
                        //성공시 실행할 코드 (웹)
                        console.log("웹",res)

                    })
                    .catch((error)=>{
                        //인터넷 문제로 실패시 실행할 코드
                        console.log(error)
                    })
                }}>🗑️</span>
                <p>1월 1일</p>
              </div>
            )
        })}
        </div>
    )
}