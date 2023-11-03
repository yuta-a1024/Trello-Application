import React from 'react'
import { v4 as uuid } from 'uuid';

export const TaskAddInput = ({ inputText, setInputText, taskList, setTaskList }) => {
  const handleSubmit = (e) => {
    const taskId = uuid();

    e.preventDefault();
    // console.log(e);
    if(inputText === "") {
      return;
    }
    //カードを追加
      setTaskList([...taskList, 
        {
          //uuidというライブラリでuniqueIdを作成
          id: taskId,
          draggableId: `task-${taskId}`,
          text: inputText,
        },
      ]);
    // console.log(...taskList);
    // console.log(inputText);
    setInputText("");
  };

  const handleChange = (e) => {
    setInputText(e.target.value);
    // console.log(e.target.value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          placeholder='add a task' 
          className='taskAddInput' 
          onChange={handleChange} 
          value={inputText}
        />
      </form>
    </div>
  )
}
