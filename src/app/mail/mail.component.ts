import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-mail',
  templateUrl: './mail.component.html',
  styleUrls: ['./mail.component.css']
})
export class MailComponent implements OnInit {

  @Input() mailsFromHomeComponent:any;
  classIconName = "icon_arrow";

  mails:any;
  constructor() { }

  toggleArrow() {
   console.log("test");
   if(this.classIconName == "icon_arrow"){
     this.classIconName = "icon_arrow2";    
  }else{
    this.classIconName = "icon_arrow";
  }

  console.log("this.classIconName",this.classIconName);


  }

  ngOnInit(): void {
    
  }

  toggleExpand(id){

    for(let i=0; i<this.mailsFromHomeComponent.length; i++){
      if(this.mailsFromHomeComponent[i].id ==id ){
        if(this.mailsFromHomeComponent[i].expanded == true){
          this.mailsFromHomeComponent[i].expanded = false;
        }else{
          this.mailsFromHomeComponent[i].expanded = true;
        }
      
      }
  }
  }

}
