import React, { useEffect } from "react";
import { ProgressBar } from "react-bootstrap";
import { motion } from "framer-motion";
import useStorage from "../hooks/useStorage";

const ProgressComponent = ({ file, setFile }) => {
  const { url, progress } = useStorage(file);

  useEffect(() => {
    if (url) {
      setFile(null);
    }
  }, [url, setFile]);
  return (
    <motion.div>
      <ProgressBar animated variant="success" now={progress} />
    </motion.div>
  );
};

export default ProgressComponent;
