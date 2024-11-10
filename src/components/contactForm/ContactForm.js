import React from "react";

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit
}) => {
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input onChange={({ target }) => setName(target.value)} value={name} placeholder="Name *" type="text" required="true"/>
        <input onChange={({ target }) => setPhone(target.value)} value={phone} placeholder="Phone number *" type="tel" required="true"/>
        <input onChange={({ target }) => setEmail(target.value)} value={email} placeholder="Email *" type="email" required="true"/>
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

