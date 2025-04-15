import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Header() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  function handleSubmit(e) {
    e.preventDefault();
    if (!query) return;
    navigate(`/order/${query}`);
    setQuery("");
  }
  return (
    <header>
      <Link to="/"> Fast React Pizza Go</Link>
      <form onSubmit={handleSubmit}>
        <input
          placeholder={"Search order #"}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </form>
      <p>Art</p>
    </header>
  );
}

export default Header;
