"use client"
export default function Error({error,reset}){
    return(
        <div>
        <h4>에러남</h4>
        <button onClick={()=>{reset()}}>button</button>
        </div>
    )
}