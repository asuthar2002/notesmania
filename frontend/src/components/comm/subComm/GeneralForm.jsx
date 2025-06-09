import React from "react";
import RichTextEditor from "./RichTextEditor";

const GeneralForm = ({ data, setData, fields, onSubmit,formName }) => {
  const handleChange = (field, value) => {
    setData((prev) => ({ ...prev, [field]: value }));
  };

  const inputClass =
    "block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-700 placeholder-gray-400 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500";

    const renderInput = (field) => {
      const { id, label, type, placeholder, required, options } = field;
      const value = data[id] || "";
    

    if (type === "textarea") {
      return (
        <div className="mb-6" key={id}>
          <label htmlFor={id} className="block text-sm font-medium text-gray-700 mb-1">
            {label} {required && <span className="text-red-600">*</span>}
          </label>
          <textarea
            id={id}
            placeholder={placeholder}
            value={value}
            required={required}
            onChange={(e) => handleChange(id, e.target.value)}
            className={inputClass}
          />
        </div>
      );
    }

    if (type === "richtext") {
      return (
        <div className="mb-6" key={id}>
          <label className="block text-sm font-medium text-gray-700 mb-2">{label}</label>
          <RichTextEditor value={value} onChange={(val) => handleChange(id, val)} />
        </div>
      );
    }

    if (type === "select") {
      return (
        <div className="mb-6" key={id}>
          <label htmlFor={id} className="block text-sm font-medium text-gray-700 mb-1">
            {label} {required && <span className="text-red-600">*</span>}
          </label>
          <select
            id={id}
            value={value}
            onChange={(e) => handleChange(id, e.target.value)}
            className={inputClass}
            required={required}
          >
            <option value="">{placeholder || "Select an option"}</option>
            {field.options?.map((option, index) => (
              <option key={index} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
      );
    }

    // default: text, number, etc
    return (
      <div className="mb-6" key={id}>
        <label htmlFor={id} className="block text-sm font-medium text-gray-700 mb-1">
          {label} {required && <span className="text-red-600">*</span>}
        </label>
        <input
          id={id}
          type={type}
          placeholder={placeholder}
          value={value}
          required={required}
          onChange={(e) => handleChange(id, e.target.value)}
          className={inputClass}
        />
      </div>
    );
  };

  React.useEffect(() => {
    onSubmit?.();
  }, [data]);

  return (
    <form className="space-y-8">
      <section>
        <h2 className="text-gray-900 font-semibold text-base mb-6">{formName}</h2>
        {fields.map(renderInput)}
      </section>
    </form>
  );
};

export default GeneralForm;
