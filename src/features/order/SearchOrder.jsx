import { useState } from "react";
import { useNavigate } from "react-router";

function SearchOrder() {
  //state
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  //function
  function handleSubmit(e) {
    e.preventDefault();
    if (!query) return;
    navigate(`/order/${query}`);
    setQuery("");
  }
  //JSX
  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Search order #"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="rounded-full py-2 px-4 text-sm
        bg-yellow-100 placeholder:text-stone-400 w-28 sm:w-64 sm:focus:w-72 transition-all duration-300  focus:outline-none  focus:ring focus:ring-yellow-500 focus:ring-opacity-50 "
      />
    </form>
  );
}

export default SearchOrder;
