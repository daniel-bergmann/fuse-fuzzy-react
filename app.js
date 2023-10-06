import "./App.css"
import { useState } from "react"
import Fuse from "fuse.js"

const SearchComponent = () => {
  const [query, setQuery] = useState("")
  const [results, setResults] = useState([])

  const options = {
    keys: ["name", "email", "country"], // keys to search in from the data array
    distance: 10, // Max distance between match and search word
    threshold: 0.3, // At what point does the match algorithm give up. A threshold of 0.0 requires a perfect match (of both letters and location), a threshold of 1.0 would match anything.
    tokenize: true, // Enable tokenization
    matchAllTokens: true, // Each search token must match
  }

  const fuse = new Fuse(users, options)

  const handleSearch = (e) => {
    setQuery(e.target.value)
    if (e.target.value) {
      setResults(fuse.search(e.target.value))
    } else {
      setResults([])
    }
  }

  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        value={query}
        onChange={handleSearch}
      />
      <ul>
        {results.map((result, idx) => (
          <li key={idx}>
            {result.item.name} ({result.item.email}){result.item.country}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default SearchComponent

const users = [
  {
    id: 1,
    name: "Alice Adams",
    email: "alice.adams@example.com",
    country: "USA",
  },
  {
    id: 2,
    name: "Bob Brown",
    email: "bob.brown@example.com",
    country: "Canada",
  },
  {
    id: 3,
    name: "Charlie Clark",
    email: "charlie.clark@example.com",
    country: "UK",
  },
  {
    id: 4,
    name: "Debbie Davis",
    email: "debbie.davis@example.com",
    country: "Australia",
  },
  {
    id: 5,
    name: "Edward Evans",
    email: "edward.evans@example.com",
    country: "India",
  },
  {
    id: 6,
    name: "Fiona Fisher",
    email: "fiona.fisher@example.com",
    country: "South Africa",
  },
  {
    id: 7,
    name: "George Green",
    email: "george.green@example.com",
    country: "Brazil",
  },
  {
    id: 8,
    name: "Hannah Hill",
    email: "hannah.hill@example.com",
    country: "France",
  },
  {
    id: 9,
    name: "Ian Irving",
    email: "ian.irving@example.com",
    country: "Germany",
  },
  {
    id: 10,
    name: "Julia Johnson",
    email: "julia.johnson@example.com",
    country: "Japan",
  },
]
