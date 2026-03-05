"use client"

import {useEffect,useState} from "react"

const alerts=[
"Brute force attack detected from Russia",
"Suspicious PowerShell execution",
"Malware beaconing detected",
"Privilege escalation attempt detected",
"Data exfiltration attempt blocked"
]

export default function AlertBanner(){

const [alert,setAlert]=useState(alerts[0])

useEffect(()=>{

const i=setInterval(()=>{

setAlert(alerts[Math.floor(Math.random()*alerts.length)])

},4000)

return ()=>clearInterval(i)

},[])

return(

<div className="panel mb-6 text-red-400 border-red-500 animate-pulse">

⚠ SOC ALERT: {alert}

</div>

)

}