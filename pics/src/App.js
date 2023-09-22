import SearchBar from "./components/SearchBar";
import searchImage from "./api";

function App() {

  const handleSubmit = (term) => {
    searchImage(term)
  }

  return (
    <div>
      <SearchBar onSubmit={handleSubmit}/>
    </div>
  );
}

export default App;
