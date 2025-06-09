import React, { useState } from "react";
import ThumbnailUploader from "../../../components/comm/subComm/ThumbnailUploader";
import CategoryTagSelector from "../../../components/comm/subComm/CategoryTagSelector";
import GeneralForm from "../../../components/comm/subComm/GeneralForm";

const UserUpload = () => {
  const [selectedCategory, setSelectedCategory] = useState([]);
  const [selectedTag, setSelectedTag] = useState([]);
  const [selectedFile, setSelectedFile] = useState(null);

  const [data, setData] = useState({
    name: "",
    shortDescription: "",
    description: "",
    texrainput: "",

    // content: "",
  });

  const fields = [
    {
      id: "name",
      label: "Name",
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
      type: "text",
      placeholder: "Write description...",
    },
    {
      id: "noteType",
      label: "Note Type",
      type: "select",
      options: ["Student Notes", "Competition Notes"],
      placeholder: "Choose Note Type",
    },

    // {
    //   id: "content",
    //   label: "Content",
    //   type: "richtext",
    // },
  ];

  const [mendatoryFields, setMandatoryFields] = useState({
    category: "",
    tag: "",
  });

  const mendatoryFieldsList = [
    {
      id: "language",
      label: "Language",
      type: "select",
      options: ["English", "Hindi"],
      placeholder: "Choose Language",
      required: true,
    },
    {
      id: "note-type",
      label: "Note Type",
      type: "select",
      options: ["Old Papers", "New Notes", "Revision Notes", "Question Bank"],
      required: true,
      placeholder: "Choose Note Type",
    },
  ];

  // State for student notes

  const studentNotesFields = [
    {
      id: "college-University",
      label: "Select College/University",
      type: "select",
      options: ["HBSE", "MGSU", "DU", "PU", "BHU", "HAU"],
      placeholder: "Choose College/University",
    },
    {
      id: "course",
      label: "Select Course",
      type: "select",
      options: ["B.A", " B.Sc", "B.Com", "M.A", "M.Sc", "M.Com"],
      placeholder: "Choose Course",
    },
    {
      id: "subject",
      label: "Select Subject",
      type: "select",
      options: [
        "English",
        "Hindi",
        "Mathematics",
        "Physics",
        "Chemistry",
        "Biology",
      ],
      placeholder: "Choose Subject",
    },
    {
      id: "year",
      label: "Select Year",
      type: "select",
      options: ["1st Year", "2nd Year", "3rd Year", "4th Year"],
      placeholder: "Choose Year",
    },
    {
      id: "semester",
      label: "Select Semester",
      type: "select",
      options: ["1st Semester", "2nd Semester", "3rd Semester", "4th Semester"],
      placeholder: "Choose Semester",
    },
  ];

  const [studentNotes, setStudentNotes] = useState({
    course: "",
    subject: "",
    year: "",
    semester: "",
  });

  const otherNotesList = [
    {
      id: "examName",
      label: "Exam Name",
      type: "text",
      placeholder: "Enter Exam Name",
      required: true,
    },
    {
      id: "examLevel",
      label: "Exam Level",
      type: "select",
      options: ["State Level", "National Level", "International Level"],
      placeholder: "Choose Exam Level",
      required: true,
    },
    {
      id: "yearRelevance",
      label: "Year Relevance",
      type: "text",
      placeholder: "Enter Year Relevance (e.g., 2021-2022)",
    },
    {
      id: "source",
      label: "Source",
      type: "text",
      placeholder: "Enter Source (e.g., Official Website, Coaching Notes)",
    },
  ];
  const [otherNotes, setOtherNotes] = useState({});

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
      tag: selectedTag,
      file: selectedFile ? selectedFile.name : null,
      category: selectedCategory,
      notesType: data.noteType,
      studentNotes: data.noteType === "Student Notes" ? studentNotes : {},
      otherNotes: data.noteType === "Competition Notes" ? otherNotes : {},
    };
    console.log("Data Submitted:", blogData);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 p-4">
      {/* ===== Mobile Upload Section ===== */}
      <div className="lg:hidden space-y-4">
        <ThumbnailUploader title="Upload PDF File" onFileSelect={handleFileUpload} />
        <ThumbnailUploader title="Upload Thumbnail" onFileSelect={handleFileUpload} />
  
        <div className="rounded-lg border border-gray-200 p-4 shadow-sm">
          <GeneralForm
            data={mendatoryFields}
            setData={setMandatoryFields}
            fields={mendatoryFieldsList}
          />
        </div>
  
        <CategoryTagSelector
          selectedCategory={selectedCategory}
          selectedTag={selectedTag}
          onCategoryChange={setSelectedCategory}
          onTagChange={setSelectedTag}
        />
      </div>
  
      {/* ===== Main Content Section ===== */}
      <div className="lg:col-span-2 space-y-6 rounded-lg border border-gray-200 p-6 shadow-sm">
        <GeneralForm
          formName="General Form"
          data={data}
          setData={setData}
          fields={fields}
        />
  
        {data.noteType === "Student Notes" && (
          <GeneralForm
            formName="Student Notes"
            data={studentNotes}
            setData={setStudentNotes}
            fields={studentNotesFields}
          />
        )}
  
        {data.noteType === "Competition Notes" && (
          <GeneralForm
            formName="Competition Notes"
            data={otherNotes}
            setData={setOtherNotes}
            fields={otherNotesList}
          />
        )}
      </div>
  
      {/* ===== Desktop Sidebar Section ===== */}
      <div className="hidden lg:block space-y-6">
        <ThumbnailUploader title="Upload PDF File" onFileSelect={handleFileUpload} />
        <ThumbnailUploader title="Upload Thumbnail" onFileSelect={handleFileUpload} />
  
        <div className="rounded-lg border border-gray-200 p-4 shadow-sm">
          <GeneralForm
            data={mendatoryFields}
            setData={setMandatoryFields}
            fields={mendatoryFieldsList}
          />
        </div>
  
        <CategoryTagSelector
          selectedCategory={selectedCategory}
          selectedTag={selectedTag}
          onCategoryChange={setSelectedCategory}
          onTagChange={setSelectedTag}
        />
      </div>
  
      {/* ===== Submit Button (Always at Bottom) ===== */}
      <div className="lg:col-span-3 mt-6">
        <button
          onClick={handleSubmit}
          className="w-full bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition"
        >
          Submit Note
        </button>
      </div>
    </div>
  );
  
};

export default UserUpload;
