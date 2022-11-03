import { Component, DoCheck } from '@angular/core';
import { TaskList } from '../../model/task-list';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements DoCheck {

  public taskList: Array<TaskList> = JSON.parse(localStorage.getItem('list') || '[]')

  public isVisible: boolean = true

  constructor() { }

  public ngDoCheck(): void {
    this.setLocalStorage()
  }

  public openModel() {
    this.isVisible = !this.isVisible
  }

  public setEmitTaskList(value: string) {
    this.taskList.push({ task: value, checked: false })
  }

  public deleteItemTaskList(index: number) {
    this.taskList.splice(index, 1)
  }

  public deleteAllTaskList() {
    this.taskList = []
  }

  public validationInput(event: string, index: number) {
    if (!event.length) {
      const confirm = window.confirm('Task está vazia, deseja deletar?')

      if (confirm) {
        this.deleteItemTaskList(index)
      }
    }
  }

  public setLocalStorage() {
    if (this.taskList) {
      this.taskList.sort((first, last) => Number(first.checked) - Number(last.checked))

      localStorage.setItem("list", JSON.stringify(this.taskList))
    }
  }
}