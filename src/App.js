import "./App.css";
import { useState } from "react";
import {Routes,Route,useNavigate} from "react-router-dom";
import ShowShelfs from "./ShowShelfs";
import SearchBooks from "./SearchBooks";

function App() {
  const [currentList,setCurrentList] = useState([
    { title:"To Kill a Mockingbird",
      authors:["Harper Lee"],
      imageLinks:{smallThumbnail:
        "http://books.google.com/books/content?id=PGR2AwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73-GnPVEyb7MOCxDzOYF1PTQRuf6nCss9LMNOSWBpxBrz8Pm2_mFtWMMg_Y1dx92HT7cUoQBeSWjs3oEztBVhUeDFQX6-tWlWz1-feexS0mlJPjotcwFqAg6hBYDXuK_bkyHD-y&source=gbs_api"}
    },
    { title:"Ender's Game",
      authors:["Orson Scott Card"],
      imageLinks:{smallThumbnail:
        "http://books.google.com/books/content?id=yDtCuFHXbAYC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE72RRiTR6U5OUg3IY_LpHTL2NztVWAuZYNFE8dUuC0VlYabeyegLzpAnDPeWxE6RHi0C2ehrR9Gv20LH2dtjpbcUcs8YnH5VCCAH0Y2ICaKOTvrZTCObQbsfp4UbDqQyGISCZfGN&source=gbs_api"}

    }
  ]);
  const [wantList,setWantList] = useState([
    { title:"1776",
      authors:["David McCullough"],
      imageLinks:{smallThumbnail:
        "http://books.google.com/books/content?id=uu1mC6zWNTwC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73pGHfBNSsJG9Y8kRBpmLUft9O4BfItHioHolWNKOdLavw-SLcXADy3CPAfJ0_qMb18RmCa7Ds1cTdpM3dxAGJs8zfCfm8c6ggBIjzKT7XR5FIB53HHOhnsT7a0Cc-PpneWq9zX&source=gbs_api"}
    },
    { title:"Harry Potter and the Sorcerer's Stone",
      authors:["J.K. Rowling"],
      imageLinks:{smallThumbnail:
        "http://books.google.com/books/content?id=wrOQLV6xB-wC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE72G3gA5A-Ka8XjOZGDFLAoUeMQBqZ9y-LCspZ2dzJTugcOcJ4C7FP0tDA8s1h9f480ISXuvYhA_ZpdvRArUL-mZyD4WW7CHyEqHYq9D3kGnrZCNiqxSRhry8TiFDCMWP61ujflB&source=gbs_api"}

    }
  ]);
  const [readList,setReadList] = useState([
    { title:"The Hobbit",
      authors:["J.R.R. Tolkien"],
      imageLinks:{smallThumbnail:
        "http://books.google.com/books/content?id=pD6arNyKyi8C&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE70Rw0CCwNZh0SsYpQTkMbvz23npqWeUoJvVbi_gXla2m2ie_ReMWPl0xoU8Quy9fk0Zhb3szmwe8cTe4k7DAbfQ45FEzr9T7Lk0XhVpEPBvwUAztOBJ6Y0QPZylo4VbB7K5iRSk&source=gbs_api"}
    },
    { title:"Oh, the Places You'll Go!",
      authors:["Seuss"],
      imageLinks:{smallThumbnail:
        "http://books.google.com/books/content?id=1q_xAwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE712CA0cBYP8VKbEcIVEuFJRdX1k30rjLM29Y-dw_qU1urEZ2cQ42La3Jkw6KmzMmXIoLTr50SWTpw6VOGq1leINsnTdLc_S5a5sn9Hao2t5YT7Ax1RqtQDiPNHIyXP46Rrw3aL8&source=gbs_api"}

    },
    { title:"The Adventures of Tom Sawyer",
      authors:["Mark Twain"],
      imageLinks:{smallThumbnail:
        "http://books.google.com/books/content?id=32haAAAAMAAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE72yckZ5f5bDFVIf7BGPbjA0KYYtlQ__nWB-hI_YZmZ-fScYwFy4O_fWOcPwf-pgv3pPQNJP_sT5J_xOUciD8WaKmevh1rUR-1jk7g1aCD_KeJaOpjVu0cm_11BBIUXdxbFkVMdi&source=gbs_api"}
    }    
  ]);

  const addBookToShelf = (book,shelf) => {
    if (shelf === "Currently Reading") {
      setCurrentList(currentList.concat([book]));
    } else if (shelf === "Want to Read") {
      setWantList(wantList.concat([book]));
    } else if (shelf === "Read") {
      setReadList(readList.concat([book]));
    }
  }

  const removeBookFromShelf = (book,shelf) => {
    if (shelf === "Currently Reading") {
      setCurrentList(currentList.filter((b) => b.title !== book.title));
    } else if (shelf === "Want to Read") {
      setWantList(wantList.filter((b) => b.title !== book.title));
    } else if (shelf === "Read") {
      setReadList(readList.filter((b) => b.title !== book.title));
    }    
  }

  const changeShelf = (book, oldShelf,newShelf) => {
    console.log("old shelf:",oldShelf);
    console.log("new shelf:",newShelf);
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
