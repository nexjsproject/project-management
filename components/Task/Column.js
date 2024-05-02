'use client'

import { useTaskStore } from "@/utils/useStore"
import TaskItem from "./TaskItem"
import { useEffect, useMemo } from "react"
import DragDrop from "@/utils/DragDrop"
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
export default function Column({
    title,
    status
  }) {
    const tasks = useTaskStore(state => state.tasks)
    const filteredTasks = useMemo(
      () => tasks.filter(task => task.status === status),
      [tasks, status]
    )
    console.log(tasks)
 
  const removeTask = useTaskStore(state => state.removeTask)
    const updateTask = useTaskStore(state => state.updateTask)
    const dragTask = useTaskStore(state => state.dragTask)
    const updateTaskPosition = useTaskStore(state => state.updateTaskPosition)
  
    const draggedTask = useTaskStore(state => state.draggedTask)
  
    useEffect(() => {
      useTaskStore.persist.rehydrate()
    }, [])
  
    const handleDrop = () => {
      if (!draggedTask) return
      updateTask(draggedTask, status)
      dragTask(null)
    }
  
    return (
      <section className='h-[600px] flex-1'>
        <h2 className='ml-1 font-serif text-2xl font-semibold'>{title}</h2>
  
        <div
          className='mt-3.5 h-full w-full rounded-xl bg-gray-700/50 p-4'
          onDrop={handleDrop}
          onDragOver={e => e.preventDefault()}
        >
          <div className='flex flex-col gap-4'>
            {/* {filteredTasks.map(task => (
              <TaskItem key={task.id} {...task} />
            ))} */}
               <DndProvider backend={HTML5Backend}>

              
            <DragDrop
            status={status}
           
              cards={filteredTasks}
              setCards={updateTaskPosition}
              handleRemoveSelect={removeTask}
            />
   </DndProvider>
            {filteredTasks.length === 0 && status === 'TODO' && (
              <div className='mt-8 text-center text-sm text-gray-500'>
                <p>Create a new task</p>
              </div>
            )}
  
            {tasks.length && filteredTasks.length === 0 && status !== 'TODO' ? (
              <div className='mt-8 text-center text-sm text-gray-500'>
                <p>Drag your tasks here</p>
              </div>
            ) : null}
          </div>
        </div>
      </section>
    )
}
