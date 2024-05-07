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
      />
    </form>
  );
}

export default SearchOrder;
