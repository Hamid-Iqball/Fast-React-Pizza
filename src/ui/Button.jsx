import { Link } from "react-router-dom";

function Button({ children, disabled, to, type, onClick }) {
  const base =
    "bg-yellow-400 uppercase font-semibold text-stone-800  inline-block rounded-full hover:bg-yellow-300 duration-300 transition-colors focus:ring focus:ring-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed ";
  const styles = {
    primary: base + "py-3 px-4 sm:px-6 sm:py-4",
    small: base + "py-2 px-3 md:px-5 md:py-2.5 text-xs",
    secondary:
      "border-2 border-stone-300 uppercase font-semibold text-stone-800  inline-block rounded-full hover:bg-stone-300 duration-300 transition-colors  focus:ring focus:ring-stone-200 focus:ring-offset-2 disabled:cursor-not-allowed py-3 px-2.5 sm:px-6 sm:py-3.5 ",
    round: base + "py-1 px-2.5 md:px-3.5 md:py-2  text-xs ",
  };

  if (to)
    return (
      <Link className={styles[type]} to={to}>
        {children}{" "}
      </Link>
    );

  if (onClick) {
    return (
      <button disabled={disabled} className={styles[type]} onClick={onClick}>
        {children}
      </button>
    );
  }

  return (
    <button disabled={disabled} className={styles[type]}>
      {children}
    </button>
  );
}

export default Button;
