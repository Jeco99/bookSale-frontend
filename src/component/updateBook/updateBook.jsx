import { useState } from "react";
import inputFormData from "../add_book/inputFormData";
import { Modal, Button } from "flowbite-react";

// const bookLoader = async (book_id) => {
//     const response = await fetch(`http://localhost:4000/books/updatebook/${book_id}`);
//     const bookData = await response.json();
//     return bookData;
// }

export default function EditBook_Page() {
  const [openModal, setOpenModal] = useState(false);

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

    try {
      const response = await fetch("http://localhost:4000/books/addBook", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(bookInfo),
      });
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error("Error", error);
    }
  };

  return (
    <>
      <button onClick={() => setOpenModal(true)}>Edit</button>
      <Modal
        show={openModal}
        size="md"
        onClose={() => setOpenModal(false)}
        popup
      >
        <Modal.Header />
        <Modal.Body>
          <form action="" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 gap-4">
              {inputFormData.map((elements) => (
                <div key={elements.id}>
                  <label htmlFor={elements.id}>{elements.labelName}</label>
                  <input
                    id={elements.id}
                    type={elements.type}
                    className="w-full bg-gray-100 border-black py-2 rounded-md"
                    placeholder={elements.labelName}
                    name={elements.id}
                    onChange={handleChange}
                  />
                </div>
              ))}
            </div>
            <div>
              <label htmlFor="description">Description:</label>
              <textarea
                name="description"
                id="description"
                onChange={handleChange}
                className="w-full bg-gray-100 border-black py-2 rounded-md"
              ></textarea>
            </div>
            <div className="flex">
              <button
                type="submit"
                className="bg-blue-600  px-14 py-4 rounded-md"
              >
                Update
              </button>
              <button
                type="submit"
                className="bg-blue-600 px-14 py-4 rounded-md"
              >
                Cancel
              </button>
            </div>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
}
