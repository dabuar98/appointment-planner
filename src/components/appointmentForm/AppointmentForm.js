import React from "react";
import ContactPicker from "../contactPicker/ContactPicker";

const getTodayString = () => {
  const [month, day, year] = new Date()
    .toLocaleDateString("en-US")
    .split("/");
  return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
};

export const AppointmentForm = ({
  contacts,
  name,
  setName,
  contact,
  setContact,
  date,
  setDate,
  time,
  setTime,
  handleSubmit
}) => {

  return (
    <>
      <form onSubmit={handleSubmit}> 
        <input onChange={({ target }) => setName(target.value)} value={name} placeholder="Title *" type="text" required/>
        <label for="appointment-date">Choose a date:</label>
        <input onChange={({ target }) => setDate(target.value)} value={date} name="appointment-date" type="date" required min={getTodayString}/>
        <label for="appointment-time">Choose a time:</label>
        <input onChange={({ target }) => setTime(target.value)} value={time} name="appointment-time" type="time" required/>
        <ContactPicker contacts={contacts}/>
        <button type="submit">Submit</button>
      </form>
    </>
  );
};
