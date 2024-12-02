import React, { useState } from "react";
import { useEffect } from "react";
import "../style/form.css";
function Form({ setUsers, users, updateUser, setUpdateUser }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    telephone: "",
    gender: "",
    message: "",
  });

  useEffect(() => {
    // Populate the form when an update is initiated
    if (updateUser) {
      setFormData(updateUser);
    }
  }, [updateUser]);

  function handleValue(e) {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (updateUser) {
      // Update existing user
      const updatedUsers = users.map((user) =>
        user.id === updateUser.id ? { ...formData, id: updateUser.id } : user
      );
      setUsers(updatedUsers);
      setUpdateUser(null); // Reset update state
    } else {
      // Add new user
      const newFormData = { ...formData, id: Date.now() };
      setUsers([...users, newFormData]);
    }

    // Reset form
    setFormData({
      name: "",
      email: "",
      telephone: "",
      gender: "",
      message: "",
    });
  }

  return (
    <div id="container">
      <h1>{updateUser ? "• Update User •" : "• Add User •"}</h1>
      <div className="underline"></div>
      <div className="icon_wrapper">
        <svg className="icon" viewBox="0 0 145.192 145.192">
          {/* SVG Path Here */}
        </svg>
      </div>
      <form id="contact_form" onSubmit={handleSubmit}>
        <div className="name">
          <label htmlFor="name" />
          <input
            type="text"
            placeholder="Name..."
            name="name"
            id="name_input"
            required
            value={formData.name}
            onChange={handleValue}
          />
        </div>
        <div className="email">
          <label htmlFor="email" />
          <input
            type="email"
            placeholder="E-mail"
            name="email"
            id="email_input"
            required
            value={formData.email}
            onChange={handleValue}
          />
        </div>
        <div className="telephone">
          <label htmlFor="telephone" />
          <input
            type="text"
            placeholder="Contact number"
            name="telephone"
            id="telephone_input"
            required
            value={formData.telephone}
            onChange={handleValue}
          />
        </div>
        <div className="subject">
          <label htmlFor="subject" />
          <select
            name="gender"
            id="subject_input"
            value={formData.gender}
            onChange={handleValue}
            required
          >
            <option>Gender</option>
            <option value="Male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>
        <div className="message">
          <label htmlFor="message" />
          <textarea
            name="message"
            placeholder="I'd like to chat about"
            id="message_input"
            cols={30}
            rows={5}
            required
            value={formData.message}
            onChange={handleValue}
          />
        </div>
        <div className="submit">
          <input
            type="submit"
            value={updateUser ? "Update" : "Send Message"}
            id="form_button"
          />
        </div>
      </form>
    </div>
  );
}

export default Form;
