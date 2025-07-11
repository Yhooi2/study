const input =
  'grow w-full rounded-full border border-stone-200 px-4 py-2 text-sm transition-all duration-300 placeholder:text-gray-400 focus:outline-none focus:ring focus:ring-yellow-400 md:px-6 md:py-3 md:my-3';

const styles = {
  form: 'mb-5 sm:grid sm:grid-cols-[140px_1fr] sm:items-center sm:gap-4 ',
  checkbox:
    'h-6 w-6 accent-yellow-400 focus:ring focus:ring-offset-2 focus:ring-yellow-400',
};

function Input({
  style,
  label,
  type,
  name,
  error,
  setter,
  getter = '',
  disabled = false,
}) {
  if (style === 'form') {
    return (
      <div className={styles[style] + ' md:gap-0'}>
        <label>{label}</label>
        <input
          className={input}
          type={type}
          name={name}
          defaultValue={getter}
          disabled={disabled}
          required
        />
        <div></div>
        {!!error && (
          <p className="rounded-md bg-red-100 p-1 text-xs text-red-700">
            {error}
          </p>
        )}
      </div>
    );
  }
  if (style === 'checkbox') {
    return (
      <div className="my-12 flex items-center gap-5">
        <input
          className={styles[style]}
          type={type}
          name={name}
          id={name}
          value={getter}
          onChange={(e) => setter(e.target.checked)}
        />
        <label htmlFor={name}>{label}</label>
      </div>
    );
  }
  if (style === 'search')
    return (
      <input
        className="w-28 rounded-full bg-yellow-100 px-4 py-2 text-sm transition-all duration-300 placeholder:text-stone-400 focus:w-32 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-opacity-50 sm:w-64 sm:focus:w-72"
        placeholder={'Search order #'}
        value={getter}
        onChange={(e) => setter(e.target.value)}
      />
    );
  return (
    <input
      type="text"
      placeholder="Your full name"
      value={getter}
      onChange={(e) => setter(e.target.value)}
      className={`${input} mb-8 !w-72`}
    />
  );
}

export default Input;
