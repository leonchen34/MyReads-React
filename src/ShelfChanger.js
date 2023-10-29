import {useNavigate} from "react-router-dom";

const ShelfChanger = ({book,shelfName,selectShelf}) => {
    let navigate = useNavigate();
    let bookTitle=book.title;
    let shelfValue="";
    if (shelfName === "Currently Reading")
        shelfValue="currentlyReading";
    else if (shelfName === "Want to Read")
        shelfValue="wantToRead";
    else if (shelfName === "Read")
        shelfValue="read";
    else if (shelfName === "Matched List")
        shelfValue="none";
    //console.log(shelfValue);

    const handleSelect = () => {
        let ele = document.getElementById(bookTitle);
        let newShelf = ele.options[ele.selectedIndex].text;
        selectShelf(newShelf);
        if (newShelf === "Currently Reading" ||
            newShelf === "Want to Read" ||
            newShelf === "Read") {            
                //navigate("/");
            }
    }

    return (
        <div className="book-shelf-changer">
            <select id={bookTitle} defaultValue={shelfValue} onChange={handleSelect}>
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