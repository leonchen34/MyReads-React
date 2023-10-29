import Book from "./Book";

const Shelf = ({name,list,changeShelf}) => {

    return (
        <div className="bookshelf">
            <h2 className="bookshelf-title">{name}</h2>
            <div className="bookshelf-books">
                <ol className="books-grid">
                    {list.map((book) => 
                        <li key={book.title}>
                            <Book book={book} shelfName={name} changeShelf={changeShelf}/>
                        </li>
                    )}
                </ol>
            </div>
        </div>
    )
}

export default Shelf;