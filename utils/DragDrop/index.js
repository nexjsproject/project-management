"use client"
import React, { useState } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { Container } from "./Container";
export default function DragDrop({
  cards,
  setCards,
  handleRemoveSelect,
  status,
}) {
  return (
    <div className="dargAreaApp">
   
        <Container
      
        status={status}
          cards={cards}
          setCards={setCards}
          handleRemoveSelect={handleRemoveSelect}
        />
  
    </div>
  );
}
