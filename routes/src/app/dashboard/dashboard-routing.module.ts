import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent as HomeDashboardComponent } from "./pages/home/home.component";

const routes: Routes = [
   { path: '', component: HomeDashboardComponent }
]

@NgModule({
   imports: [RouterModule.forChild(routes)],
   exports: [RouterModule]
})
export class DashBoardRoutingModule { }