import React, { useState } from "react";
import styled from "styled-components";
import { Button, Modal, ModalHeader, ModalBody, Progress } from "reactstrap";

const Card = props => {
  const { className } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  const NewDiv = styled.div`
    width: 10%;
    margin: auto;
  `;

  const NewButton = styled.button`
    width: 100%;
    background-color: red;
    opacity: 0.5;
    border: 5px solid black;
    border-radius: 20%;
  `;

  return (
    <NewDiv className="card">
      <NewButton color="success" onClick={toggle}>
        <h1>{props.name}</h1>
      </NewButton>

      <Modal
        style={{ backgroundColor: "white", borderColor: "black" }}
        isOpen={modal}
        toggle={toggle}
        className={className}
      >
        <ModalHeader toggle={toggle}>
          <h1>{props.name}</h1>
        </ModalHeader>
        <ModalBody background="white" color="white">
          <p>Height: {props.height}</p>
          <p>Mass: {props.mass}</p>
          <p>Skills:</p>
          <div>
            <div className="text-center">Fighting Ability: 7.2%</div>
            <Progress color="success" value="7.2" />
            <div className="text-center">Speed Ability: 19.8%</div>
            <Progress color="warning" value="19.8" />
            <div className="text-center">Swimming Ability: 70.2%</div>
            <Progress color="success" value={70.2} />
          </div>
        </ModalBody>
      </Modal>
    </NewDiv>
  );
};

export default Card;
