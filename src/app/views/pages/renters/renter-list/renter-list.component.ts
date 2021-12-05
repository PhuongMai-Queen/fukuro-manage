import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-renter-list',
  templateUrl: './renter-list.component.html',
  styleUrls: ['./renter-list.component.css'],
})
export class RenterListComponent implements OnInit {
  settings = {
    actions: {
      custom: [
        {
          name: 'edit',
          title: `<i class="ti-pencil text-success" title="Edit"></i>`
        },
        {
          name: 'delete',
          title: `<i class="ti-trash text-danger" title="delete"></i>`
        },
      ],
      add: false,
      edit: false,
      delete: false,
      position: 'right',
    },
    columns: {
      id: {
        title: 'STT'
      },
      name: {
        title: 'Họ và tên'
      },
      email: {
        title: 'Email'
      },
      phone: {
        title: 'SĐT'
      },
      address: {
        title: 'Địa chỉ'
      },
      motelName: {
        title: 'Tên nhà trọ'
      },
      roomName: {
        title: 'Tên phòng'
      }
    },
  }

  data = [
    {
      id: 1,
      name: "test Graham",
      username: "Bret",
      email: "test@april.com"
    },
    {
      id: 2,
      name: "test Howell",
      username: "test",
      email: "test@gmail.tv"
    },
    {
      id: 2,
      name: "test Howell",
      username: "test",
      email: "test@gmail.tv"
    },
    {
      id: 2,
      name: "test Howell",
      username: "test",
      email: "test@gmail.tv"
    },
    {
      id: 2,
      name: "test Howell",
      username: "test",
      email: "test@gmail.tv"
    },
    {
      id: 2,
      name: "test Howell",
      username: "test",
      email: "test@gmail.tv"
    },
    {
      id: 2,
      name: "test Howell",
      username: "test",
      email: "test@gmail.tv"
    },
    {
      id: 2,
      name: "test Howell",
      username: "test",
      email: "test@gmail.tv"
    },
    {
      id: 2,
      name: "test Howell",
      username: "test",
      email: "test@gmail.tv"
    },
    {
      id: 2,
      name: "test Howell",
      username: "test",
      email: "test@gmail.tv"
    },
    {
      id: 2,
      name: "test Howell",
      username: "test",
      email: "test@gmail.tv"
    },
    {
      id: 2,
      name: "test Howell",
      username: "test",
      email: "test@gmail.tv"
    },
    {
      id: 2,
      name: "test Howell",
      username: "test",
      email: "test@gmail.tv"
    },
    {
      id: 11,
      name: "testDuBuque",
      username: "test.Stanton",
      email: "test@test.biz"
    }
  ];

  constructor(private _router: Router) { }

  ngOnInit(): void {

  }

  onCustomAction(event: any) {
    if(event.action == 'edit'){
      this._router.navigate(['/renters/edit/'+event.data['id']]);
    }
    if(event.action == 'delete'){
      window.confirm('Bạn có chắn chắn sẽ xoá không?');
    }
  }

}
