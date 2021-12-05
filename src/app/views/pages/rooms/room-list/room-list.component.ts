import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import { Ng2SmartTableModule, LocalDataSource } from 'ng2-smart-table';

@Component({
  selector: 'app-room-list',
  templateUrl: './room-list.component.html',
  styleUrls: ['./room-list.component.css'],
})
export class RoomListComponent implements OnInit {
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
        title: 'Tên phòng trọ'
      },
      price: {
        title: 'Giá phòng'
      },
      area: {
        title: 'Diện tích'
      },
      amountPeople: {
        title: 'Số người phù hợp'
      },
      renterName: {
        title: 'Tên người thuê'
      },
      endDate: {
        title: 'Ngày phòng sẽ trống'
      }
    },
  }

  data = [
    {
      id: 1,
      name: "test Graham",
      renterName: "Bret",
      email: "test@april.com"
    },
    {
      id: 2,
      name: "test Howell",
      renterName: "test",
      email: "test@gmail.tv"
    },
    {
      id: 2,
      name: "test Howell",
      renterName: "test",
      email: "test@gmail.tv"
    },
    {
      id: 2,
      name: "test Howell",
      renterName: "test",
      email: "test@gmail.tv"
    },
    {
      id: 2,
      name: "test Howell",
      renterName: "test",
      email: "test@gmail.tv"
    },
    {
      id: 2,
      name: "test Howell",
      renterName: "test",
      email: "test@gmail.tv"
    },
    {
      id: 2,
      name: "test Howell",
      renterName: "test",
      email: "test@gmail.tv"
    },
    {
      id: 2,
      name: "test Howell",
      renterName: "test",
      email: "test@gmail.tv"
    },
    {
      id: 2,
      name: "test Howell",
      renterName: "test",
      email: "test@gmail.tv"
    },
    {
      id: 2,
      name: "test Howell",
      renterName: "test",
      email: "test@gmail.tv"
    },
    {
      id: 2,
      name: "test Howell",
      renterName: "test",
      email: "test@gmail.tv"
    },
    {
      id: 2,
      name: "test Howell",
      renterName: "test",
      email: "test@gmail.tv"
    },
    {
      id: 2,
      name: "test Howell",
      renterName: "test",
      email: "test@gmail.tv"
    },
    {
      id: 11,
      name: "testDuBuque",
      renterName: "test.Stanton",
      email: "test@test.biz"
    }
  ];

  source: LocalDataSource;

  constructor(private _router: Router) {
    this.source = new LocalDataSource(this.data);
  }

  ngOnInit(): void {

  }

  onCustomAction(event: any) {
    if(event.action == 'edit'){
      this._router.navigate(['/rooms/edit/'+event.data['id']]);
    }
    if(event.action == 'delete'){
      window.confirm('Bạn có chắn chắn sẽ xoá không?');
    }
  }
}
