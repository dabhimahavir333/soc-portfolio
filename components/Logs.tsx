"use client"

import { useEffect, useState } from "react"

const alerts = [

"[HIGH] Brute Force Attack | MITRE:T1110 | SRC:185.234.219.12 → AUTH-SERVER",
"[MEDIUM] Suspicious PowerShell | MITRE:T1059 | SRC:192.168.1.21 → WIN-CLIENT",
"[HIGH] Malware Beaconing | MITRE:T1071 | SRC:45.89.23.11 → WEB-SERVER",
"[LOW] Port Scan Detected | MITRE:T1046 | SRC:77.88.99.101 → NETWORK",
"[HIGH] Privilege Escalation | MITRE:T1068 | SRC:192.168.5.34 → DOMAIN-CTRL",
"[MEDIUM] Suspicious Login | MITRE:T1078 | SRC:172.16.4.10 → VPN",
"[CRITICAL] Data Exfiltration | MITRE:T1041 | SRC:10.1.5.22 → DATABASE",
"[HIGH] C2 Communication | MITRE:T1071 | SRC:103.24.11.9 → WORKSTATION",
"[LOW] DNS Enumeration | MITRE:T1087 | SRC:192.168.3.45 → DNS-SERVER"

]

export default function Logs(){

const [logs,setLogs]=useState<string[]>([])

useEffect(()=>{

const interval=setInterval(()=>{

const log =
alerts[Math.floor(Math.random()*alerts.length)]

const time = new Date().toLocaleTimeString()

const newLog = `[${time}] ${log}`

setLogs(prev=>[newLog,...prev].slice(0,40))

},1200)

return ()=>clearInterval(interval)

},[])


return(

<div className="h-[320px] overflow-y-auto font-mono text-sm pr-2">

{logs.map((log,i)=>(

<div key={i}>{log}</div>

))}

</div>

)

}