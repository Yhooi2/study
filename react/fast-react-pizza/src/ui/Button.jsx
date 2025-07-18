import { Link } from 'react-router-dom';

function Button({ children, disabled, to, onClick, type = 'primary' }) {
  const base =
    'text-sm inline-block rounded-full px-4 font-semibold uppercase tracking-wide transition-colors duration-300 focus:outline-none focus:ring focus:ring-offset-2 disabled:cursor-not-allowed ';

  const yellow =
    'bg-yellow-400 text-stone-800 hover:bg-yellow-300 focus:bg-yellow-300 focus:ring-yellow-300 ';

  const gray =
    'bg-stone-200/50 text-stone-400 hover:bg-stone-400  hover:text-stone-800 border-2 border-stone-300 focus:bg-stone-300 focus:ring-stone-200 ';

  const styles = {
    primary: base + yellow + 'py-3 md:px-6 md:py-4',
    small: base + yellow + 'text-xs py-2 ml-3 md:ml-4 md:px-5 md:py-2.5',
    round: base + yellow + 'py-1 px-2.5 md:px-3.5 md:py-2',
    secondary: base + gray + 'py-2.5 md:px-5 md:py-3',
  };

  if (to) {
    return (
      <Link to={to} className={styles[type]}>
        {children}
      </Link>
    );
  }

  if (onClick)
    return (
      <button onClick={onClick} className={styles[type]} disabled={disabled}>
        {children}
      </button>
    );

  return (
    <button className={styles[type]} disabled={disabled}>
      {children}
    </button>
  );
}

export default Button;
