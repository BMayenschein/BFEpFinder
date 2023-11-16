import { useState } from "react";
import Search from './comps/Search'
import Results from './comps/Results'
import Header from './comps/Header'


const App = () => {
  const [searchTerm, setSearchTerm] = useState("")
  const [results, setResults] = useState([])

  const resetSearch = () => {
    setResults([])
  }
  
  const searchForEpisode = async () => {
    resetSearch();
    const res = await fetch("/findEpisodes", {
      method: "POST",
      headers: {
          "Content-Type": "application/json",
      },
      body: JSON.stringify({
          'transcript': searchTerm
      }),
    })

    const data = await res.json()
    setResults(data)
  }

  return (
    <div className="App flex flex-col">
      <Header></Header>
      <Search 
        onClick={searchForEpisode}
        classText={"btn btn-outline"}
        text={"Search"}
        setSearchTerm={setSearchTerm} 
        searchTerm={searchTerm}
      />
      <Results 
        results={results} 
        classText={"btn-circle"}
        text={"Play Video"}
      />
    </div>
  );
}

export default App;
