import { useState } from "react";
import "./App.css";

import EventAttendanceForm from "./component/EventAttendanceForm";
import ContactForm from "./component/ContactForm";
import OtherEventForm from "./component/OtherEventForm";

function App() {
  let url =  "https://script.google.com/macros/s/AKfycbxrA-xDkcCO3E74m0vhbZJA6DCIa-yanSslkNqiP69BhkW3yYdzWGVofmhUN3BJQ19s/exec"
  const [activeForm, setActiveForm] = useState("event");
  const [isLoading , setIsLoading] = useState(false)

  return (
    <div className="container">

      <h2>Event Tracker</h2>

      <div className="tabs">
        <button
          className={activeForm === "event" ? "active" : ""}
          onClick={() => setActiveForm("event")}
        >
          Attendance
        </button>

        <button
          className={activeForm === "contact" ? "active" : ""}
          onClick={() => setActiveForm("contact")}
        >
          Contacts
        </button>

        <button
          className={activeForm === "other" ? "active" : ""}
          onClick={() => setActiveForm("other")}
        >
          Other Event
        </button>
      </div>

      {activeForm === "event" && <EventAttendanceForm url = {url} isLoading = {isLoading} setIsLoading = {setIsLoading} />}
      {activeForm === "contact" && <ContactForm url = {url} isLoading = {isLoading} setIsLoading = {setIsLoading}/>}
      {activeForm === "other" && <OtherEventForm url = {url} isLoading = {isLoading} setIsLoading = {setIsLoading}/>}

    </div>
  );
}

export default App;