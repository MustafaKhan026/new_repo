import React from "react";
import "./page.css";
import img3 from "./images/img3.png";
import StudentForm from "../AircAdmin";

const AdminPage = () => {
  return (
    <div className="body">
      <div className="description ">
        <div className="description-image">
          <img src={img3} alt="Image 1" />
        </div>
        <div className="description-content">
          <h2>Comprehensive Student Database!</h2>
          <p>
            Manage student information effortlessly. Maintain an up-to-date
            database to ensure accurate verification
          </p>
          <div className="feature-box white-glassmorphism p-3 m-2">
            <div className="flex flex-row items-center cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span className="ml-2">
                Streamlined student info management with user-friendly
                interface.
              </span>
            </div>
          </div>
          <div className="white-glassmorphism p-3 m-2">
            <div className="flex flex-row items-center cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span className="ml-2">
                Real-time data synchronization for accurate and efficient
                record-keeping.
              </span>
            </div>
          </div>
          <div className="white-glassmorphism p-3 m-2">
            <div className="flex flex-row items-center cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span className="ml-2">
                Customizable user access levels ensure data security and
                privacy.
              </span>
            </div>
          </div>
          {/* Add more feature boxes */}
        </div>
      </div>
      {/* <FileUpload /> Include the updated FileUpload component here */}
      <StudentForm />
    </div>
  );
};

export default AdminPage;
