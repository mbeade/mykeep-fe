import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopBarComponent } from './top-bar/top-bar.component';
import { TodoItemComponent } from './todo-item/todo-item.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { FormsModule } from '@angular/forms';
import { AngularMaterialModule } from '../angular-material/angular-material.module';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AngularMaterialModule,
    FlexLayoutModule
  ],
  declarations: [
    TopBarComponent,
    TodoItemComponent,
    TodoListComponent], // All components/directives/pipes in mnodule has to be declared

  exports: [
    TopBarComponent,
    TodoItemComponent,
    TodoListComponent // Needs to be exported if used by other modules
  ]
})
export class BaseComponentsModule { }
