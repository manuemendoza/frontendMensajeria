import "./Search.scss"

const Search = (props) =>{
    return(
        <>
        <input type="search" placeholder="Buscar" onChange={props.handleSearch} className="search" />
        </>
    )
};

export default Search