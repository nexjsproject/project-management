"use client"
import update from "immutability-helper";
import { memo, useCallback, useEffect, useState } from "react";
import { useDrop } from "react-dnd";
import { Card } from "./Card.js";
import { ItemTypes } from "./ItemTypes.js";

export const Container = memo(function Container({
  cards,
  setCards,
  handleRemoveSelect,
  status,
}) {
  const findCard = useCallback(
    (id) => {
      const card = cards.filter((c, i) => `${c.id || i + 1}` === id)[0];
      return {
        card,
        index: cards.indexOf(card),
      };
    },
    [cards]
  );
  const moveCard = useCallback(
    (id, atIndex) => {
      const { card, index } = findCard(id);
      const data = update(cards, {
        $splice: [
          [index, 1],
          [atIndex, 0, {...card}],
        ],
      });
      console.log("status",status)
      console.log("data",data)
      setCards(
        update(cards, {
          $splice: [
            [index, 1],
            [atIndex, 0, {...card}],
          ],
        })
      );
    },
    [findCard, cards, setCards]
  );

  // const [{ isOver }, drop] = useDrop({
  //   accept: ItemTypes.ITEM,
  //   drop: onDrop,
  //   collect: monitor => ({
  //     isOver: !!monitor.isOver(),
  //   }),
  // });

  return (
    <>
      <div
        
        className="media-center-dialog-upload__selection-panel__container"
      >
        {cards &&
          cards.length > 0 &&
          cards.map((card, i) => (
            <Card
              key={card?.id || i + 1}
              card={card}
              idx={`${card?.id || i + 1}`}
             
              moveCard={moveCard}
              findCard={findCard}
              indexId={i}
              handleRemoveSelect={handleRemoveSelect}
              status={status}
            />
          ))}
      </div>
    </>
  );
});
