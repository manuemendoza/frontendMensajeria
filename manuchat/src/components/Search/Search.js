const Search = (props) =>{
    return(
        <>
        <input type="search" placeholder="Search" onChange={props.handleSearch}/>
        </>
    )
};

export default Search