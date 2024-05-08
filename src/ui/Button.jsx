function Button({ children, disabled }) {
  return (
    <button
      disabled={disabled}
      className="bg-yellow-400 uppercase font-semibold text-stone-800 py-3 px-4 inline-block rounded-full hover:bg-yellow-300 duration-300 transition-colors focus:ring focus:ring-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed md:px-6 md:py-4"
    >
      {children}
    </button>
  );
}

export default Button;
