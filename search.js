const Search = (props) => {
  const handleSearch = (event) => {
    props.setSearch(event.target.value)
  }
  return (
    <>
      <h2>Country</h2>
      <div>
        Search: <input value={props.search} onChange={handleSearch} />
      </div>
    </>
  )
}
export default Search