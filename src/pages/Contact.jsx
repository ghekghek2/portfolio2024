import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Input from "../ui/Input";
import Button from "../ui/Button";

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
        <form
          ref={form}
          onSubmit={sendEmail}
          className="pl-2 md:p-4 flex flex-col items-start max-w-lg bg-slate-100"
        >
          <h1 className="text-3xl font-semibold">Drop a line in my inbox</h1>
          <input type="text" name="from_name" hidden value="kevin" readOnly />

          <Input label="Name" type="text" name="to_name" readOnly />

          <Input label="Email" type="email" name="reply_to" readOnly />
          <label>Message</label>
          <textarea
            rows={4}
            name="message"
            className=" w-full border border-slate-400  bg-slate-100 p-2 rounded-md focus:outline-slate-500"
          />
          {/* <input type="submit" value="Send" /> */}
          <Button type="submit" className="bg-slate-800 mt-2">
            Send
          </Button>
        </form>
      ) : (
        <div>THanks you</div>
      )}
    </>
  );
}
export default Contact;
