"use client"

import {
ComposableMap,
Geographies,
Geography,
Line,
Marker
} from "react-simple-maps"

import {useEffect,useState} from "react"

const geoUrl =
"https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json"


const locations=[

{ name:"USA", coords:[-100,40] },
{ name:"Germany", coords:[10,51] },
{ name:"India", coords:[78,22] },
{ name:"China", coords:[104,35] },
{ name:"Russia", coords:[90,60] },
{ name:"Brazil", coords:[-55,-10] },
{ name:"UK", coords:[-1,52] },
{ name:"Australia", coords:[133,-25] }

]


export default function AttackMap(){

const [attacks,setAttacks]=useState<any[]>([])

useEffect(()=>{

const interval=setInterval(()=>{

const source =
locations[Math.floor(Math.random()*locations.length)]

let target =
locations[Math.floor(Math.random()*locations.length)]

if(source===target) return

const attack={
source,
target,
id:Date.now()
}

setAttacks(prev=>[...prev.slice(-8),attack])

},2000)

return ()=>clearInterval(interval)

},[])



return(

<div className="h-[340px]">

<ComposableMap projectionConfig={{scale:140}}>

{/* WORLD MAP */}

<Geographies geography={geoUrl}>
{({geographies}) =>
geographies.map((geo)=>(
<Geography
key={geo.rsmKey}
geography={geo}
fill="#083f35"
stroke="#00ff9d55"
strokeWidth={0.4}
/>
))
}
</Geographies>


{/* ATTACK PATHS */}

{attacks.map((attack,i)=>(

<Line
key={i}
from={attack.source.coords}
to={attack.target.coords}
stroke="#00ff9d"
strokeWidth={1.5}
style={{
strokeDasharray:"6 6",
animation:"dash 4s linear infinite"
}}
/>

))}


{/* SOURCE MARKERS */}

{attacks.map((attack,i)=>(

<Marker key={"s"+i} coordinates={attack.source.coords}>

<circle r={4} fill="#ff0055">

<animate
attributeName="r"
values="2;7;2"
dur="1.2s"
repeatCount="indefinite"
/>

</circle>

</Marker>

))}


{/* TARGET MARKERS */}

{attacks.map((attack,i)=>(

<Marker key={"t"+i} coordinates={attack.target.coords}>

<circle r={5} fill="#00ff9d">

<animate
attributeName="r"
values="3;9;3"
dur="1.4s"
repeatCount="indefinite"
/>

</circle>

</Marker>

))}

</ComposableMap>

</div>

)

}