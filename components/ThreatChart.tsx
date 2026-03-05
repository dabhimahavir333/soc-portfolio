"use client"

import {
LineChart,
Line,
XAxis,
YAxis,
CartesianGrid,
ResponsiveContainer
} from "recharts"

import {useState,useEffect} from "react"

export default function ThreatChart(){

const [data,setData]=useState([
{t:1,v:4},
{t:2,v:7},
{t:3,v:3},
{t:4,v:8},
])

useEffect(()=>{

const interval=setInterval(()=>{

setData(d=>[
...d.slice(1),
{t:Date.now(),v:Math.floor(Math.random()*10)}
])

},2000)

return()=>clearInterval(interval)

},[])

return(

<div className="h-[320px]">

<ResponsiveContainer width="100%" height="100%">

<LineChart data={data}>

<CartesianGrid stroke="#00ff9d22"/>

<XAxis dataKey="t" hide/>

<YAxis stroke="#00ff9d"/>

<Line
type="monotone"
dataKey="v"
stroke="#00ff9d"
strokeWidth={2}
/>

</LineChart>

</ResponsiveContainer>

</div>

)

}