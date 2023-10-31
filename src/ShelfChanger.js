import PropTypes from "prop-types";
//import {useNavigate} from "react-router-dom";

const ShelfChanger = ({book,shelfName,selectShelf}) => {
    //console.log(shelfName);
    //let navigate = useNavigate();
    let bookId=book.id;

    const handleSelect = () => {
        let ele = document.getElementById(bookId);
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
            <select id={bookId} defaultValue={shelfName} onChange={handleSelect}>
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

ShelfChanger.propTypes = {
    book:PropTypes.object.isRequired,
    shelfName:PropTypes.string.isRequired,
    selectShelf:PropTypes.func.isRequired,
}

export default ShelfChanger;