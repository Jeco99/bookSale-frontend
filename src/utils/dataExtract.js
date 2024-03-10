export const BookLoader = async () => {
    const response = await fetch("http://localhost:4000/books/getBook");
    const bookData = await response.json();
    return bookData ;
  };
