function InputField({
  label,
  type,
  name,
  placeholder,
  value,
  onChange,
  onBlur,
}) {
  return (
    <div>
      <label className="block text-gray-700">{label}</label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        placeholder={placeholder}
        className="w-full px-4 py-[10px] text-[14px] rounded-lg bg-gray-200 mt-1 border focus:border-blue-500 focus:bg-white focus:outline-none"
      />
    </div>
  );
}

export default InputField;
