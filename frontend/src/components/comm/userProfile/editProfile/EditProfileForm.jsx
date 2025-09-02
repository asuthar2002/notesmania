import SocialMediaProfileForm from "./SocialMediaProfileForm";
import UpdatePasswordForm from "./UpdatePasswordForm";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Plus, GraduationCap, School } from 'lucide-react';

import { useSelector, useDispatch } from "react-redux";
import { updateProfile } from "../../../../features/auth/profileThunks";

const EditProfileForm = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    phone: "",
    location: "",
    about: "",
    universityName: "",
    universityCourse: "",
    universityCgpa: "",
    schoolName: "",
    schoolCourse: "",
    schoolPercentage: "",
  });

  useEffect(() => {
    if (user) {
      setForm({
        firstName: user.firstName || "",
        lastName: user.lastName || "",
        username: user.username || "",
        email: user.email || "",
        phone: user.phone || "",
        location: user.location || "",
        about: user.about || "",
        universityName: user.universityName || "",
        universityCourse: user.universityCourse || "",
        universityCgpa: user.universityCgpa || "",
        schoolName: user.schoolName || "",
        schoolCourse: user.schoolCourse || "",
        schoolPercentage: user.schoolPercentage || "",
        // add other fields as needed
      });
    }
  }, [user]);
  const [error, setError] = useState("");
  const token = useSelector((state) => state.auth.accessToken);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate all fields are filled
    for (const key in form) {
      if (form.hasOwnProperty(key) && !form[key]) {
        setError("All fields are required.");
        return;
      }
    }
    setError("");
    dispatch(updateProfile({ profileData: form, token }));
    // Optionally show a success message after dispatch
    // alert("Profile updated successfully!");
  };

  const handleRemovePicture = () => {

  };

  const handleChangePicture = () => {
    alert("Change profile picture clicked!");
  };

  const handleAddMoreEducation = () => {
    alert("Add more education clicked!");
  };

  return (<main className="max-w-4xl mx-auto p-6">
    <form
      onSubmit={handleSubmit}
      aria-label="Edit Profile Form"
      className="border border-gray-300 rounded-md p-6 space-y-6"
    >
      <h2 className="text-lg font-semibold text-gray-900">Edit Profile</h2>

      {/* Profile Picture */}
      <section className="flex items-center space-x-4">
        <div className="flex flex-col items-center relative">
          <img
            src="https://storage.googleapis.com/a1aa/image/12541ca6-73ba-4421-9671-39d3ae2e9589.jpg"
            alt="User"
            className="w-16 h-16 rounded-full object-cover"
            width={64}
            height={64}
          />
          <button
            type="button"
            onClick={handleRemovePicture}
            className="absolute -top-1 -right-1 bg-red-500 text-white w-5 h-5 rounded-full flex items-center justify-center text-xs hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400"
            aria-label="Remove profile picture"
          >
            ×
          </button>
        </div>
        <button
          type="button"
          onClick={handleChangePicture}
          className="text-sm font-semibold text-blue-600 bg-blue-100 px-3 py-1 rounded hover:bg-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          Change
        </button>
      </section>

      {/* Full Name */}
      <section>
        <label className="block text-xs font-medium text-gray-700 mb-1">
          Full name
        </label>
        <div className="flex space-x-2">
          <input
            type="text"
            placeholder="First name"
            value={form.firstName}
            onChange={(e) => setForm({ ...form, firstName: e.target.value })}
            className="flex-1 border border-gray-300 rounded-md px-3 py-2 text-sm placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
          <input
            type="text"
            placeholder="Last name"
            value={form.lastName}
            onChange={(e) => setForm({ ...form, lastName: e.target.value })}
            className="flex-1 border border-gray-300 rounded-md px-3 py-2 text-sm placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
        </div>
      </section>

      {/* Username & Email */}
      <section className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4">
        <div>
          <label className="block text-xs font-medium text-gray-700 mb-1">
            Username
          </label>
          <div className="flex rounded-md shadow-sm">
            <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-100 text-gray-500 text-xs">
              Eduport.com
            </span>
            <input
              value={form.username}
              onChange={(e) => setForm({ ...form, username: e.target.value })}
              type="text"
              className="flex-1 block w-full rounded-r-md border border-gray-300 px-3 py-2 text-sm placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
          </div>
        </div>
        <div>
          <label className="block text-xs font-medium text-gray-700 mb-1">
            Email id
          </label>
          <input
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            type="email"
            className="block w-full rounded-md border border-gray-300 px-3 py-2 text-sm placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
        </div>
      </section>

      {/* Phone & Location */}
      <section className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4">
        <div>
          <label className="block text-xs font-medium text-gray-700 mb-1">
            Phone number
          </label>
          <input
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
            type="tel"
            className="block w-full rounded-md border border-gray-300 px-3 py-2 text-sm placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
        </div>
        <div>
          <label className="block text-xs font-medium text-gray-700 mb-1">
            Location
          </label>
          <input
            value={form.location}
            onChange={(e) => setForm({ ...form, location: e.target.value })}
            type="text"
            className="block w-full rounded-md border border-gray-300 px-3 py-2 text-sm placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
        </div>
      </section>

      {/* About Me */}
      <section>
        <label className="block text-xs font-medium text-gray-700 mb-1">
          About me
        </label>
        <textarea
          rows={3}
          value={form.about}
          onChange={(e) => setForm({ ...form, about: e.target.value })}
          className="block w-full rounded-md border border-gray-300 px-3 py-2 text-xs placeholder-gray-400 resize-y focus:outline-none focus:ring-1 focus:ring-blue-500"
        />
        <p className="mt-1 text-xs text-gray-400">
          Brief description for your profile.
        </p>
      </section>

      {/* Education */}
      <section className="space-y-6">
        <div className="flex items-center space-x-2">
          <GraduationCap className="w-5 h-5 text-blue-600" />
          <h3 className="text-sm font-medium text-gray-700">Education</h3>
        </div>

        {/* University Education */}
        <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
          <div className="flex items-center space-x-2 mb-3">
            <GraduationCap className="w-4 h-4 text-blue-500" />
            <h4 className="text-xs font-medium text-gray-700">University Education</h4>
          </div>

          <div className="space-y-3">
            <div>
              <label className="block text-xs font-medium text-gray-700 mb-1">
                University Name
              </label>
              <input
                type="text"
                placeholder="e.g., Harvard University"
                value={form.universityName}
                onChange={(e) => setForm({ ...form, universityName: e.target.value })}
                className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 transition-colors"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-medium text-gray-700 mb-1">
                  Course/Degree
                </label>
                <input
                  type="text"
                  placeholder="e.g., Computer Science"
                  value={form.universityCourse}
                  onChange={(e) => setForm({ ...form, universityCourse: e.target.value })}
                  className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-gray-700 mb-1">
                  CGPA/GPA
                </label>
                <input
                  type="text"
                  placeholder="e.g., 3.8/4.0"
                  value={form.universityCgpa}
                  onChange={(e) => setForm({ ...form, universityCgpa: e.target.value })}
                  className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                />
              </div>
            </div>
          </div>
        </div>

        {/* School Education */}
        <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
          <div className="flex items-center space-x-2 mb-3">
            <School className="w-4 h-4 text-green-500" />
            <h4 className="text-xs font-medium text-gray-700">School Education</h4>
          </div>

          <div className="space-y-3">
            <div>
              <label className="block text-xs font-medium text-gray-700 mb-1">
                School Name
              </label>
              <input
                type="text"
                placeholder="e.g., St. Mary's High School"
                value={form.schoolName}
                onChange={(e) => setForm({ ...form, schoolName: e.target.value })}
                className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 transition-colors"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-medium text-gray-700 mb-1">
                  Course/Stream
                </label>
                <input
                  type="text"
                  placeholder="e.g., Science (PCM)"
                  value={form.schoolCourse}
                  onChange={(e) => setForm({ ...form, schoolCourse: e.target.value })}
                  className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-gray-700 mb-1">
                  Percentage
                </label>
                <input
                  type="text"
                  placeholder="e.g., 85%"
                  value={form.schoolPercentage}
                  onChange={(e) => setForm({ ...form, schoolPercentage: e.target.value })}
                  className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-start pt-2">
          <button
            type="button"
            onClick={handleAddMoreEducation}
            className="inline-flex items-center space-x-1 text-xs font-semibold text-gray-700 bg-gray-100 px-2 py-1 rounded hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-300"
          >
            <Plus className="w-3 h-3" />
            <span>Add more</span>
          </button>
        </div>
      </section>

      <section className="flex justify-end">
        <button
          type="submit"
          className="inline-flex justify-center rounded-md border border-transparent bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Save changes
        </button>
      </section>
    </form>
    <br />
    <UpdatePasswordForm />
    <br />
    <SocialMediaProfileForm />
  </main>
  );
};

export default EditProfileForm;
