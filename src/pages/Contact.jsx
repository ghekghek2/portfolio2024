import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Input from "../ui/Input";
import Button from "../ui/Button";
import PhMap from "../ui/PhMap";

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
        <div className=" relative w-full h-screen max-h-[1080px] flex flex-col-reverse  md:flex-row md:justify-between justify-center md:gap-0 gap-4 items-center    ">
          <form
            ref={form}
            onSubmit={sendEmail}
            className="w-full  md:basis-4/12  md:p-4 flex flex-col items-start  dark:bg-transparent dark:backdrop-blur-[2px]  "
          >
            <h1 className="text-3xl font-semibold">Drop a line in my inbox</h1>
            <input type="text" name="from_name" hidden value="kevin" readOnly />

            <Input label="Name" type="text" name="to_name" readOnly />

            <Input label="Email" type="email" name="reply_to" readOnly />
            <label>Message</label>
            <textarea
              rows={4}
              name="message"
              className=" w-full border border-slate-400  dark:border-slate-600 bg-slate-100  dark:bg-transparent p-2 rounded-md focus:outline-slate-500"
            />
            {/* <input type="submit" value="Send" /> */}
            <Button
              type="submit"
              className="mt-4 bg-slate-700 dark:bg-slate-900 border-b border-transparent dark:border-b dark:border-cyan-500  text-lg"
            >
              Send
            </Button>
          </form>

          <div className=" relative w-full md:basis-8/12 flex md:justify-center items-center ">
            <div className="text-left md:text-right dark:text-cyan-500 text-lg font-bold block md:absolute left-[10%] top-[20%]">
              <h1 className="">1 4 ° 2 6 ’ 1 0 ″ N, 1 2 0 ° 2 8 ’ 2 2 ″ E</h1>
              <p className="text-xl">Philippines</p>
              <p className="text-sm">Mariveles - Bataan</p>
            </div>
            <PhMap />
          </div>
        </div>
      ) : (
        <div>THanks you</div>
      )}
    </>
  );
}
export default Contact;
