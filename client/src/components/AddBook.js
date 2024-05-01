import { useQuery, useMutation } from "@apollo/client";
import {
  getAuthorsQuery,
  addBookMutation,
  getBooksQuery,
} from "../queries/queries";
import { useState } from "react";

function AddBook() {
  const { loading, error, data } = useQuery(getAuthorsQuery);
  const [addBook, { data: addBookData }] = useMutation(addBookMutation);

  const [name, setName] = useState("");
  const [genre, setGenre] = useState("");
  const [authorId, setAuthorId] = useState("");

  const displayAuthors = () => {
    if (error) {
      if (error) return <option disabled>Error! {error.message}</option>;
    }
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
  const submitForm = async (e) => {
    e.preventDefault();
    const res = await addBook({
      variables: { name, genre, authorId },
      refetchQueries: [{ query: getBooksQuery }],
    });
    console.log(res);

    // console.log(name, genre, authorId);
    // console.log("------>", addBookData);
    // console.log(addBookData);
  };
  return (
    <form id="add-book" onSubmit={submitForm}>
      <div className="feild">
        <label>Book Name: </label>
        <input
          type="text"
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
      </div>
      <div className="feild">
        <label>Genre: </label>
        <input
          type="text"
          onChange={(e) => {
            setGenre(e.target.value);
          }}
        />
      </div>
      <div className="feild">
        <label>Author:</label>
        <select
          onChange={(e) => {
            setAuthorId(e.target.value);
          }}
        >
          <option disabled>Select author</option>
          {displayAuthors()}
        </select>
      </div>
      <button>+</button>
    </form>
  );
}

export default AddBook;
