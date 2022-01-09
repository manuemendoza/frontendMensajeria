const Search = (props) =>{
    return(
        <>
        <input type="search" placeholder="busca tu mascota" onChange={props.handleSearch}/>
        </>
    )
};

export default Search