import PropTypes from "prop-types";
import Book from "./Book";

const Shelf = ({name,list,changeShelf}) => {
    //console.log(name);
    return (
        <div className="bookshelf">
            <h2 className="bookshelf-title">{name}</h2>
            <div className="bookshelf-books">
                <ol className="books-grid">
                    {list.map((book) => 
                        <li key={book.id}>
                            <Book book={book} changeShelf={changeShelf}/>
                        </li>
                    )}
                </ol>
            </div>
        </div>
    )
}

Shelf.propTypes = {
    name:PropTypes.string.isRequired,
    list:PropTypes.array.isRequired,
    changeShelf:PropTypes.func.isRequired,
}

export default Shelf;