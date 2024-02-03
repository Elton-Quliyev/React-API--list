// User.js
import React from "react";

export let User = (props) => {
  const { formData, handleFormSubmit, handleInputChange } = props;

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="surname"
          placeholder="Surname"
          value={formData.surname}
          onChange={handleInputChange}
        />
        <br />
        <input
          type="email"
          name="email"
          placeholder="E-mail"
          value={formData.email}
          onChange={handleInputChange}
        />
        <select
          className="custom-select"
          name="city"
          value={formData.city}
          onChange={handleInputChange}
        >
          <option>Baki</option>
          <option>Sumqayit</option>
          <option>Sirvan</option>
        </select>
        <br />
        <textarea
          name="description"
          placeholder="metn daxil edin..."
          value={formData.description}
          onChange={handleInputChange}
        ></textarea>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
