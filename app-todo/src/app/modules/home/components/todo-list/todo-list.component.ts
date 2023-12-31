import { Component } from '@angular/core';
import { TaskList } from '../../model/task-list';
import { DoCheck } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements DoCheck {
  public taskList: Array<TaskList> = JSON.parse(localStorage.getItem("list") || "[]")

  ngDoCheck() {
    this.setLocalStorage();
  }
  public setLocalStorage() {
    this.taskList.sort((first, last) =>
      Number(first.checked) - Number(last.checked))
    localStorage.setItem("list", JSON.stringify(this.taskList))
  }

  public deleteItemTaskList(event: number) {
    this.taskList.splice(event, 1)
  }

  public deleteAllTaskList() {
    const confirm = window.confirm("Desejar deletar tudo?")
    if (confirm)
      this.taskList = []
  }

  public setEmitTaskList(event: string) {
    this.taskList.push({ task: event, checked: false });

  }

  public validationInput(event: string, index: number) {
    if (!event.length) {
      const confirm = window.confirm("Deletar task Vazia?");
      if (confirm) {
        this.deleteItemTaskList(index)
      }
    }

  }
}
