import axios from "axios";
import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import * as Yup from "yup";
import AdminNavBar from "../adminComponents/AdminNavBar"; // Import the admin navbar

const AdminDashboard = () => {
  const navigate = useNavigate();
  const [selectedFile, setSelectedFile] = useState(null); // Change to null for clarity

  // Check for admin token and role, redirect if not authenticated or not admin
  useEffect(() => {
    const token = localStorage.getItem("token");
    const role = localStorage.getItem("role");

    if (!token || role !== "admin") {
      navigate("/login");
    }
  }, [navigate]);

  // Form validation schema using Yup
  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Pet name is required"),
    age: Yup.number().required("Pet age is required"),
    breed: Yup.string().required("Pet breed is required"),
    description: Yup.string().required("Description is required"),
  });

  // Formik for handling form state and validation
  const formik = useFormik({
    validationSchema,
    initialValues: {
      name: "",
      age: "",
      breed: "",
      description: "",
    },
    onSubmit: async (values, { resetForm }) => {
      const formData = new FormData();
      formData.append("name", values.name);
      formData.append("age", values.age);
      formData.append("breed", values.breed);
      formData.append("description", values.description);
      if (selectedFile) {
        formData.append("image", selectedFile); // Append the file
      }

      try {
        const response = await axios.post(
          "http://localhost:3001/api/addPet",
          formData,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
              "Content-Type": "multipart/form-data", // Set the content type
            },
          }
        );
        toast.success("Pet added successfully!");
        resetForm();
        setSelectedFile(null); // Clear the file input after successful submission
      } catch (error) {
        toast.error("Failed to add pet. Please try again.");
      }
    },
  });

  // Handle file (image) upload
  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedFile(file); // Set the file directly
    }
  };

  return (
    <div>
      <AdminNavBar /> {/* Admin NavBar */}
      <h1>Admin Dashboard</h1>
      <h2>Add New Pet Listing</h2>
      {/* Pet Listing Form */}
      <form onSubmit={formik.handleSubmit}>
        <div>
          <label>Pet Name</label>
          <input
            type="text"
            name="name"
            onChange={formik.handleChange}
            value={formik.values.name}
          />
          {formik.errors.name ? <div>{formik.errors.name}</div> : null}
        </div>

        <div>
          <label>Age</label>
          <input
            type="number"
            name="age"
            onChange={formik.handleChange}
            value={formik.values.age}
          />
          {formik.errors.age ? <div>{formik.errors.age}</div> : null}
        </div>

        <div>
          <label>Breed</label>
          <input
            type="text"
            name="breed"
            onChange={formik.handleChange}
            value={formik.values.breed}
          />
          {formik.errors.breed ? <div>{formik.errors.breed}</div> : null}
        </div>

        <div>
          <label>Description</label>
          <textarea
            name="description"
            onChange={formik.handleChange}
            value={formik.values.description}
          />
          {formik.errors.description ? (
            <div>{formik.errors.description}</div>
          ) : null}
        </div>

        <div>
          <label>Image</label>
          <input type="file" onChange={handleImageChange} />
        </div>

        <button type="submit">Add Pet</button>
      </form>
      <ToastContainer />
    </div>
  );
};

export default AdminDashboard;
