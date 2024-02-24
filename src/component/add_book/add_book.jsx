import inputFormData from "./inputFormData";

export default function Add_BookForm() {
  return (
    <>
      <div>
        <h1 className="text-center">Add book</h1>
        <form className="m-4">
          <div className="grid grid-cols-2 gap-4">
            {inputFormData.map((elements) => (
              <div key={elements.id}>
                <label htmlFor={elements.id}>{elements.labelName}</label>
                <input
                  id={elements.id}
                  type={elements.type}
                  className="w-full bg-gray-100 border-black py-2 rounded-md"
                  placeholder={elements.labelName}
                />
              </div>
            ))}
          </div>

          <div>
            <label htmlFor="">Description:</label>
            <textarea
              name=""
              id=""
              className="w-full bg-gray-100 border-black py-2 rounded-md"
            ></textarea>
          </div>
          <div className="grid">
            <button type="submit" className="bg-blue-600 justify-self-end px-14 py-4 rounded-md">Add</button>
          </div>
        </form>
      </div>
    </>
  );
}
