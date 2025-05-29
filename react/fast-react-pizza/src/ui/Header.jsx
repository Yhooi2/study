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
    <header className="bg-yellow-500 uppercase">
      <Link to="/" className="tracking-widest">
        {' '}
        Fast React Pizza Go
      </Link>
      <form onSubmit={handleSubmit}>
        <input
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
