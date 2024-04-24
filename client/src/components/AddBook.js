// Import everything needed to use the `useQuery` hook
import { useQuery, gql } from "@apollo/client";

const getAuthorsQuery = gql`
  {
    authors {
      name
      id
    }
  }
`;

function AddBook() {
  const { loading, error, data } = useQuery(getAuthorsQuery);
  const displayAuthors = () => {
    if (loading) {
      return <option disabled>Loading Authors...</option>;
    } else {
      return data.authors.map((author) => (
        <option key={author.id} value={author.id}>
          {author.name}
        </option>
      ));
    }
  };
  return (
    <form id="add-book">
      <div className="feild">
        <label>Book Name: </label>
        <input type="text" />
      </div>
      <div className="feild">
        <label>Genre: </label>
        <input type="text" />
      </div>
      <div className="feild">
        <label>Author:</label>
        <select>
          <option disabled>Select author</option>
          {displayAuthors()}
        </select>
      </div>
      <button>+</button>
    </form>
  );
}

export default AddBook;
