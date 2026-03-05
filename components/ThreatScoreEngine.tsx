"use client"

import { useEffect, useState } from "react"

type Threat = {
  ip: string
  threat: string
}

const threatPool: Threat[] = [
  { ip: "185.234.219.12", threat: "Brute Force" },
  { ip: "103.24.11.9", threat: "Malware C2" },
  { ip: "77.88.99.101", threat: "Port Scan" },
  { ip: "45.67.222.90", threat: "Credential Stuffing" },
  { ip: "91.210.45.23", threat: "Web Exploit" },
  { ip: "210.19.33.12", threat: "Malware Beacon" },
  { ip: "64.122.88.19", threat: "Suspicious PowerShell" }
]

export default function ThreatScoreEngine() {

  const [events, setEvents] = useState<Threat[]>([])
  const [score, setScore] = useState(30)

  useEffect(() => {

    const interval = setInterval(() => {

      const threat =
        threatPool[Math.floor(Math.random() * threatPool.length)]

      setEvents(prev => [threat, ...prev].slice(0, 20))

      // adjust score randomly but keep between 0–100
      setScore(prev => {
        const change = Math.floor(Math.random() * 10) - 4
        const next = prev + change
        return Math.max(0, Math.min(100, next))
      })

    }, 2500)

    return () => clearInterval(interval)

  }, [])

  const actors = new Set(events.map(e => e.ip)).size

  const threatCounts: Record<string, number> = {}
  events.forEach(e => {
    threatCounts[e.threat] = (threatCounts[e.threat] || 0) + 1
  })

  const topRisk =
    Object.entries(threatCounts).sort((a, b) => b[1] - a[1])[0]?.[0] || "None"

  const scoreColor =
    score > 75
      ? "text-red-500"
      : score > 50
      ? "text-orange-400"
      : score > 30
      ? "text-yellow-400"
      : "text-green-400"

  return (

    <div className="space-y-4">

      <div className="text-center">

        <div className="text-sm opacity-70">THREAT SCORE</div>

        <div className={`text-4xl font-bold ${scoreColor}`}>
          {score} / 100
        </div>

      </div>

      <div className="flex justify-between text-sm">

        <div>
          <div className="opacity-70">Top Risk</div>
          <div>{topRisk}</div>
        </div>

        <div>
          <div className="opacity-70">Active Threat Actors</div>
          <div>{actors}</div>
        </div>

      </div>

      <div className="h-2 bg-black border border-green-400 rounded overflow-hidden">

        <div
          className="bg-green-400 h-full transition-all duration-700"
          style={{ width: `${score}%` }}
        />

      </div>

    </div>

  )
}