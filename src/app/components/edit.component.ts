import { Component ,OnInit,Input} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/toPromise';

@Component({
  selector: 'my-edit',
  template: `
  <h1 class="text-center">EDIT EMPLOYEE<h1>
<div class="container">

<div class="row">

<div class="input-group mb-3">
<div class="input-group-prepend">
    <span class="input-group-text" id="basic-addon1">Employee ID</span>
</div>
<input type="text" #empid (change)="0" class="form-control" placeholder="Employee id" aria-label="empid" aria-describedby="basic-addon1">
</div>
</div>

<div class="row">
<div class="input-group mb-3">
    <div class="input-group-prepend">
        <span class="input-group-text" id="basic-addon1">NAME</span>
    </div>
    <input type="text" #first (change)="0" class="form-control" placeholder="Employee name" aria-label="name" aria-describedby="basic-addon1">
</div>
</div>

<div class="row">
<div class="input-group mb-3">
    <div class="input-group-prepend">
        <span class="input-group-text" id="basic-addon1">GENDER</span>
    </div>
    <input type="text" #gender (change)="0" class="form-control" placeholder="Employee gender" aria-label="gender" aria-describedby="basic-addon1">
</div>
</div>

<div class="row">
<div class="input-group mb-3">
    <div class="input-group-prepend">
        <span class="input-group-text" id="basic-addon1">EMAIL</span>
    </div>
    <input type="email" #email (change)="0" class="form-control" placeholder="Employee email" aria-label="email" aria-describedby="basic-addon1">
</div>
</div>
<button type="button" class="btn btn-primary" onClick="window.location.reload();" (click)="updateemployee(empid.value,first.value,gender.value,email.value)">UPDATE</button>
<hr>        
`,
    })
    export class EditComponent { 
            employees:Array <Object>=[];
            @Input('empid') empid:number=0;
            @Input('first') name:string=' ';
            @Input('gender') gender:string=' ';
            @Input('email') email:string=' ';
    constructor(public http:HttpClient){
    
    }

    updateemployee(empid:number,name:string,gender:string,email:string){
        
       this.http.put('http://localhost:8001/editemployees',
       {empid:empid,first_name:name,gender:gender,email:email})
       .toPromise()
       .then(res=>{
           console.log(res)
           return res
    })
     }
     }