"use client"
import { memo } from "react";
import { DragPreviewImage, useDrag, useDrop } from "react-dnd";
import { ItemTypes } from "./ItemTypes.js";
import { CloseOutlined } from '@ant-design/icons';
import TaskItem from "@/components/Task/TaskItem.js";

const style = {
  cursor: "move",
  display: "flex",
};
export const Card = memo(function Card({
  card,
  idx,
  moveCard,
  findCard,
  indexId,
  handleRemoveSelect,
  status
}) {
  const originalIndex = findCard(idx).index;

  const [{ isDragging }, drag, preview] = useDrag(
    () => ({
      type: ItemTypes.CARD,
      item: { idx, originalIndex },
      collect: (monitor) => ({
        isDragging: monitor.isDragging(),
      }),
      end: (item, monitor) => {
        const { idx: droppedId, originalIndex } = item;
        const didDrop = monitor.didDrop();
        if (!didDrop) {
          moveCard(droppedId, originalIndex);
        }
      },
    }),
    [idx, originalIndex, moveCard],
  );
  const [, drop] = useDrop(
    () => ({
      accept: ItemTypes.CARD,
      hover({ idx: draggedId }) {
        if (draggedId !== idx) {
          const { index: overIndex } = findCard(idx);
          moveCard(draggedId, overIndex);
        }
      },
    }),
    [findCard, moveCard],
  );
  const opacity = isDragging ? 0 : 1;

  return (
    <div ref={(node) => drag(drop(node))} style={{ ...style, opacity }}>
      <div className="dragImageItem">
         <TaskItem  {...card} />
        <span
          className="media-center-dialog-upload__selection-panel__item draggable-true "
          draggable="true"
        >
          <div className="media-center-icon">
            <CloseOutlined 
              onClick={() => handleRemoveSelect(card.id)}
            />
          </div>

        </span>
      </div>
    </div>
  );
});
