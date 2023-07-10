import { Component } from '@angular/core';
import { TaskList } from '../../model/task-list';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent {
  public taskList: Array<TaskList> = [
    { task: "Minha nova task 1", checked: true },
    { task: "Minha nova task 2", checked: true },
    { task: "Minha nova task 3", checked: true },
  ]

  public deleteItemTaskList(event: number) {
    this.taskList.splice(event, 1)
  }

  public deleteAllTaskList() {
    const confirm =window.confirm("Desejar deletar tudo?")
    if(confirm)
    this.taskList = []
  }

  public setEmitTaskList(event:string){
    this.taskList.push({task:event, checked:false});


  }
}
