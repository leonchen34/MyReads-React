import PropTypes from "prop-types";
import {useState} from "react";
import {Link} from "react-router-dom";
import * as BookAPI from "./BooksAPI";
import Shelf from "./Shelf";

const SearchBooks = ({currentList,wantList,readList,changeShelf}) => {
    const [matchList,setMatchList] = useState([]);
    const [emptyInput,setEmptyInput] = useState("");

    const inShelf = (list,book) => {
        for (let e of list) {
          if (e.id === book.id)
            return true;
        }
    
        return false;
      }

    const handleChange = async (event) => {
        event.preventDefault();
        let qry = event.target.value;
        if (qry && qry !== "") {
            let num = 20;
            const resp = await BookAPI.search(qry,num);
            //console.log(resp);
            if (resp && !resp.error) {
                resp.map((book) => {
                    if(inShelf(currentList,book))
                        book.shelf="currentlyReading";
                    else if(inShelf(wantList,book))
                        book.shelf="wantToRead";
                    else if (inShelf(readList,book))
                        book.shelf="read";
                    else
                        book.shelf="none";
                    return book;
                })
                setMatchList(resp);
            } else {
                setMatchList([]);
                setEmptyInput("Book Not Found");
            }
        } else {
            setMatchList([]);
            setEmptyInput("");
        }
    }

    function debounce(func,timeout=300) {
        let timer;
        return (...args) => {
            clearTimeout(timer);
            timer = setTimeout(()=>{func.apply(this,args);},timeout);
        };
    }
    
    const processChange=debounce(handleChange);

    return (
        <div className="search-books">
            <div className="search-books-bar">
                <Link className="close-search" to="/">
                    Close 
                </Link>
                <div className="search-books-input-wrapper">
                    <input id="search-input" type="text"
                        placeholder="Search by title, author, or ISBN" onChange={processChange}/>
                </div>
            </div>
            <div className="search-books-results">
                <ol className="books-grid">
                    {matchList && matchList.length > 0 ? (
                    <Shelf name="Matched List" list={matchList} changeShelf={changeShelf} />) : 
                    (<p> {emptyInput} </p>)
                    }
                </ol>
            </div>
        </div>
    )
}

SearchBooks.propTypes = {
    currentList:PropTypes.array.isRequired,
    wantList:PropTypes.array.isRequired,
    readList:PropTypes.array.isRequired,
    changeShelf:PropTypes.func.isRequired,
}

export default SearchBooks;