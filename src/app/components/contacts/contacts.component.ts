import { Component, OnInit } from '@angular/core';
import { GetApiService } from 'src/app/get-api.service';
import { ModalService } from '../_modal';


@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})


export class ContactsComponent implements OnInit {

  contacts:any = [];
  tasks:any = [];
  userId:number = 0;
  //selectedUser: Number = 0;
  constructor(private getapi : GetApiService, private modalService : ModalService) { }
  ngOnInit() {
    //get the user data and store in contacts
    this.getapi.getContact().subscribe((data) => {
      console.log(data);
      this.contacts = data;
    });
    //get the todos data and store in tasks
    this.getapi.getTask().subscribe((data) => {
      console.log(data);
      this.tasks = data;
    });
    
  }
  //open modal and re-assign the userId
  openModal(id: string, userid: number){
    this.modalService.open(id);
    console.log(id,userid);
    this.userId = userid;
  }
  //close modal
  closeModal(id: string){
    this.modalService.close(id);
  }

}
