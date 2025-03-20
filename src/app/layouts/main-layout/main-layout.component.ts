import { Component } from '@angular/core';
import { SidebarComponent } from "../../pages/sidebar/sidebar.component";

@Component({
    selector: 'app-main-layout',
    imports: [SidebarComponent],
    templateUrl: './main-layout.component.html',
    styleUrl: './main-layout.component.css'
})
export class MainLayoutComponent {

}
