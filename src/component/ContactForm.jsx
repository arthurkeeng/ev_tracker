import { useState } from "react";

export default function ContactForm({url,isLoading , setIsLoading}) {
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
    setIsLoading(true)
 try {
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

    alert("Submitted!");
    setForm({
    name: "",
    address: "",
    phone: "",
    notes: ""
  });
 } catch (error) {
  alert("An error occurred. Please try again.");
 }finally{
  setIsLoading(false);
 }
  

  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>People Spoken To</h3>

      <input name="name" placeholder="Name" onChange={handleChange} value={form.name}/>

      <input name="address" placeholder="Address" onChange={handleChange} value={form.address} />

      <input name="phone" placeholder="Phone" onChange={handleChange} value={form.phone} />

      <textarea
        name="notes"
        value={form.notes}
        placeholder="Notes"
        onChange={handleChange}
      />

      <button type="submit"
      disabled = {isLoading}
      >{isLoading ? "Submitting..." : "Submit"}</button>
    </form>
  );
}