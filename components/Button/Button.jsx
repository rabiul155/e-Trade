function Button({ type, text, className }) {
  return (
    <button
      type={type}
      className={`w-full block font-semibold rounded-lg
      px-4 py-[10px] mt-6 border border-gray-300 ${className}  `}
    >
      {text}
    </button>
  );
}

export default Button;
