import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import UserName from '../user/userName';

function Header() {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();
  function handleSubmit(e) {
    e.preventDefault();
    if (!query) return;
    navigate(`/order/${query}`);
    setQuery('');
  }
  return (
    <header className="flex items-center justify-between border-b border-stone-200 bg-yellow-400 px-4 py-3 uppercase sm:px-6">
      <Link to="/" className="tracking-widest">
        Fast React Pizza Go
      </Link>
      <form onSubmit={handleSubmit}>
        <input
          className="w-28 rounded-full bg-yellow-100 px-4 py-2 text-sm transition-all duration-300 placeholder:text-stone-400 focus:w-32 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-opacity-50 sm:w-64 sm:focus:w-72"
          placeholder={'Search order #'}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </form>
      <UserName />
    </header>
  );
}

export default Header;
