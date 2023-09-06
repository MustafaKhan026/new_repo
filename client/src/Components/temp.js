import React, { useState, useEffect } from "react";
import axios from "axios";
import CryptoJS from "crypto-js";

export default function StudentForm() {
  const [regNo, setRegNo] = useState("");
  const [name, setName] = useState("");
  const [yearOfPassing, setYearOfPassing] = useState("");
  const [collegeName, setCollegeName] = useState("");
  const [file, setFile] = useState(null);
  const [cert_hash, setCertHash] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        const fileData = reader.result;
        const hash = calculateHash(fileData);
        setCertHash(hash);
      };
      reader.readAsArrayBuffer(file);
    }
  }, [file]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "regNo":
        setRegNo(value);
        break;
      case "name":
        setName(value);
        break;
      case "yearOfPassing":
        setYearOfPassing(value);
        break;
      case "collegeName":
        setCollegeName(value);
        break;
      default:
        break;
    }
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const studentInfo = {
      regNo,
      name,
      yearOfPassing,
      collegeName,
      cert_hash,
    };
    console.log(studentInfo)

    try {
      const response = await axios.post("http://localhost:5000/uploadStudent", studentInfo)
        .catch(error => {
          console.log(error.response.status)
          if (error.response.status === 409) {
            alert("Student certificate already exists in the database!")
          }
        })
      if (response.status === 201) {
        console.log(response)

        setError("");
        alert("Student details saved successfully!");
        setRegNo("");
        setName("");
        setYearOfPassing("");
        setCollegeName("");
        setCertHash("");
        setFile(null);
      }
    } catch (error) {
      setError("An error occurred while saving student details.");
    }
  };

  const calculateHash = (data) => {
    const wordArray = CryptoJS.lib.WordArray.create(data);
    const hash = CryptoJS.SHA256(wordArray);
    return hash.toString(CryptoJS.enc.Hex);
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-semibold mb-4">Student Information</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Existing input fields */}
        <div className="form-group">
          <label className="block text-sm font-medium">Registration Number</label>
          <input
            type="text"
            className="form-control w-full border rounded-md px-3 py-2 text-black"
            name="regNo"
            value={regNo}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label className="block text-sm font-medium">Name</label>
          <input
            type="text"
            className="form-control w-full border rounded-md px-3 py-2 text-black"
            name="name"
            value={name}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label className="block text-sm font-medium">Year of Passing</label>
          <input
            type="text"
            className="form-control w-full border rounded-md px-3 py-2 text-black"
            name="yearOfPassing"
            value={yearOfPassing}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label className="block text-sm font-medium">College Name</label>
          <input
            type="text"
            className="form-control w-full border rounded-md px-3 py-2 text-black"
            name="collegeName"
            value={collegeName}
            onChange={handleChange}
          />
        </div>
        {/* ... */}

        {/* File input */}
        <div className="form-group">
          <label className="block text-sm font-medium">Upload File</label>
          <input
            type="file"
            className="form-control"
            name="file"
            onChange={handleFileChange}
          />
        </div>

        <button
          type="submit"
          className="btn btn-primary bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md"
        >
          Save
        </button>
      </form>
      {error && <p className="text-red-500 mt-3">{error}</p>}
    </div>
  );
}
