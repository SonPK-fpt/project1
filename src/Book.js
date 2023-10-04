import { useState } from "react";
import { update } from "./BooksAPI";

const BookComponent = ({ book, setReloadPage }) => {
  const [shelf, setShelf] = useState(book.shelf);

  const handleChangeShelf = async (e) => {
    const changeValue = e;
    await update(book, changeValue);
    if (book.shelf === undefined) {
      setShelf(changeValue);
    }
    setShelf(changeValue);
    if (setReloadPage) {
      setReloadPage(true);
    }
  };

  return (
    <div className="book">
      <div className="book-top">
        <div
          className="book-cover"
          style={{
            width: 128,
            height: 193,
            backgroundImage: `url('${
              book.imageLinks !== undefined
                ? book.imageLinks.smallThumbnail
                : ""
            }')`,
          }}
        ></div>
        <div className="book-shelf-changer">
          <select
            value={shelf}
            onChange={(e) => {
              handleChangeShelf(e.target.value);
            }}
          >
            <option value="none" disabled>
              {shelf !== "none" ? "Move to..." : "Add to ..."}
            </option>
            <option value="currentlyReading">Currently Reading</option>
            <option value="wantToRead">Want to Read</option>
            <option value="read">Read</option>
            {shelf !== "none" && <option value="none">None</option>}
          </select>
        </div>
      </div>
      <div className="book-title">{book.title}</div>
      <div className="book-authors">{book.authors}</div>
    </div>
  );
};

export default BookComponent;
