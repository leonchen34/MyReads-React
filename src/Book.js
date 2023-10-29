import {useState} from "react";

import ShelfChanger from "./ShelfChanger";

const Book = ({book,shelfName,changeShelf}) => {
    const [curShelf,setCurShelf] = useState(shelfName);
    const selectShelf = (newShelf) => {
        if (curShelf !== newShelf) {
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
    return (
        <div className="book">
            <div className="book-top">
                <div
                    className="book-cover"
                    style={{
                        width: 128,
                        height: 193,
                        backgroundImage:`url(${image})`,
                    }}
                ></div>             
            <ShelfChanger book={book} shelfName={curShelf} selectShelf={selectShelf}/>
            </div>
            <div className="book-title">{book.title}</div>
            <div className="book-authors">{authorStr}</div>           
        </div>
    )
}

export default Book;