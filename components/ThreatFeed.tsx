"use client"

import { useEffect, useState } from "react"

export default function ThreatFeed() {

const [feed,setFeed]=useState<string[]>([])

useEffect(()=>{

const threats=[

"🇷🇺 Russia → SSH brute force campaign",
"🇨🇳 China → Malware C2 beacon detected",
"🇮🇷 Iran → Phishing infrastructure active",
"🇰🇵 North Korea → Crypto exchange attack",
"🇺🇸 USA → Suspicious PowerShell activity",
"🇩🇪 Germany → Web exploitation attempt"

]

const interval=setInterval(()=>{

setFeed(prev=>[threats[Math.floor(Math.random()*threats.length)],...prev].slice(0,6))

},4000)

return()=>clearInterval(interval)

},[])

return(

<div className="h-64 overflow-y-auto text-sm font-mono">

{feed.map((item,i)=>(

<div key={i} className="mb-1 text-green-400">
{item}
</div>

))}

</div>

)

}