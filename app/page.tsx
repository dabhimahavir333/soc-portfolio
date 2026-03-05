"use client"

import ThreatChart from "../components/ThreatChart"
import Logs from "../components/Logs"
import AttackMap from "../components/AttackMap"
import InvestigationSimulator from "../components/InvestigationSimulator"
import GithubProjects from "../components/GithubProjects"
import Terminal from "../components/Terminal"
import ThreatFeed from "../components/ThreatFeed"
import IncidentTimeline from "../components/IncidentTimeline"
import AlertBanner from "../components/AlertBanner"
import ThreatSeverity from "../components/ThreatSeverity"

import AttackStats from "@/components/AttackStats"
import SplunkPanel from "@/components/SplunkPanel"
import AttackerIntel from "@/components/AttackerIntel"
import ThreatScoreEngine from "@/components/ThreatScoreEngine"

export default function Home() {

return (

<div className="max-w-[1400px] mx-auto p-8">

{/* TITLE */}

<h1 className="text-3xl font-bold mb-6">
Mahavirsinh Dabhi | SOC Dashboard
</h1>


{/* LIVE COUNTERS */}

<AttackStats />


{/* THREAT SEVERITY */}

<ThreatSeverity />


{/* SOC ALERT */}

<AlertBanner />


{/* TOP DASHBOARD */}

<div className="grid grid-cols-3 gap-6 mb-6">

<div className="panel col-span-2">

<h2 className="mb-4">Threat Detection</h2>

<div className="h-[320px]">
<ThreatChart />
</div>

</div>


<div className="panel">

<h2 className="mb-4">Live SIEM Logs</h2>

<Logs />

</div>

</div>



{/* MIDDLE DASHBOARD */}

<div className="grid grid-cols-2 gap-6 mb-6">

<div className="panel">

<h2 className="mb-4">Cyber Attack Map</h2>

<AttackMap />

</div>


<div className="panel">

<h2 className="mb-4">Investigation Simulator</h2>

<InvestigationSimulator />

</div>

</div>



{/* SOC ANALYST TOOLS */}

<div className="grid grid-cols-3 gap-6 mb-6">

<div className="panel">

<h2 className="mb-4">Threat Intelligence Feed</h2>

<ThreatFeed />

</div>


<div className="panel">

<h2 className="mb-4">Incident Timeline</h2>

<IncidentTimeline />

</div>


<div className="panel">

<h2 className="mb-4">SOC Terminal</h2>

<Terminal />

</div>

</div>



{/* INTELLIGENCE PANELS */}

<div className="grid grid-cols-3 gap-6 mb-6">

<div className="panel">

<h2 className="mb-4">Threat Intelligence Score</h2>

<ThreatScoreEngine />

</div>


<div className="panel">

<h2 className="mb-4">Attacker IP Intelligence</h2>

<AttackerIntel />

</div>


<div className="panel">

<h2 className="mb-4">Splunk Query Simulator</h2>

<SplunkPanel />

</div>

</div>



{/* GITHUB PROJECTS */}

<div className="panel">

<h2 className="mb-4">GitHub Projects</h2>

<GithubProjects />

</div>

</div>

)

}