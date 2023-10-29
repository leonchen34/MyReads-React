import {useState} from "react";
import {Link} from "react-router-dom";
import * as BookAPI from "./BooksAPI";
import Shelf from "./Shelf";

const SearchBooks = ({changeShelf}) => {
    const [matchList,setMatchList] = useState([]);

    const handleChange = async (event) => {
        event.preventDefault();
        let qry = event.target.value;
        let num = 20;
        //console.log("qry is:",qry);
        //getBooks(qry);      
        const resp = await BookAPI.search(qry,num);
        //const resp = await BookAPI.getAll();
        //onsole.log(resp);
        if (resp && !resp.error)
            setMatchList(resp);
        else 
            setMatchList([]);
    }

    return (
        <div className="search-books">
            <div className="search-books-bar">
                <Link className="close-search" to="/">
                    Close 
                </Link>
                <div className="search-books-input-wrapper">
                    <input type="text"
                        placeholder="Search by title, author, or ISBN" onChange={handleChange}/>
                </div>
            </div>
            <div className="search-books-results">
                <ol className="books-grid">
                    {matchList && matchList.length > 0 ? (
                    <Shelf name="Matched List" list={matchList} changeShelf={changeShelf} />) : 
                    (<p> No Match</p>)
                    }
                </ol>
            </div>
        </div>
    )
}

export default SearchBooks;