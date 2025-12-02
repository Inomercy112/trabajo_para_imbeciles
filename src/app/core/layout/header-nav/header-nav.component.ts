import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { Output, EventEmitter } from "@angular/core";

@Component({
    selector: 'app-header-nav',
    imports: [CommonModule, MatToolbarModule,MatButtonModule, MatIconModule],
    templateUrl: './header-nav.component.html',
    styleUrls: ['./header-nav.component.css']
})
export class HeaderNavComponent {

    @Output() toggleSidenav = new EventEmitter<void>();

    onMenuClick() {
        this.toggleSidenav.emit();
    }
}