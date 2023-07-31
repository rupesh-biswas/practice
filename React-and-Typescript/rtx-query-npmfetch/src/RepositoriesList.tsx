import { useState } from "react"
import { useFetchPackagesQuery } from "./store"

export default function RepositoriesList() {
  const [value, setValue] = useState("")
  const [searchTerm, setSearchTerm] = useState("")
  const { data, error, isLoading } = useFetchPackagesQuery(searchTerm)

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSearchTerm(value)
  }
  let content
  if (isLoading) {
    content = <div>Loading...</div>
  } else if (error) {
    content = <div>Error fetching data</div>
  } else {
    const renderedPackages = (
      <ol>
        {data?.objects?.map((obj: any) => {
          return <li key={obj.package.name}>{obj.package.name}</li>
        })}
      </ol>
    )
    content = renderedPackages
  }

  return (
    <div>
      <h1>Search NPM packages (Max 25)</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button>Search</button>
      </form>
      {content}
    </div>
  )
}
