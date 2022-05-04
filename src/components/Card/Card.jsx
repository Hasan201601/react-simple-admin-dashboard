import { AnimateSharedLayout } from "framer-motion";
import React, { useState } from "react";
import "./Card.css";
import CompactCard from "./CompactCard/CompactCard";
import ExpandedCard from "./ExpandedCard/ExpandedCard";

const Card = (props) => {
  const [expanded, setExpanded] = useState(false);
  return (
    <AnimateSharedLayout>
      {expanded ? (
        <ExpandedCard param={props} setExpanded={() => setExpanded(false)} />
      ) : (
        <CompactCard param={props} setExpanded={() => setExpanded(true)} />
      )}
    </AnimateSharedLayout>
  );
};

export default Card;
