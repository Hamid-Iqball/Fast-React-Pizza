import { useState } from "react";
function SearchOrder() {
  const [query, setQuery] = useState("");
  return (
    <input
      placeholder="Search order #"
      value={query}
      onchange={(e) => setQuery(e.target.value)}
    />
  );
}

export default SearchOrder;
