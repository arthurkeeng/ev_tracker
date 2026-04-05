import { useState } from "react";

export default function OtherEventForm({url}) {
  const [form, setForm] = useState({
    title: "",
    date: "",
    description: ""
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await fetch(url, {
      method: "POST",
      body: JSON.stringify({
        data : form , sheetName : "OtherEvent"
      }),
      mode: "no-cors",
      headers: {
        "Content-Type": "application/json"
      }
    });

    alert("Submitted!");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Other Event</h3>

      <input
        name="title"
        placeholder="Event Title"
        onChange={handleChange}
      />

      <input
        type="date"
        name="date"
        onChange={handleChange}
      />

      <textarea
        name="description"
        placeholder="Description"
        onChange={handleChange}
      />

      <button type="submit">Submit</button>
    </form>
  );
}