import SearchBar from './components/SearchBar'

function App(){
    const handleClick = (term) => {
        console.log("Do a search for "+term);
    }

    return(<div>
        <SearchBar onSubmit = {handleClick}/>
    </div>);
}

export default App;