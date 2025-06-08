import React, { useState } from "react";
import ThumbnailUploader from "../../../components/comm/subComm/ThumbnailUploader";
import CategoryTagSelector from "../../../components/comm/subComm/CategoryTagSelector";
import GeneralForm from "../../../components/comm/subComm/GeneralForm";

const UserUpload = () => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedTag, setSelectedTag] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);

  const [data, setData] = useState({
    name: "",
    shortDescription: "",
    description: "",
    texrainput: "",
    content: ""
  });
  
  // Fields metadata (dynamic config for each field)
  const fields = [
    {
      id: "name",
      label: "Blog Name",
      type: "text",
      placeholder: "Enter blog name",
      required: true,
    },
    {
      id: "shortDescription",
      label: "Short Description",
      type: "text",
      placeholder: "Enter short description",
      required: true,
    },
    {
      id: "description",
      label: "Description",
      type: "number",
      placeholder: "Write description...",
    },
    {
      id: "texrainput",
      label: "Text Area Input",
      type: "textarea",
      placeholder: "Write text area input...",
    },
    {
      id: "content",
      label: "Content",
      type: "richtext",
    },
  ];
  


  
  const handleFileUpload = async (file) => {
    setSelectedFile(file);

    alert(`File selected: ${file.name}`);
  };


  const handleSubmit = () => {
    const blogData = {
      title: data.name,
      shortDescription: data.shortDescription,
      description: data.description,
      content: data.content,
      category: selectedCategory,
      tag: selectedTag,
      file: selectedFile ? selectedFile.name : null,
    };
    console.log("Blog Data Submitted:", blogData);
  };

  return (
    <>
<div className="grid grid-cols-1 lg:grid-cols-3 gap-6 p-4">


  {/* Main Content */}
  <div className="lg:col-span-2">
  <GeneralForm
    data={data}
    setData={setData}
    fields={fields}
  />

    <div className="mt-6">
      <button
        onClick={handleSubmit}
        className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700"
      >
        Submit Blog
      </button>
    </div>
  </div>
    {/* Left Sidebar */}
    <div className="space-y-6">
    <ThumbnailUploader
      title="Upload Thumbnail"
      onFileSelect={handleFileUpload}
    />
    <CategoryTagSelector
      selectedCategory={selectedCategory}
      selectedTag={selectedTag}
      onCategoryChange={(cat) => setSelectedCategory(cat)}
      onTagChange={(tag) => setSelectedTag(tag)}
    />
  </div>
</div>

    </>
  );
};

export default UserUpload;
