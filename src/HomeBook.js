import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAll } from "./BooksAPI";
import ShelfBookComponent from "./ShelfBook";

const ShelfList = [
  {
    value: "currentlyReading",
    title: "Currently Reading",
  },
  {
    value: "wantToRead",
    title: "Want To Read",
  },
  {
    value: "read",
    title: "Read",
  },
];

const HomeBookComponent = () => {
  const [reloadPage, setReloadPage] = useState(true);
  const [allBook, setAllBook] = useState([]);

  useEffect(() => {
    if (reloadPage) {
      const getAllBook = async () => {
        const res = await getAll();
        setAllBook(res);
        setReloadPage(false);
      };
      getAllBook();
    }
  }, [reloadPage]);

  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        {allBook && (
          <div>
            {ShelfList.map((Shelf, index) => {
              const books = allBook.filter(
                (books) => books.shelf === Shelf.value
              );
              return (
                <ShelfBookComponent
                  key={index}
                  books={books}
                  titleShelf={Shelf.title}
                  setReloadPage={setReloadPage}
                />
              );
            })}
          </div>
        )}
      </div>
      <div className="open-search">
        <Link to="/search">Add a book</Link>
      </div>
    </div>
  );
};

export default HomeBookComponent;
