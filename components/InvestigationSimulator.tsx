"use client"

import {useState} from "react"

export default function InvestigationSimulator(){

const [result,setResult]=useState<string[]>([])

const investigate=()=>{

setResult([

"Alert received: Multiple failed logins",
"Checking authentication logs...",
"IP identified: 192.168.1.21",
"Threat intelligence lookup...",
"IP blocked via firewall",
"Incident documented"

])

}

return(

<div className="h-[320px] flex flex-col">

<button
onClick={investigate}
className="bg-green-500 text-black px-4 py-2 mb-4 w-fit"
>
Investigate Alert
</button>

<div className="text-sm font-mono space-y-1">

{result.map((line,i)=>(

<div key={i}>{line}</div>

))}

</div>

</div>

)

}