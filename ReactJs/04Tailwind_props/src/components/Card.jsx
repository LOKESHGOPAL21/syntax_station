import React from "react";

export default function Card() {
  return (
    <div className="h-screen w-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-sm w-full bg-white rounded-xl shadow-md overflow-hidden p-6">
        <div className="flex flex-col items-center">
          {/* Profile Image */}
          <img
            className="w-24 h-24 rounded-full shadow-lg mb-4"
            src="./photo.jpg" // 
            alt="Lokesh Gopal"
          />

          {/* Name */}
          <h2 className="text-xl font-semibold text-gray-900">Lokesh Gopal</h2>

          {/* Roll Number */}
          <p className="text-sm text-gray-600 mt-1">
            <span className="font-medium">Roll No:</span> 22951A6758
          </p>

          {/* Date of Birth */}
          <p className="text-sm text-gray-600">
            <span className="font-medium">DOB:</span> 21 April 2004
          </p>

          {/* Phone Number */}
          <p className="text-sm text-gray-600">
            <span className="font-medium">Phone:</span> +91-9876543210
          </p>
        </div>
      </div>
    </div>
  );
}
