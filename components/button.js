function Button({children, ...props}) {
  return (
    <button className="bg-red-500 text-white font-bold py-2 px-4 rounded" {...props}>
      {children}
    </button>
  );
}

export default Button;
