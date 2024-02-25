import { useState } from "react";
import inputFormData from "./inputFormData";

export default function Add_BookForm() {
  const [bookInfo, setBookInfo] = useState({
    book_name: "",
    author: "",
    book_image: "",
    genre: "",
    description: "",
    price: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBookInfo({
      ...bookInfo,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try{
      const response = await fetch("http://localhost:4000/books/addBook", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(bookInfo),
    });
    const data = await response.json();
    console.log(data);
    } catch(error){
      console.error('Error', error);
    }
  };

  return (
    <>
      <div>
        <h1 className="text-center">Add book</h1>
      <h1>{bookInfo.book_name}</h1>

        <form className="m-4"   onSubmit={handleSubmit}>
          <div className="grid grid-cols-2 gap-4">
            {inputFormData.map((elements) => (
              <div key={elements.id}>
                <label htmlFor={elements.id}>{elements.labelName}</label>
                <input
                  id={elements.id}
                  type={elements.type}
                  className="w-full bg-gray-100 border-black py-2 rounded-md"
                  placeholder={elements.labelName}
                  onChange={handleChange}
                  name={elements.id}
                />
              </div>
            ))}
          </div>

          <div>
            <label htmlFor="description">Description:</label>
            <textarea
              onChange={handleChange}
              name="description"
              id="description"
              className="w-full bg-gray-100 border-black py-2 rounded-md"
            ></textarea>
          </div>
          <div className="grid">
            <button
              type="submit"
              className="bg-blue-600 justify-self-end px-14 py-4 rounded-md"
            >
              Add
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
