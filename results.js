const Results = (props) => {
  let result = []
  let lan = []
  let max = 0
  const handleClick = (event) => {
    event.preventDefault()
    lan = Object.values(result[event.target.value].languages)
    props.setCountry(event.target.value)
  }
  if (props.search !== "") {
    result = props.countrys.filter(
      e => e.name.common.toUpperCase().indexOf(props.search.toUpperCase()) > -1
    )
  }
  result.forEach(e => { if (e.name) max++ })
  if (max === 1) {
    lan = Object.values(result[0].languages)
    return (
      <>
        <h2>Results</h2>
        <h2>{result[0].name.common}</h2>
        <h3>Capital {result[0].capital}</h3>
        <h3>Poblacion {result[0].population}</h3>
        <h3>Lenguajes</h3>
        <ul>
          {lan.map((e, i) => (<li key={i}>{e}</li>))}
        </ul>
        <img
          src={result[0].flags.svg}
          width="180"
          height="120"
          alt={result[0].altSpellings}></img>
      </>
    )
  }
  else if (max > 10 && max !== 1) {
    return (
      <h2>Demasiadas coincidencias {max}, sea mas especifico</h2>
    )
  }
  else if (max === 0) {
    return (
      <h2>No hay coincidencias</h2>
    )
  }
  else {
    return (
      <>
        <h2>Results</h2>
        <ul>
        {result.map((e, i) => (
          <li key={i}>
            {e.name.common}
            <button onClick={handleClick} value={i}>Show</button>
          </li>
        ))}
        </ul>
        <h2>Country</h2>
        <h2>{result[props.country].name.common}</h2>
        <h3>Capital {result[props.country].capital}</h3>
        <h3>Poblacion {result[props.country].population}</h3>
        <h3>Lenguajes</h3>
        <ul>
          {lan.map((e, i) => (<li key={i}>{e}</li>))}
        </ul>
        <img
          src={result[props.country].flags.svg}
          width="180"
          height="120"
          alt={result[props.country].altSpellings}></img>
      </>
    )
  }
}
export default Results