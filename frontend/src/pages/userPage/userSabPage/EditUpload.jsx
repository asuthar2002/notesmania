import React, { useState, useEffect } from "react";
import ThumbnailUploader from "../../../components/comm/subComm/ThumbnailUploader";
import CategoryTagSelector from "../../../components/comm/subComm/CategoryTagSelector";
import GeneralForm from "../../../components/comm/subComm/GeneralForm";

const EditUpload = () => {
  // Simulated existing data (normally you'd get this from props or API)
  const existingData = {
    title: "manmohan",
    shortDescription: "shot des",
    description: "des",
    content: undefined,
    tag: ["Health", "Business"],
    category: ["Technology", "Travel"],
    file: "meha.jpeg", // could be .pdf too
    notesType: "Student Notes",
    studentNotes: {
      "college-University": "MGSU",
      course: "B.A",
      subject: "English",
      year: "1st Year",
      semester: "1st Semester",
    },
    otherNotes: {},
    // Simulated file paths (from server/public folder)
    pdfUrl: "/uploads/notes/meha.pdf",
    thumbnailUrl: "https://i.pinimg.com/736x/43/69/dc/4369dc679a85c2ac899c9484e8c4e7c0.jpg",
  };

  const [selectedCategory, setSelectedCategory] = useState(existingData.category || []);
  const [selectedTag, setSelectedTag] = useState(existingData.tag || []);
  const [selectedFile, setSelectedFile] = useState(null);

  const [data, setData] = useState({
    name: existingData.title || "",
    shortDescription: existingData.shortDescription || "",
    description: existingData.description || "",
    noteType: existingData.notesType || "",
  });

  const [studentNotes, setStudentNotes] = useState(existingData.studentNotes || {});
  const [otherNotes, setOtherNotes] = useState(existingData.otherNotes || {});
  const [mandatoryFields, setMandatoryFields] = useState({});

  const fields = [
    { id: "name", label: "Name", type: "text", placeholder: "Enter blog name", required: true },
    { id: "shortDescription", label: "Short Description", type: "text", placeholder: "Enter short description", required: true },
    { id: "description", label: "Description", type: "text", placeholder: "Write description..." },
    { id: "noteType", label: "Note Type", type: "select", options: ["Student Notes", "Competition Notes"], placeholder: "Choose Note Type" },
  ];

  const studentNotesFields = [
    { id: "college-University", label: "Select College/University", type: "select", options: ["HBSE", "MGSU", "DU", "PU", "BHU", "HAU"], placeholder: "Choose College/University" },
    { id: "course", label: "Select Course", type: "select", options: ["B.A", "B.Sc", "B.Com", "M.A", "M.Sc", "M.Com"], placeholder: "Choose Course" },
    { id: "subject", label: "Select Subject", type: "select", options: ["English", "Hindi", "Mathematics", "Physics", "Chemistry", "Biology"], placeholder: "Choose Subject" },
    { id: "year", label: "Select Year", type: "select", options: ["1st Year", "2nd Year", "3rd Year", "4th Year"], placeholder: "Choose Year" },
    { id: "semester", label: "Select Semester", type: "select", options: ["1st Semester", "2nd Semester", "3rd Semester", "4th Semester"], placeholder: "Choose Semester" },
  ];

  const otherNotesList = [
    { id: "examName", label: "Exam Name", type: "text", placeholder: "Enter Exam Name", required: true },
    { id: "examLevel", label: "Exam Level", type: "select", options: ["State Level", "National Level", "International Level"], placeholder: "Choose Exam Level", required: true },
    { id: "yearRelevance", label: "Year Relevance", type: "text", placeholder: "Enter Year Relevance (e.g., 2021-2022)" },
    { id: "source", label: "Source", type: "text", placeholder: "Enter Source (e.g., Official Website, Coaching Notes)" },
  ];

  const mandatoryFieldsList = [
    { id: "language", label: "Language", type: "select", options: ["English", "Hindi"], placeholder: "Choose Language", required: true },
    { id: "note-type", label: "Note Type", type: "select", options: ["Old Papers", "New Notes", "Revision Notes", "Question Bank"], required: true, placeholder: "Choose Note Type" },
  ];

  const handleFileUpload = (file) => {
    setSelectedFile(file);
    alert(`File selected: ${file.name}`);
  };

  const handleSubmit = () => {
    const updatedData = {
      title: data.name,
      shortDescription: data.shortDescription,
      description: data.description,
      tag: selectedTag,
      file: selectedFile ? selectedFile.name : existingData.file || null,
      category: selectedCategory,
      notesType: data.noteType,
      studentNotes: data.noteType === "Student Notes" ? studentNotes : {},
      otherNotes: data.noteType === "Competition Notes" ? otherNotes : {},
    };
    console.log("Updated Data:", updatedData);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 p-4">
      {/* Mobile Section */}
      <div className="lg:hidden space-y-4">
        <ThumbnailUploader title="Upload PDF File" onFileSelect={handleFileUpload} initialFile={existingData.pdfUrl} />
        <ThumbnailUploader title="Upload Thumbnail" onFileSelect={handleFileUpload} initialFile={existingData.thumbnailUrl} />

        <div className="rounded-lg border border-gray-200 p-4 shadow-sm">
          <GeneralForm data={mandatoryFields} setData={setMandatoryFields} fields={mandatoryFieldsList} />
        </div>

        <CategoryTagSelector
          selectedCategory={selectedCategory}
          selectedTag={selectedTag}
          onCategoryChange={setSelectedCategory}
          onTagChange={setSelectedTag}
        />
      </div>

      {/* Main Section */}
      <div className="lg:col-span-2 space-y-6 rounded-lg border border-gray-200 p-6 shadow-sm">
        <GeneralForm formName="General Form" data={data} setData={setData} fields={fields} />

        {data.noteType === "Student Notes" && (
          <GeneralForm formName="Student Notes" data={studentNotes} setData={setStudentNotes} fields={studentNotesFields} />
        )}

        {data.noteType === "Competition Notes" && (
          <GeneralForm formName="Competition Notes" data={otherNotes} setData={setOtherNotes} fields={otherNotesList} />
        )}
      </div>

      {/* Desktop Sidebar */}
      <div className="hidden lg:block space-y-6">
        <ThumbnailUploader title="Upload PDF File" onFileSelect={handleFileUpload} initialFile={existingData.pdfUrl} />
        <ThumbnailUploader title="Upload Thumbnail" onFileSelect={handleFileUpload} initialFile={existingData.thumbnailUrl} />

        <div className="rounded-lg border border-gray-200 p-4 shadow-sm">
          <GeneralForm data={mandatoryFields} setData={setMandatoryFields} fields={mandatoryFieldsList} />
        </div>

        <CategoryTagSelector
          selectedCategory={selectedCategory}
          selectedTag={selectedTag}
          onCategoryChange={setSelectedCategory}
          onTagChange={setSelectedTag}
        />
      </div>

      {/* Submit Button */}
      <div className="lg:col-span-3 mt-6">
        <button onClick={handleSubmit} className="w-full bg-green-600 text-white px-6 py-3 rounded-md hover:bg-green-700 transition">
          Update Note
        </button>
      </div>
    </div>
  );
};

export default EditUpload;
