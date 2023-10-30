import {Link} from "react-router-dom";
import Shelf from "./Shelf";

const ShowShelfs = ({currentList,wantList,readList,changeShelf}) => {
    return (
        <div className="list-books">
            <div className="list-books-title">
                <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
                <div>
                    <Shelf name="Currently Reading" list={currentList} changeShelf={changeShelf}/>
                    <Shelf name="Want To Read" list={wantList} changeShelf={changeShelf}/>
                    <Shelf name="Read" list={readList} changeShelf={changeShelf}/>
                </div>
            </div>
            <div className="open-search"> 
                <Link to="/search">Add a book</Link>                 
            </div>
        </div>
  )
}

export default ShowShelfs;