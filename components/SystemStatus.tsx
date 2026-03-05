export default function SystemStatus(){

return(

<div className="panel">

<h2 className="mb-4">System Status</h2>

<div className="space-y-2 text-sm">

<div>SIEM: <span className="text-green-400">Online</span></div>

<div>Firewall: <span className="text-green-400">Active</span></div>

<div>IDS: <span className="text-green-400">Monitoring</span></div>

<div>Threat Intel: <span className="text-green-400">Connected</span></div>

</div>

</div>

)
}