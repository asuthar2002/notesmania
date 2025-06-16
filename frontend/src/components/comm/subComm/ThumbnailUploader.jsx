import React, { useEffect, useRef, useState } from 'react';
import pdfIcon from "../../../assets/pdf-icon.svg";

const ThumbnailUploader = ({
  title = 'Thumbnail',
  description,
  onFileSelect,
  initialFile, // <-- added prop
}) => {
  const fileInputRef = useRef(null);
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);

  // Show initialFile if no selected file
  useEffect(() => {
    if (!selectedFile && initialFile) {
      setPreviewUrl(initialFile);
    }
  }, [initialFile, selectedFile]);

  const handleFileChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      setSelectedFile(file);
      setPreviewUrl(URL.createObjectURL(file));

      if (onFileSelect) {
        onFileSelect(file);
      }

      e.target.value = null;
    }
  };

  const handleClear = () => {
    setSelectedFile(null);
    setPreviewUrl(initialFile || null);
    if (onFileSelect) onFileSelect(null);
  };

  const isPdf = (file) => {
    if (!file) return false;
    if (file.type) return file.type === "application/pdf";
    if (typeof file === "string") return file.toLowerCase().endsWith(".pdf");
    return false;
  };

  return (
    <div className="max-w-xs rounded-lg border border-gray-200 p-6 shadow-sm">
      <h2 className="text-gray-900 text-lg font-semibold mb-4">{title}</h2>

      <label className="block w-full cursor-pointer">
        <div className="w-full rounded-md border border-blue-400 border-dashed bg-blue-50 text-blue-600 text-center py-10 px-4 text-sm leading-relaxed select-none">
          {previewUrl ? (
            <div>
              {isPdf(selectedFile || previewUrl) ? (
                <div className="text-center mb-2">
                  <img
                    src={pdfIcon}
                    alt="PDF File"
                    className="mx-auto h-24 object-contain"
                  />
                  <p className="text-sm text-gray-700 mt-2">(PDF File)</p>
                </div>
              ) : (
                <img
                  src={previewUrl}
                  alt="preview"
                  className="mx-auto h-24 object-contain mb-2"
                />
              )}

              <p className="text-blue-700 font-medium">
                {selectedFile?.name || (typeof initialFile === "string" ? initialFile.split("/").pop() : "")}
              </p>

              <button
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  handleClear();
                }}
                className="mt-2 text-red-500 text-sm underline"
              >
                Clear
              </button>
            </div>
          ) : (
            <>Drag 'n' drop or click to select a file</>
          )}
        </div>
        <input
          ref={fileInputRef}
          type="file"
          accept=".png,.jpg,.jpeg,.pdf"
          className="hidden"
          onChange={handleFileChange}
        />
      </label>

      {description && (
        <p className="mt-3 text-gray-900 text-sm leading-relaxed">{description}</p>
      )}
    </div>
  );
};

export default ThumbnailUploader;
