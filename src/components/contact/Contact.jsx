import { useState } from "react";
import "./contact.scss";

export default function Contact() {

  const [reply, setReply] = useState(false)

  const submitEvent = (e) => {
    e.preventDefault();
    setReply(true);

  }
  return ( 
    <div className="contact" id="contact">
      <h2>Contact.</h2>
      <form onSubmit={submitEvent}>
        <input type="text" placeholder="Email"/>
        <textarea  placeholder="Message..."></textarea>
        <button type="submit">Submit</button>
        {reply && <span>Thanks, I'll talk to you soon! :))</span>}
      </form>
    </div>
  )
}
