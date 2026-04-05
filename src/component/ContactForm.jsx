import { useState } from "react";

export default function ContactForm({url}) {
  const [form, setForm] = useState({
    name: "",
    address: "",
    phone: "",
    notes: ""
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };


// AKfycbx3dxumHegvlvEGesg5cSPAcSdUYQtbxXNbayHJzqHig-oSewlZGepga6oZQRbKDcdD


  const handleSubmit = async (e) => {
    e.preventDefault();
 
    await fetch(url, {
      method: "POST",
      body: JSON.stringify({
        sheetName : "Contacts",
        data : form
      }),
      headers: {
        "Content-Type": "application/json"
      },
      mode: "no-cors"
    });

    alert("Saved!");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>People Spoken To</h3>

      <input name="name" placeholder="Name" onChange={handleChange} />

      <input name="address" placeholder="Address" onChange={handleChange} />

      <input name="phone" placeholder="Phone" onChange={handleChange} />

      <textarea
        name="notes"
        placeholder="Notes"
        onChange={handleChange}
      />

      <button type="submit">Submit</button>
    </form>
  );
}