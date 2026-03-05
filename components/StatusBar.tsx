"use client"

import { useEffect, useState } from "react"

export default function StatusBar() {

const [alerts, setAlerts] = useState(3)
const [blocked, setBlocked] = useState(12)
const [attacks, setAttacks] = useState(28)

useEffect(() => {

const i = setInterval(() => {

setAlerts(a => a + Math.floor(Math.random() * 2))
setBlocked(b => b + Math.floor(Math.random() * 2))
setAttacks(a => a + Math.floor(Math.random() * 3))

}, 4000)

return () => clearInterval(i)

}, [])

return (

<div className="grid grid-cols-3 gap-6 mb-6 text-center">

<div className="panel hover:scale-105 transition">

<div className="text-xs opacity-70 mb-1">
ACTIVE ALERTS
</div>

<div className="text-3xl font-bold text-red-400 animate-pulse">
{alerts}
</div>

</div>

<div className="panel hover:scale-105 transition">

<div className="text-xs opacity-70 mb-1">
ATTACKS DETECTED
</div>

<div className="text-3xl font-bold text-yellow-400">
{attacks}
</div>

</div>

<div className="panel hover:scale-105 transition">

<div className="text-xs opacity-70 mb-1">
THREATS BLOCKED
</div>

<div className="text-3xl font-bold text-green-400">
{blocked}
</div>

</div>

</div>

)

}