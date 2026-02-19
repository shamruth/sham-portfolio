import React from 'react';
import { motion } from 'framer-motion';

const ProgressBar = ({ value }) => (
  <div className="w-full bg-yellow-200 border-2 border-black h-4">
    <motion.div
      className="bg-pink-500 border-2 border-black h-4 shadow-[2px_2px_0_0_#000]"
      initial={{ width: 0 }}
      animate={{ width: `${value}%` }}
      transition={{ duration: 1 }}
      style={{ width: `${value}%` }}
    />
  </div>
);

export default ProgressBar;
