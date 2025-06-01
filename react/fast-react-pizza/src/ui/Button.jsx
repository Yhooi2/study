import { Link } from 'react-router-dom';

function Button({ children, disabled, to, type = 'primary' }) {
  const base = 'inline-block rounded-full px-4 font-semibold uppercase tracking-wide transition-colors duration-300 focus:outline-none focus:ring focus:ring-offset-2 disabled:cursor-not-allowed ';

  const yellow = 'bg-yellow-400 text-stone-800 hover:bg-yellow-300 focus:bg-yellow-300 focus:ring-yellow-300 ';

  const gray = 'bg-stone-200 text-stone-400 hover:bg-stone-400  hover:text-stone-800 border-2 border-stone-300 focus:bg-stone-300 focus:ring-stone-200 ';
  
  const styles = {
    primary: base + yellow + 'py-3 md:px-6 md:py-4',
    small: base + yellow + 'text-sm py-2 md:px-5 md:py-2.5',
    secondary: base + gray + 'py-2.5 md:px-5 md:py-3',
  };

  if (to) {
    return (
      <Link to={to} className={styles[type]}>
        {children}
      </Link>
    );
  }
  return (
    <button className={styles[type]} disabled={disabled}>
      {children}
    </button>
  );
}

export default Button;
