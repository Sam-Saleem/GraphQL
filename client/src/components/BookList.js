import { useQuery } from "@apollo/client";
import { getBooksQuery } from "../queries/queries";

export default function BookList() {
  const { loading, error, data } = useQuery(getBooksQuery);
  const displayBooks = () => {
    if (loading) {
      return <div>Loading Books...</div>;
    } else {
      return data.books.map((book) => <li key={book.id}>{book.name}</li>);
    }
  };
  return (
    <div>
      <ul id="book-list">{displayBooks()}</ul>
    </div>
  );
}
