"use client"

import { useState } from "react";
import Column from "./Column"
import TaskDIalog from "./TaskDIalog"
import { useTaskStore } from "@/utils/useStore";

export default function Task() {
  const [activeCard, setActiveCard] = useState(null);
  const tasks = useTaskStore(state => state.tasks)
  const setTasks = useTaskStore(state => state.setTasks)
  const onDrop = (status, position) => {
    if (activeCard == null || activeCard === undefined) return;
    const taskToMove = tasks[activeCard];
    const updateTasks = tasks.filter((task, index) => index !== activeCard);
    updateTasks.splice(position, 0, {
      ...taskToMove,
      status: status,
    });
    setTasks(updateTasks);
  };


  return (
   <>
   <TaskDIalog/>



    <section className='mt-10 flex gap-6 lg:gap-12'   >

        <Column title='Todo' status='todo' setActiveCard={setActiveCard}
          onDrop={onDrop}   />
        <Column title='In Progress' status='inProgress' setActiveCard={setActiveCard}
          onDrop={onDrop} />
        <Column title='Done' status='done' setActiveCard={setActiveCard}
          onDrop={onDrop} />
      </section>

    </>
  )
}
