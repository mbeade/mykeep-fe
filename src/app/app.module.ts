import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { BaseComponentsModule } from './base-components/base-components.module';
import { HttpClientModule } from '@angular/common/http';
import { TodoService } from './services/todo.service';
import { TodoItemComponent } from './base-components/todo-item/todo-item.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AngularMaterialModule } from './angular-material/angular-material.module';
import { FormsModule } from '@angular/forms';
import { UserService } from './services/user.service';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BaseComponentsModule,
    HttpClientModule,
    FlexLayoutModule,
    AngularMaterialModule
  ],
  providers: [
    TodoService,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
