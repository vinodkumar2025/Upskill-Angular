import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { BrowserModule } from "@angular/platform-browser";
import { SharedModule } from "./shared/shared.module";
import { UserComponent } from "./user/user.component";
import { TasksModule } from "./tasks/tasks.module";
import { HeaderComponent } from "./header/header.conponent";

@NgModule({
    declarations: [AppComponent,UserComponent,HeaderComponent],
    bootstrap: [AppComponent],
    imports: [BrowserModule,SharedModule,TasksModule],
})
export class AppModule{

}