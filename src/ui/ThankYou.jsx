import { GrSend } from "react-icons/gr";

function ThankYou() {
  return (
    <div className=" flex flex-col justify-center items-center  w-full h-screen">
      <GrSend className="text-7xl dark:text-cyan-500" />

      <div className="text-4xl dark:text-cyan-500">
        Your Message Has Been Sent
      </div>

      <div>
        <p className="text-lg">
          Thank you for reaching out! Your email has been sent, and I appreciate
          your initiative. I'll respond promptly.
        </p>
      </div>
    </div>
  );
}

export default ThankYou;
