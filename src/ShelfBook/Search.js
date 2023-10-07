import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAll, search } from "../BooksAPI";
import Book from "./Component/Book";

const Search = () => {
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

      await Promise.all([getAll(), search(textSearch, Math.max)]).then(
        (allBook) => {
          if (!Array.isArray(allBook[1])) {
            setBooks("");
            return;
          }

          if (query === textSearch) {
            const result = allBook[1].map((book) => {
              const value = allBook[0].find((value) => value.id === book.id);
              return {
                ...book,
                shelf: value ? value.shelf : "none",
              };
            });

            setBooks(result);
          }
        }
      );
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
                <Book book={book} />
              </li>
            ))}
        </ol>
      </div>
    </div>
  );
};

export default Search;
