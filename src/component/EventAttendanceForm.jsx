import { useState } from "react";

export default function EventAttendanceForm({ url, isLoading, setIsLoading }) {
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
    setIsLoading(true)
    try {
      await fetch(url, {
        method: "POST",
        body: JSON.stringify({
          data: form, sheetName: "Attendance"
        }),
        mode: "no-cors",
        headers: {
          "Content-Type": "application/json"
        }
      });
      alert("Submitted!");
      setForm({
        name: "",
        email: "",
        phone: "",
        eventName: ""
      })
    } catch (error) {
      alert("An error occurred. Please try again.");
    } finally {
      setIsLoading(false);
    }


  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Event Attendance</h3>

      <input
        name="name"
        value={form.name}
        placeholder="Name"
        onChange={handleChange}
      />

      <input
        name="email"
        value={form.email}
        placeholder="Email"
        onChange={handleChange}
      />

      <input
        name="phone"
        value={form.phone}
        placeholder="Phone"
        onChange={handleChange}
      />

      <input
        name="eventName"
        value={form.eventName}
        placeholder="Event Name"
        onChange={handleChange}
      />

      <button type="submit"
        disabled={isLoading}
      >{isLoading ? "Submitting..." : "Submit"}</button>
    </form>
  );
}