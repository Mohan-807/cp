import { Component } from '@angular/core';

interface MenuItem {
  icon: string;
  label: string;
  route: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  menuItems: MenuItem[] = [
    { icon: 'home', label: 'Home', route: '/home' },
    { icon: 'store', label: 'Shop', route: '/shop' },
    { icon: 'article', label: 'Blog', route: '/blog' },
    { icon: 'info', label: 'About', route: '/about' },
    { icon: 'phone', label: 'Contact', route: '/contact' }
  ];
}
