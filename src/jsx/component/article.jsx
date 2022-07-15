import React from "react";


const Article = (props) =>{
  return (
    <div className="layout-center">
      <img src={props.logo} alt="react-logo" className="img"/>
      <h2>{props.title}</h2>
      <span>{props.content}</span>
    </div>
  );
};

export default Article;