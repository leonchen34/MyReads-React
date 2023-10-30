//import {useNavigate} from "react-router-dom";

const ShelfChanger = ({book,shelfName,selectShelf}) => {
    //console.log(shelfName);
    //let navigate = useNavigate();
    let bookTitle=book.title;

    const handleSelect = () => {
        let ele = document.getElementById(bookTitle);
        //let newShelf = ele.options[ele.selectedIndex].text;
        let newShelf = ele.value;
        //console.log("new shelf",newShelf);
        selectShelf(newShelf);
        /*
        if (newShelf === "currentlyReading" ||
            newShelf === "wantToRead" ||
            newShelf === "read") {            
                //navigate("/");
            }
            */
    }

    return (
        <div className="book-shelf-changer">
            <select id={bookTitle} defaultValue={shelfName} onChange={handleSelect}>
                <option value="move" disabled>
                    Move to...
                </option>
                <option value="currentlyReading">
                    Currently Reading
                    </option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
            </select>
        </div>
    )
}

export default ShelfChanger;