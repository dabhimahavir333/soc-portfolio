"use client"

import {RadarChart,PolarGrid,PolarAngleAxis,PolarRadiusAxis,Radar} from "recharts"

const data=[
{skill:"SIEM",value:90},
{skill:"Threat Hunting",value:80},
{skill:"Incident Response",value:85},
{skill:"Networking",value:75},
{skill:"Python",value:70},
]

export default function SkillRadar(){

return(

<RadarChart width={300} height={250} data={data}>

<PolarGrid stroke="#00ff9d"/>

<PolarAngleAxis dataKey="skill" stroke="#00ff9d"/>

<PolarRadiusAxis stroke="#00ff9d"/>

<Radar
dataKey="value"
stroke="#00ff9d"
fill="#00ff9d"
fillOpacity={0.4}
/>

</RadarChart>

)

}