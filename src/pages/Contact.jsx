import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Input from "../ui/Input";
import Button from "../ui/Button";
import PhMap from "../ui/PhMap";
import ThankYou from "../ui/ThankYou";

function Contact() {
  const [success, setSuccess] = useState(false);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    // Form validation
    if (!validateForm()) return;

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
          setSuccess(true);
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  const validateForm = () => {
    const nameInput = form.current["to_name"];
    const emailInput = form.current["reply_to"];
    const messageInput = form.current["message"];

    // Validate name
    if (!nameInput.value.trim()) {
      alert("Name is required");
      return false;
    }

    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailInput.value)) {
      alert("Please enter a valid email address");
      return false;
    }

    // Validate message
    if (!messageInput.value.trim()) {
      alert("Message is required");
      return false;
    }

    return true;
  };

  return (
    <>
      {!success ? (
        <div className="relative w-full h-[105vh] max-h-[1080px] flex flex-col-reverse  md:flex-row md:justify-between justify-center md:gap-0 gap-4 items-center">
          <form
            ref={form}
            onSubmit={sendEmail}
            className="w-full md:basis-3/6 flex flex-col items-start dark:bg-transparent dark:backdrop-blur-[2px]"
          >
            <h1 className="text-3xl font-semibold mb-2">
              Drop me a line via Email
            </h1>
            <div className="grid grid-cols-2 gap-2 w-full">
              <div className="flex flex-col">
                <Input
                  label="Name"
                  type="text"
                  name="to_name"
                  required
                  readOnly
                />
              </div>
              <div className="flex flex-col">
                <Input
                  label="Email"
                  type="email"
                  name="reply_to"
                  required
                  readOnly
                />
              </div>
            </div>

            <label>Message</label>
            <textarea
              rows={6}
              name="message"
              className="w-full border border-slate-400 dark:border-slate-600 bg-slate-100 dark:bg-transparent p-2 rounded-md focus:outline-slate-500"
              required
            />
            <Button
              type="submit"
              className="mt-4 bg-slate-700 hover:bg-slate-800 dark:bg-slate-900 dark:hover:bg-slate-800 border-b border-transparent dark:border-b dark:border-cyan-500 text-lg"
            >
              Send
            </Button>
          </form>

          <div className="relative w-full md:basis-8/12 flex md:justify-center items-center">
            <div className="text-left md:text-right dark:text-cyan-500 text-lg font-bold block md:absolute left-[2%] top-[20%] z-10">
              <h1 className="">1 4 ° 2 6 ’ 1 0 ″ N, 1 2 0 ° 2 8 ’ 2 2 ″ E</h1>
              <p className="text-xl">Philippines</p>
              <p className="text-sm">Mariveles - Bataan</p>
            </div>
            <PhMap />
          </div>
        </div>
      ) : (
        <ThankYou />
      )}
    </>
  );
}

export default Contact;
