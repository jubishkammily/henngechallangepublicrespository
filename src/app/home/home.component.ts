import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  mailsList:any;

  ngOnInit(): void {
  }


  mail_count = 0;

  clickFunction() {
    this.mail_count = 10;
    // alert("clicked me!");
    this.mailsList = this.mails;


  }


  mails = [{
    id:1,
    from:"aaa@example.com",
    to:"zzz.zzz@example.com",
    subject:"Cover Letter ",
    date:"0:20",
    attach:"disp",
    expanded: false,
    body:"Having 10 plus years of experince in working with web mobile and desktop applications "
  },{
    id:2,
    from:"bbb@example.com",
    to:"zzz.zzz@example.com",
    subject:"[HR888] Notice of the official announcement",
    date:"0:20",
    attach:"false",
    expanded: false,
    body:"Mail Body "
  },{
    id:3,
    from:"ccc@example.com",
    to:"zzz.zzz@example.com",
    subject:"[HR888] Notice of the official announcement",
    date:"0:20",
    attach:"disp",
    expanded: false,
    body:"Mail Body "
  },{
    id:4,
    from:"ddd@example.com",
    to:"zzz.zzz@example.com",
    subject:"[HR888] Notice of the official announcement",
    date:"0:20",
    attach:"disp",
    expanded: false,
    body:"Mail body"
  },{
    id:5,
    from:"eee@example.com",
    to:"zzz.zzz@example.com",
    subject:"Mail Body ",
    date:"0:20",
    attach:"disp",
    expanded: false,
    body:"Mail body"
  },{
    id:6,
    from:"fff@example.com",
    to:"zzz.zzz@example.com",
    subject:"Mail Body ",
    date:"0:20",
    attach:"false",
    expanded: false,
    body:"Mail body"
  },{
    id:7,
    from:"ggg@example.com",
    to:"zzz.zzz@example.com",
    subject:"[HR888] Notice of the official announcement",
    date:"0:20",
    attach:"disp",
    expanded: false,
    body:"Mail body"
  },{
    id:8,
    from:"aaa@example.com",
    to:"zzz.zzz@example.com",
    subject:"[HR888] Notice of the official announcement",
    date:"0:20",
    attach:"false",
    expanded: false,
    body:"Mail body"
  },{
    id:9,
    from:"aaa@example.com",
    to:"zzz.zzz@example.com",
    subject:"[HR888] Notice of the official announcement",
    date:"0:20",
    attach:"false",
    expanded: false,
    body:"Mail body"
  }]

}
