import React from "react";

export const ContactPicker = ({ contacts, setContact }) => {
  return (
    <>
      <select onChange={({ target }) => setContact(target.value)}>
        {/* Default option */}
        <option value="">No Contact Selected</option>

        {/* Dynamically render contact options */}
        {contacts.map((contact, index) => (
          <option key={index} value={contact.name}>
            {contact.name}
          </option>
        ))}
      </select>
    </>
  );
};

export default ContactPicker;
