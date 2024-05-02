"use client"

import { useCallback, useEffect, useMemo } from "react";
import Column from "./Column"
import TaskDIalog from "./TaskDIalog"
import update from "immutability-helper";
import { DndProvider, useDrop } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { useTaskStore } from "@/utils/useStore";
import { ItemTypes } from "@/utils/DragDrop/ItemTypes";

export default function Task() {



  return (
   <>
   <TaskDIalog/>



    <section className='mt-10 flex gap-6 lg:gap-12'   >

        <Column title='Todo' status='todo'   />
        <Column title='In Progress' status='inProgress' />
        <Column title='Done' status='done' />
      </section>

    </>
  )
}
