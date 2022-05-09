import ReactDOM from "react-dom"
import React, { useState, useEffect } from "react"
import axios from "axios"
import Search from "./components/search"
import Results from "./components/results"

const App = () => {
  const [countrys, setCountrys] = useState([])
  const [search, setSearch] = useState("")
  const [country, setCountry] = useState(0)
  useEffect( () => {
    axios
      .get('https://restcountries.com/v3.1/all')
    .then(response => { setCountrys(response.data) })
  },[])

  return (
    <div>
      <Search
        search={search}
        setSearch={setSearch}
      />
      <Results
        search={search}
        country={country}
        setCountry={setCountry}
        countrys={countrys}
      />
    </div>
  )
}
ReactDOM.render(<App />, document.getElementById("root"))