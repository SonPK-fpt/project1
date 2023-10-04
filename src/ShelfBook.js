import BookComponent from "./Book";

const ShelfBookComponent = ({ books, titleShelf, setReloadPage }) => {
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{titleShelf}</h2>
      <div className="bookshelf-books">
        {books && (
          <ol className="books-grid">
            {books.map((book) => (
              <li key={book.id}>
                <BookComponent book={book} setReloadPage={setReloadPage} />
              </li>
            ))}
          </ol>
        )}
      </div>
    </div>
  );
};

export default ShelfBookComponent;
