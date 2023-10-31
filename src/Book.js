import PropTypes from "prop-types";
import {useState} from "react";
import {Link} from "react-router-dom";

import ShelfChanger from "./ShelfChanger";

const Book = ({book,changeShelf}) => {
    let shelfName="";
    if (book.shelf)
        shelfName=book.shelf;
    else
        shelfName="none";
    const [curShelf,setCurShelf] = useState(shelfName);
    const selectShelf = (newShelf) => {
        if (curShelf !== newShelf) {
            book.shelf = newShelf;
            changeShelf(book,curShelf,newShelf);
            setCurShelf(newShelf);
        }
    }
    let authorStr="";
    if (book.authors) {
        for (let author of book.authors)
            authorStr = authorStr + author + "\n";
    }
    let image = "";
    if (book.imageLinks && book.imageLinks.smallThumbnail)
        image = book.imageLinks.smallThumbnail;
    //console.log(book);
    return (
        <div className="book">
            <div className="book-top">
                <Link to={`/book/${book.id}`} state={{book}}>
                    <div
                        className="book-cover"
                        style={{
                            width: 128,
                            height: 193,
                            backgroundImage:`url(${image})`,
                        }}
                    ></div>  
              </Link>           
            <ShelfChanger book={book} shelfName={curShelf} selectShelf={selectShelf}/>
            </div>
            <div className="book-title">{book.title}</div>
            <div className="book-authors">{authorStr}</div>           
        </div>
    )
}

Book.propTypes = {
    book:PropTypes.object.isRequired,
    changeShelf:PropTypes.func.isRequired,
}

export default Book;