import React, { useState } from "react";
import { useDispatch } from "react-redux";
import "./CreatePostModal.css";

export default function CreatePostModal({ onClose }) {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [errors, setErrors] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors([]);
    // dispatch action to create post here
    onClose(); // close modal after submitting form
  };

  return (
    <div className="modal-container">
      <div className="modal-content">
        <h1>Create a Post</h1>
        <form onSubmit={handleSubmit}>
          <ul>
            {errors.map((error) => (
              <li key={error}>{error}</li>
            ))}
          </ul>
          <label>
            Title
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </label>
          <label>
            Body
            <textarea
              value={body}
              onChange={(e) => setBody(e.target.value)}
              required
            />
          </label>
          <button type="submit">Post</button>
          <button type="button" onClick={onClose}>
            Cancel
          </button>
        </form>
      </div>
    </div>
  );
}
