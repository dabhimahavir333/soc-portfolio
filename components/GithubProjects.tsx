"use client"

import { useEffect, useState } from "react"

export default function GithubProjects() {

const [repos, setRepos] = useState<any[]>([])

useEffect(() => {

fetch("https://api.github.com/users/dabhimahavir333/repos")
.then(res => res.json())
.then(data =>
setRepos(
data
.sort((a,b)=> new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime())
.slice(0,6)
)
)

}, [])

return (

<div className="grid grid-cols-3 gap-4">

{repos.map(repo => (

<div
key={repo.id}
onClick={()=>window.open(repo.html_url,"_blank")}
className="panel cursor-pointer hover:bg-green-900/20 hover:scale-[1.02] transition duration-300"
>

<h3 className="font-bold mb-2 text-green-400">

{repo.name}

</h3>

<p className="text-sm text-green-300/80">

{repo.description || "No description"}

</p>

</div>

))}

</div>

)

}