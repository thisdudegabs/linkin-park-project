import React from "react";

interface HelmetProps {
  title: string;
  children: React.ReactNode;
}

const Helmet = (props: HelmetProps) => {
  document.title = "Linkin Park " + props.title;
  return <div className="w-100">{props.children}</div>;
};

export default Helmet;
