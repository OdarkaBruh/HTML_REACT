import { useState } from 'react';
import jobs from "./jobs.json"
import printFilter from "./printFilter.jsx"

export default function App() {
  const [searchInput, setSearchInput] = useState("");
  const filteredData = jobs.filter((el) => {
    if (searchInput === '') {
        return el;
    }
    else {
        return el.name.toLowerCase().includes(searchInput.toLowerCase())
    }
  })

  function handleChange(event) {
    setSearchInput(event.target.value)
  }

  return (
    <>
      <h1>Робота:</h1>
      <form id="form"> 
      <input
      type="text"
      placeholder="Search here"
      onChange={handleChange}
      value={searchInput} />
      <button type="button" onclick="searchBar()" onChange={ e => setSearch(e.target.value)}>Search</button>
    </form>
    <div>
    <ul>
      {filteredData.map((item) => (<>
            <li key={item.id}>{item.name} <br />

            <label>{item.salary} • {item.companyName} • {item.adress}<br /></label>
            <label>{item.description} <br /> <br /></label></li>
            </>
      ))}
    </ul>
    </div>
    </>
  );
}