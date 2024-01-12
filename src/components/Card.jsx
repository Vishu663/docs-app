import React from "react";
import { FaRegFileAlt } from "react-icons/fa";
import { LuDownload } from "react-icons/lu";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { motion } from "framer-motion";
function Card({ data, reference }) {
  return (
    <>
      <motion.div
        drag
        dragConstraints={reference}
        whileDrag={{ scale: 1.2 }}
        className="relative flex-shrink-0 w-60 h-72 rounded-[40px] bg-white px-8 py-10 overflow-hidden"
      >
        <FaRegFileAlt />
        <p className="text-sm mt-5 leading-tight font-semibold">{data.desc}</p>
        <div className="footer absolute bottom-0 w-full left-0">
          <div className="flex items-center justify-between py-3 px-8 mb-3">
            <h5>{data.filesize}</h5>
            {data.close ? <IoIosCloseCircleOutline /> : <LuDownload />}
          </div>
          {data.tag.isOpen && (
            <div
              className={`tag w-full py-4 bg-green-400 flex items-center justify-center`}
            >
              <h3 className="text-sm font-semibold">{data.tag.tagTitle}</h3>
            </div>
          )}
        </div>
      </motion.div>
    </>
  );
}

export default Card;
