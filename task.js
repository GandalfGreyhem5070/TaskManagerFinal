const start = `TASK MANAGER
What would you like to do:


"NEW" - Add A New Task
"TASKS" - Display All Tasks
"REMOVE" - Remove A Task
"CLOSE" - Close The Task Manager
`;

const tasks=[`Charge MacBook`, `Master JavaScript`, `Throw JavaScript Into A Dumpster Fire!`];

let viewTasks= "";

let newTask;

let num;

let removed;

let userInput=prompt(start);

while (userInput.toUpperCase()!== "CLOSE"){
  if (userInput.toUpperCase()==="TASKS"){
    for(task of tasks){
      viewTasks=viewTasks+`${task}\n`
    }
    alert(viewTasks);
    viewTasks="";
  }else if(userInput.toUpperCase()==="NEW"){
    newTask=prompt(`Please enter the new task:`);
    while(true){
      if(newTask===""){
        newTask=prompt(`Please enter the new task:`);
      }else{
        break;
      }
    }
    alert(`${newTask} has been added!`);
    tasks.push(newTask);
  }else if(userInput.toUpperCase()==="REMOVE"){
    while(true){
      for(i = 0; i < tasks.length; i++){
        viewTasks=viewTasks+`${i + 1}: ${tasks[i]}\n`;
      }
      num=prompt(`Please enter the number of the task you would like to remove:\n${viewTasks}`)-1;
      if (num >= 0 && num < tasks.length) {
        removed =tasks.splice(num, 1);
        alert(`${removed[0]} has been removed`);
        viewTasks = "";
        break;
      }else{
        alert(`NOPE...Try again!`);
        viewTasks= "";
      }
    }
  }
  userInput=prompt(start);
}
alert(`Thank you for using Task Manager!`);