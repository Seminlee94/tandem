import React from "react";
import Button from "react-bootstrap/Button";

function MoreButton(props){

  const clickFunction = () => {
    props.moreItems();
    props.changeQuestionArray(props.card.id)
  }

  return (
    <Button
      onClick={()=>clickFunction()}
      style={{
        border: 0,
        alignSelf: "center",
        background: "white"
      }}
    >
      {props.children}
    </Button>
  );
}


export default MoreButton;
