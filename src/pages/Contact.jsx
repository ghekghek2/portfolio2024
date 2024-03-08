import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
  const [success, setSucess] = useState(false);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_trmlv1f",
        "template_tlrmmla",
        form.current,
        "fLxJpCW27Z9KDpxe6"
      )
      .then(
        () => {
          console.log("SUCCESS!");
          setSucess(() => setSucess(!success));
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <>
      {!success ? (
        <form ref={form} onSubmit={sendEmail}>
          <label>Name</label>
          <input type="text" name="from_name" hidden value={"kevin"} />
          <input type="text" name="to_name" />
          <label>Email</label>
          <input type="email" name="reply_to" />
          <label>Message</label>
          <textarea name="message" />
          <input type="submit" value="Send" />
        </form>
      ) : (
        <div>THanks you</div>
      )}
    </>
  );
}
export default Contact;
