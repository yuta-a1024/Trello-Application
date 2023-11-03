import React from 'react'
import { Task } from './Task'
import { DragDropContext, Droppable } from 'react-beautiful-dnd'

const reorder = (taskList, startIndex, endIndex) => {
  //taskを並び替える(splice関数により削除と追加)
  const remove = taskList.splice(startIndex, 1);
  // console.log(remove);
  taskList.splice(endIndex, 0, remove[0]);
};

export const Tasks = ({ taskList, setTaskList }) => {
  const handleDragEnd = (result) => {
    // console.log(result);

    reorder(taskList, result.source.index, result.destination.index);

    setTaskList(taskList);
  };

  return (
    <div>
      <DragDropContext onDragEnd={handleDragEnd}>
        <Droppable droppableId='droppable'>
          {(provided) => (
          <div 
            {...provided.droppableProps} 
            ref={provided.innerRef}
          >
            {taskList.map((task, index) => (
              <div key={task.id}>
                <Task 
                  index={index}
                  task={task} 
                  taskList={taskList} 
                  setTaskList={setTaskList} 
                />
              </div>
            ))}
            {provided.placeholder}
          </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  )
}
