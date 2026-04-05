import { useState } from "react";

export default function OtherEventForm({ url, isLoading, setIsLoading }) {
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
    setIsLoading(true)
    try {
      await fetch(url, {
        method: "POST",
        body: JSON.stringify({
          data: form, sheetName: "OtherEvent"
        }),
        mode: "no-cors",
        headers: {
          "Content-Type": "application/json"
        }
      });
      setForm({
        title: "",
        date: "",
        description: ""
      });
    } catch (error) {
      alert("An error occurred. Please try again.");
    }
    finally {
      setIsLoading(false);
    }

  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Other Event</h3>

      <input
      value={form.title}
        name="title"
        placeholder="Event Title"
        onChange={handleChange}
      />

      <input
        type="date"
        value={form.date}
        name="date"
        onChange={handleChange}
      />

      <textarea
        name="description"
        value={form.description}
        placeholder="Description"
        onChange={handleChange}
      />

      <button type="submit"
        disabled={isLoading}

      >{isLoading ? "Submitting..." : "Submit"}</button>
    </form>
  );
}