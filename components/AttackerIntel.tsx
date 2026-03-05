"use client"

import { useEffect, useState } from "react"

type Attack = {
ip: string
country: string
threat: string
}

const attackers: Attack[] = [

{ ip:"185.234.219.12", country:"Russia", threat:"Brute Force" },
{ ip:"103.24.11.9", country:"China", threat:"Malware C2" },
{ ip:"77.88.99.101", country:"Iran", threat:"Port Scan" },
{ ip:"45.67.222.90", country:"North Korea", threat:"Credential Stuffing" },
{ ip:"91.210.45.23", country:"Germany", threat:"Web Exploit" },
{ ip:"210.19.33.12", country:"China", threat:"Malware Beacon" },
{ ip:"64.122.88.19", country:"USA", threat:"Suspicious PowerShell" }

]

export default function AttackerIntel(){

const [list,setList]=useState<Attack[]>([])

useEffect(()=>{

const interval=setInterval(()=>{

const newAttack =
attackers[Math.floor(Math.random()*attackers.length)]

setList(prev=>[newAttack,...prev].slice(0,8))

},2000)

return()=>clearInterval(interval)

},[])


return(

<div className="h-[320px] overflow-y-auto text-sm">

<table className="w-full text-left">

<thead className="opacity-70">

<tr>
<th>IP</th>
<th>Country</th>
<th>Threat</th>
</tr>

</thead>

<tbody>

{list.map((a,i)=>(

<tr key={i} className="border-t border-green-500/30">

<td className="py-1">{a.ip}</td>
<td>{a.country}</td>
<td className="text-red-400">{a.threat}</td>

</tr>

))}

</tbody>

</table>

</div>

)

}