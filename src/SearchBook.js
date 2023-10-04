import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { search } from "./BooksAPI";
import BookComponent from "./Book";

const SearchBookComponent = () => {
  const [books, setBooks] = useState(null);
  const [textSearch, setTextSearch] = useState("");

  const handleInputText = (e) => {
    setTextSearch(e);
  };

  useEffect(() => {
    const getBooks = async () => {
      if (textSearch === "") {
        setBooks("");
        return;
      }

      const query = textSearch;

      const res = await search(textSearch, Math.max);

      if (!Array.isArray(res)) {
        setBooks("");
        return;
      }

      if (query === textSearch) {
        const result = res.map((book) => {
          const value = res.find((value) => value.id === book.id);
          return {
            ...value,
            shelf: value.shelf !== undefined ? value.shelf : "none",
          };
        });

        setBooks(result);
      }
    };
    getBooks();
  }, [textSearch]);

  return (
    <div className="search-books">
      <div className="search-books-bar">
        <Link className="close-search" to="/">
          Close
        </Link>
        <div className="search-books-input-wrapper">
          <input
            type="text"
            placeholder="Search by title, author, or ISBN"
            onChange={(e) => {
              handleInputText(e.target.value);
            }}
            value={textSearch}
          />
        </div>
      </div>
      <div className="search-books-results">
        <ol className="books-grid">
          {books &&
            books.map((book) => (
              <li key={book.id}>
                <BookComponent book={book} />
              </li>
            ))}
        </ol>
      </div>
    </div>
  );
};

export default SearchBookComponent;
