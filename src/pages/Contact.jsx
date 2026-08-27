import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Input from "../ui/Input";
import Button from "../ui/Button";
import PhMap from "../ui/PhMap";
import ThankYou from "../ui/ThankYou";

function Contact() {
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    setProgress(0);

    emailjs.sendForm(
      "service_trmlv1f",
      "template_tlrmmla",
      form.current,
      "fLxJpCW27Z9KDpxe6",
    );

    let current = 0;
    const interval = setInterval(() => {
      current += 2;
      setProgress(current);
      if (current >= 100) {
        clearInterval(interval);
        setLoading(false);
        setSuccess(true);
      }
    }, 40);
  };

  return (
    <>
      {!success ? (
        <div className="relative w-full h-[105vh] max-h-[1080px] flex flex-col-reverse md:flex-row md:justify-between justify-center md:gap-0 gap-4 items-center">
          <form
            ref={form}
            onSubmit={sendEmail}
            className="w-full md:basis-3/6 flex flex-col items-start dark:bg-transparent dark:backdrop-blur-[2px]"
          >
            <div className="mb-6 flex flex-col gap-3">
              <div className="flex flex-col gap-0.5">
                <span className="text-xs font-semibold uppercase tracking-widest text-slate-400 dark:text-slate-500">
                  Email
                </span>
                <a
                  href="mailto:kevindivinagracia1993@gmail.com"
                  className="text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
                >
                  kevindivinagracia1993@gmail.com
                </a>
              </div>
              <div className="flex flex-col gap-0.5">
                <span className="text-xs font-semibold uppercase tracking-widest text-slate-400 dark:text-slate-500">
                  Mobile
                </span>
                <a
                  href="tel:+639613794822"
                  className="text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
                >
                  0961 379 4822
                </a>
              </div>
            </div>

            <h1 className="text-3xl font-semibold mb-2">
              Drop me a line via Email
            </h1>

            <div className="grid grid-cols-2 gap-2 w-full">
              <div className="flex flex-col">
                <Input label="Name" type="text" name="to_name" />
              </div>
              <div className="flex flex-col">
                <Input label="Email" type="email" name="reply_to" />
              </div>
            </div>

            <label>Message</label>
            <textarea
              rows={6}
              name="message"
              className="w-full border border-slate-400 dark:border-slate-600 bg-slate-100 dark:bg-transparent p-2 rounded-md focus:outline-slate-500"
            />

            {loading ? (
              <div className="mt-4 w-full flex flex-col gap-2">
                <div className="flex justify-between text-xs text-slate-400 dark:text-slate-500">
                  <span>Sending...</span>
                  <span>{progress}%</span>
                </div>
                <div className="w-full h-1.5 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-cyan-500 dark:bg-cyan-400 rounded-full transition-all duration-75"
                    style={{ width: `${progress}%` }}
                  />
                </div>
              </div>
            ) : (
              <Button
                type="submit"
                className="mt-4 bg-slate-700 hover:bg-slate-800 dark:bg-slate-900 dark:hover:bg-slate-800 border-b border-transparent dark:border-b dark:border-cyan-500 text-lg"
              >
                Send
              </Button>
            )}
          </form>

          <div className="relative w-full md:basis-8/12 flex md:justify-center items-center">
            <div className="text-left md:text-right dark:text-cyan-500 text-lg font-bold block md:absolute left-[2%] top-[20%] z-10">
              <h1 className="">1 4 ° 2 6 ' 1 0 ″ N, 1 2 0 ° 2 8 ' 2 2 ″ E</h1>
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
