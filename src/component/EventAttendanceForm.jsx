import { useState } from "react";

export default function EventAttendanceForm({url}) {
  let sheetId = "1hkPwW87v4zjLh7LnArFtCiltjfINNuC9zGMpL9n6r9o"
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    eventName: ""
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
        data : form , sheetName : "Attendance"
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
      <h3>Event Attendance</h3>

      <input
        name="name"
        placeholder="Name"
        onChange={handleChange}
      />

      <input
        name="email"
        placeholder="Email"
        onChange={handleChange}
      />

      <input
        name="phone"
        placeholder="Phone"
        onChange={handleChange}
      />

      <input
        name="eventName"
        placeholder="Event Name"
        onChange={handleChange}
      />

      <button type="submit">Submit</button>
    </form>
  );
}