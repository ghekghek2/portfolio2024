import { motion } from "framer-motion";

function ProjectUi({ img, title }) {
  return (
    <section className="p-56  flex">
      <motion.div
        className="  mt-12 z-300"
        initial={{ opacity: 0, translateY: "100px" }}
        whileInView={{ opacity: 1, translateY: "0" }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="font-bold  text-3xl">{title}</h1>
      </motion.div>

      <div>
        <img className="w-[500px] h-[500px]" src={img} alt="" />
      </div>
    </section>
  );
}

export default ProjectUi;
