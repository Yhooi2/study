import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import UserName from '../features/user/userName';
import Input from './Input';

const styleHeader = "flex items-center justify-between border-b border-stone-200 bg-yellow-400 px-4 py-3 uppercase sm:px-6";

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
    <header className= {styleHeader}>
      <Link to="/" className="tracking-widest">
        Fast React Pizza Go
      </Link>
      <form onSubmit={handleSubmit}>
        <Input style='search' query={query} setQuery={setQuery} />
      </form>
      <UserName />
    </header>
  );
}

export default Header;
