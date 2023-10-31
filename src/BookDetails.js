import { useLocation } from "react-router-dom";

const BookDetails=() => {
    const location = useLocation();
    const {book} = location.state;
    //console.log(book);
    let jstring = JSON.stringify(book,null,4);
    return (
        <pre>
        {/*
            <p>Title:  {book.title}</p>   
            <p>ID:  {book.id}</p>
            <p>Authors: {book.authors}</p>
            <p>Category:  {book.categories}</p>
            <p>Language:  {book.language}</p>
            <p>MaturityRating:  {book.maturityRating}</p>
            <p>Page Count: {book.pageCount}</p>
            <p>Shelf: {book.shelf}</p>
            <p>Publisher:  {book.publisher}</p>
            <p>Published Date:  {book.publishedDate}</p>
            <p>Description: {book.description}</p>
        */}
        {jstring}
        </pre>
    );
}

export default BookDetails;