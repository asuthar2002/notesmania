import React from "react";
import RichTextEditor from "./RichTextEditor";

const GeneralForm = ({ data, setData, fields, onSubmit }) => {
  const handleChange = (field, value) => {
    setData((prev) => ({ ...prev, [field]: value }));
  };

  const inputClass =
    "block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-700 placeholder-gray-400 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500";

  const renderInput = ({ id, label, type, placeholder, required }) => {
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
        <h2 className="text-gray-900 font-semibold text-base mb-6">General</h2>
        {fields.map(renderInput)}
      </section>
    </form>
  );
};

export default GeneralForm;
