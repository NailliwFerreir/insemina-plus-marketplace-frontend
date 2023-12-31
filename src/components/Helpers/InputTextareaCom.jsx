export default function InputTextareaCom({
  label,
  type,
  name,
  placeholder,
  children,
  inputHandler,
  value,
  inputClasses,
  labelClasses = "text-qgray text-[13px] font-normal",
}) {
  return (
    <div className="input-com w-full h-full">
      {label && (
        <label
          className={`input-label block  mb-2 ${labelClasses || ""}`}
          htmlFor={name}
        >
          {label}
        </label>
      )}
      <div className="input-wrapper border border-qgray-border w-full h-full overflow-hidden relative ">
        <textarea
          placeholder={placeholder}
          value={value}
          onChange={inputHandler}
          className={`input-field placeholder:text-sm text-sm px-6 py-1 text-dark-gray w-full h-full font-normal bg-white focus:ring-0 focus:outline-none resize-none ${
            inputClasses || ""
          }`}
          type={type}
          id={name}
        />
        {children && children}
      </div>
    </div>
  );
}
