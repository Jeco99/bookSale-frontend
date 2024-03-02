// import { useEffect, useState } from "react";
import tableColumnName from "../component/manage_book.jsx/tableColumnName";
// import { useLoaderData } from "react-router-dom";
import DeleteBook from "../component/deletebook/deletebook";
import EditBook_Page from "../component/updateBook/updateBook";
import { useLoaderData } from "react-router-dom";

// export const bookLoader = async () => {
//   const response = await fetch("http://localhost:4000/books/getBook");
//   const bookData = await response.json();
//   return bookData;
// };

export default function ManageBook() {
  const  bookData  = useLoaderData();
  console.log(bookData);
  // const [data, setData] = useState([]);

  // useEffect(() => {
  //   async function init() {
  //     const data = await bookLoader();
  //     setData(data);
  //   }
  //   init();
  // }, []);
  // const {} = useLoaderData();

  return (
    <>
      <h1 className="text-center">Manage Book</h1>
      <div className="overflow-x-auto">
        <table className="table-auto min-w-full divide-y divide-gray-200">
          <thead>
            <tr>
              {tableColumnName.map((columnName) => (
                <th
                  key={columnName.id}
                  className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider"
                >
                  {columnName.column_name}{" "}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {bookData.map((items) => (
              <tr key={items.book_name}>
                <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 font-medium text-gray-900">
                  {items.book_name}
                </td>
                <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 font-medium text-gray-900">
                  {items.author}
                </td>
                <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 font-medium text-gray-900">
                  {items.genre}
                </td>
                <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 font-medium text-gray-900">
                  {items.price}
                </td>
                <td>
                  <EditBook_Page />
                  <DeleteBook />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
