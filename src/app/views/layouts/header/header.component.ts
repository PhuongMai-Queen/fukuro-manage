import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { CustomersService } from 'src/app/services/customers.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  name : string | undefined;
  avatar : string | undefined;
  username : string | undefined;
  currentUser?: any;
  constructor(
    public auth: AuthService,
    private customSer: CustomersService
  ) {}

  ngOnInit(): void {
    const id = localStorage.getItem('currentUser');

    if (id) {
      this.getById(id);
    }
    this.customSer.profileImageUpdate$.subscribe((profileImage) => this.avatar = profileImage);
    this.customSer.profileName$.subscribe((profileName) => this.name = profileName);
    this.customSer.profileUsername$.subscribe((profileUsername) => this.username = profileUsername);
  }

  getById(id: string): void {
    this.customSer.get(id).subscribe((res) => {
      this.avatar = res['avatar'];
      this.name = res['firstName']+' '+res['lastName'];
      this.username = res['username'];
    });
  }
}
