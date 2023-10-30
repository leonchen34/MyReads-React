import "./App.css";
import { useState, useEffect } from "react";
import {Routes,Route,useNavigate} from "react-router-dom";
import * as BooksAPI from "./BooksAPI";
import ShowShelfs from "./ShowShelfs";
import SearchBooks from "./SearchBooks";

function App() {
  const [currentList,setCurrentList] = useState([]);
  const [wantList,setWantList] = useState([]);
  const [readList,setReadList] = useState([]);

  useEffect(() =>{
    const initialStart = async () => {
      let cList=[],wList=[],rList=[];
      let resp = await BooksAPI.getAll();
      if (resp && !resp.error) {
        resp.map((book) =>  {
          if (book.shelf === "currentlyReading"){
            cList.push(book);
          } else if (book.shelf === "wantToRead") 
            wList.push(book);
          else if (book.shelf === "read")
            rList.push(book);
        })
      }
      setCurrentList(cList);
      setWantList(wList);
      setReadList(rList);
    };
    initialStart();
  },[]);

  const isInList = (list,book) => {
    for (let e of list) {
      if (e.id === book.id)
        return true;
    }

    return false;
  }

  const addBookToShelf = (book,shelf) => {
    //console.log(shelf);
    if (shelf === "currentlyReading") {
      if (!isInList(currentList,book))
        setCurrentList(currentList.concat([book]));
    } else if (shelf === "wantToRead") {
      if (!isInList(wantList,book))
        setWantList(wantList.concat([book]));
    } else if (shelf === "read") {
      if (!isInList(readList,book))
        setReadList(readList.concat([book]));
    }
    BooksAPI.update(book,shelf);
  }

  const removeBookFromShelf = (book,shelf) => {
    if (shelf === "currentlyReading") {
      setCurrentList(currentList.filter((b) => b.id !== book.id));
    } else if (shelf === "wantToRead") {
      setWantList(wantList.filter((b) => b.id !== book.id));
    } else if (shelf === "read") {
      setReadList(readList.filter((b) => b.id !== book.id));
    }    
  }

  const changeShelf = (book, oldShelf,newShelf) => {
    //console.log("old shelf:",oldShelf);
    //console.log("new shelf:",newShelf);
    if (oldShelf !== newShelf) {
      removeBookFromShelf(book,oldShelf);
      addBookToShelf(book,newShelf);
    }

  }

  return (
    <Routes>
      <Route exact path = "/"
          element={<ShowShelfs currentList={currentList} wantList={wantList} 
              readList={readList} changeShelf={changeShelf}/> }/>
      <Route exact path = "/search"
          element={<SearchBooks changeShelf={changeShelf} />}
      />
    </Routes>
  );
}

export default App;
