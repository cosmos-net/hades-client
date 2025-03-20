import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzFlexModule } from 'ng-zorro-antd/flex';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';

import { NzIconModule, NzIconService } from 'ng-zorro-antd/icon';
import {
  HomeOutline,
  BarChartOutline,
  KeyOutline,
  TeamOutline,
  UnorderedListOutline,
  LockOutline,
  UnlockOutline,
  SettingOutline,
  UserOutline,
} from '@ant-design/icons-angular/icons';

@Component({
    selector: 'app-sidebar',
    imports: [
        CommonModule,
        RouterLink,
        RouterOutlet,
        NzIconModule,
        NzLayoutModule,
        NzMenuModule,
        NzAvatarModule,
        NzFlexModule,
        NzBreadCrumbModule,
    ],
    templateUrl: './sidebar.component.html',
    styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  isCollapsed = false;

  menuItems = [
    { path: '/home', icon: 'home', title: 'Home' },
    { path: '/dashboard', icon: 'bar-chart', title: 'Dashboard' },
    { path: '/roles', icon: 'key', title: 'Roles' },
    { path: '/users', icon: 'team', title: 'Users' },
    { path: '/assignments', icon: 'unordered-list', title: 'Assignments' },
    { path: '/permissions', icon: 'lock', title: 'Permissions' },
    { path: '/policies', icon: 'unlock', title: 'Policies' },
  ];

  constructor(private iconService: NzIconService) {
    this.iconService.addIcon(
      HomeOutline,
      BarChartOutline,
      KeyOutline,
      TeamOutline,
      UnorderedListOutline,
      LockOutline,
      UnlockOutline,
      SettingOutline,
      UserOutline
    );
  }
}
