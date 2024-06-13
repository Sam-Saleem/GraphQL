import { useQuery } from "@apollo/client";
import { getBookQuery } from "../queries/queries";

function BookDetails({ bookId }) {
  console.log(bookId);
  const { loading, error, data } = useQuery(getBookQuery, {
    variables: { id: bookId },
  });
  const displayBookDetails = () => {
    if (loading) {
      return <div>Loading Book Details...</div>;
    } else {
      // console.log(data);
      const { book } = data;
      if (book) {
        return (
          <div>
            <h2>Book Name: {book.name}</h2>
            <p>Genre: {book.genre}</p>
            <p>Author: {book.author.name}</p>
            <p>All books by this author:</p>
            <ul className="other-books">
              {book.author.books.map((book) => {
                return <li key={book.id}>{book.name}</li>;
              })}
            </ul>
          </div>
        );
      } else {
        return <div>No book selected...</div>;
      }
    }
  };
  return (
    <div id="book-details">
      {console.log(data)}
      {displayBookDetails()}

      {/* <p>Output book details here.</p> */}
    </div>
  );
}

export default BookDetails;
