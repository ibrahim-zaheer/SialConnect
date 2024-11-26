import React, { useState } from "react";
import axios from "axios";

const ProfilePictureUpdate = () => {
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState("");
  const [preview, setPreview] = useState(null);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);

    // Show a preview of the selected image
    const reader = new FileReader();
    reader.onloadend = () => setPreview(reader.result);
    reader.readAsDataURL(selectedFile);
  };

  const handleUpload = async () => {
    if (!file) {
      setMessage("Please select a file.");
      return;
    }

    const formData = new FormData();
    formData.append("image", file);

    try {
      const { data } = await axios.put("/api/auth/profile-picture", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${localStorage.getItem("token")}`, // Assuming JWT token is stored in localStorage
        },
      });

      setMessage(data.message);
    } catch (error) {
      setMessage("Error uploading profile picture.");
    }
  };

  return (
    <div>
      <h3>Update Profile Picture</h3>
      <input type="file" accept="image/*" onChange={handleFileChange} />
      {preview && <img src={preview} alt="Preview" style={{ width: "150px", borderRadius: "50%" }} />}
      <button onClick={handleUpload}>Upload</button>
      {message && <p>{message}</p>}
    </div>
  );
};

export default ProfilePictureUpdate;
