"use client"

import {useState} from "react"

export default function SplunkPanel(){

const [result,setResult]=useState("")

const runQuery=()=>{

setResult(`
index=security sourcetype=auth_logs
| stats count by src_ip
| sort -count

185.234.219.12     45 attempts
103.24.11.9        32 attempts
192.168.1.21       18 attempts
77.88.99.101       12 attempts
`)
}

return(

<div className="panel">

<h3 className="mb-3 font-bold">Splunk Query Simulator</h3>

<div className="bg-black border border-green-400 p-2 mb-2 text-sm">

index=security sourcetype=auth_logs
| stats count by src_ip

</div>

<button
onClick={runQuery}
className="bg-green-500 text-black px-3 py-1 mb-2"
>

Run Query

</button>

<pre className="text-sm whitespace-pre-wrap">

{result}

</pre>

</div>

)

}