import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './layout/footer/footer.component';
import { HeaderComponent } from './layout/header/header.component';
import { FeaturePanelComponent } from './layout/main-content/feature-panel/feature-panel.component';
import { MainContentComponent } from './layout/main-content/main-content.component';
import { AddTodoComponent } from './layout/main-content/todo-list/add-todo/add-todo.component';
import { TodoListComponent } from './layout/main-content/todo-list/todo-list.component';
import { TodoService } from './layout/main-content/todo-list/todo.service';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    MainContentComponent,
    TodoListComponent,
    FeaturePanelComponent,
    AddTodoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [TodoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
