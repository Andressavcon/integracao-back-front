import { useLoaderData } from 'react-router-dom';
import styles from './Home.module.css';
import { BooksResponse, IBook } from '../../interfaces/book.interface';
import { useState } from 'react';

export const Home = (): JSX.Element => {
  const booksResponse = useLoaderData() as BooksResponse;
  const books = booksResponse.data;
  const [cardBooks, setCardBooks] = useState<IBook[]>([]);

  function addBookList() {
    setCardBooks((prevBooks) => {
      const booksLength = prevBooks.length;
      if (booksLength < books.length) {
        return [...prevBooks, books[booksLength]];
      }
      return prevBooks;
    });
  }

  function deleteBookList(indexBook: number) {
    setCardBooks((prevBooks) =>
      prevBooks.filter((_, index) => index !== indexBook)
    );
  }

  return (
    <main className="main">
      <button onClick={addBookList} className={styles.button}>
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24"
            height="24"
          >
            <path fill="none" d="M0 0h24v24H0z"></path>
            <path
              fill="currentColor"
              d="M11 11V5h2v6h6v2h-6v6h-2v-6H5v-2z"
            ></path>
          </svg>
          Adicionar livro
        </span>
      </button>
      <h1 className="title2">Lista de livros</h1>
      <div className={styles.cardContainer}>
        {cardBooks.map((book, index) => (
          <div key={index} className={styles.card}>
            <h3>{book.Title}</h3>
            <p>
              <strong>Year:</strong> {book.Year}
            </p>
            <p>
              <strong>Publisher:</strong> {book.Publisher}
            </p>
            <p>
              <strong>Pages:</strong> {book.Pages}
            </p>
            <button
              onClick={() => deleteBookList(index)}
              className={styles.button}
            >
              Deletar
            </button>
          </div>
        ))}
      </div>
    </main>
  );
};
