"use client";

import { useState } from "react";
import Column from "./Column";
import TaskDIalog from "./TaskDIalog";
import { useTaskStore } from "@/utils/useStore";
import { DatePicker, Input, Select } from "antd";

const { RangePicker } = DatePicker;
const dateFormat = "YYYY-MM-DD";

export default function Task() {
  const [activeCard, setActiveCard] = useState(null);
  const tasks = useTaskStore((state) => state.tasks);
  const setTasks = useTaskStore((state) => state.setTasks);
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
      <div className="rounded-lg bg-white  shadow-lg p-3 pt-3">
        <div className='flex w-full  flex-wrap justify-between "'>
          <TaskDIalog />
          <div className="flex gap-3 ">
            <div className="   flex ">
              <Input placeholder="Search" />
            </div>
            <RangePicker
              onChange={(dates, dateStrings) => {
                if (dates) {
                  console.log(dates);
                }
              }}
            />
            <Select
              allowClear
              showSearch={true}
              placeholder="Status"
              className="w-[180px] h-[50px]"
              options={[
                {
                  value: "todo",
                  label: "To Do",
                },
                {
                  value: "inProgress",
                  label: "In Progress",
                },

                {
                  value: "done",
                  label: "Done",
                },
              ]}
              onChange={(value, item) => {
                if (item) {
                  console.log(item);
                }
              }}
            />
          </div>
        </div>
      </div>

      <section className="mt-10 flex gap-6 lg:gap-12">
        <Column
          title="Todo"
          status="todo"
          setActiveCard={setActiveCard}
          onDrop={onDrop}
        />
        <Column
          title="In Progress"
          status="inProgress"
          setActiveCard={setActiveCard}
          onDrop={onDrop}
        />
        <Column
          title="Done"
          status="done"
          setActiveCard={setActiveCard}
          onDrop={onDrop}
        />
      </section>
    </>
  );
}
