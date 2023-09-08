import { useState } from "react";
import useBooksContext from "../hooks/use-books-context";

function BookCreate({onCreate}){
    const [title, setTitle] = useState("");
    const { createBook } = useBooksContext();

    const hadleChange = (event) => {
        setTitle(event.target.value)
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        createBook(title);
        setTitle("");
    }

    return(
        <div className="book-create">
            <h3>Add a book</h3>
            <form onSubmit={handleSubmit}>
                <label htmlFor="title">Title</label>
                <input className="input" value={title} onChange={hadleChange} id="title" />
                <button className="button">click</button>
            </form>
        </div>
    )
}

export default BookCreate;