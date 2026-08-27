import { GrSend } from "react-icons/gr";

function ThankYou() {
  return (
    <div className="flex flex-col justify-center items-center w-full h-screen gap-6 text-center px-4">
      <div className="flex items-center justify-center w-24 h-24 rounded-full bg-cyan-50 dark:bg-cyan-950 ring-8 ring-cyan-100 dark:ring-cyan-900">
        <GrSend className="text-4xl text-cyan-600 dark:text-cyan-400" />
      </div>

      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-semibold tracking-tight">
          Message Sent!
        </h1>
        <p className="text-slate-500 dark:text-slate-400 text-base max-w-sm">
          Thank you for reaching out. I'll get back to you as soon as possible.
        </p>
      </div>

      <div className="flex flex-col gap-1 text-sm text-slate-400 dark:text-slate-500">
        <span>kevindivinagracia1993@gmail.com</span>
        <span>+63 961 379 4822</span>
      </div>
    </div>
  );
}

export default ThankYou;
