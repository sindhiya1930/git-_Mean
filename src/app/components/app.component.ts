import { Component ,OnInit,Input} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EditComponent} from './edit.component';
import {RouterModule,Routes} from '@angular/router';
import 'rxjs/add/operator/toPromise';
@Component({
  selector: 'my-app',
  templateUrl:'./app.component.html',

})
export class AppComponent { 
  employees:Array <Object>=[];
  @Input('email') email:string=' ';
constructor(public http:HttpClient){

}
  ngOnInit(){
this.http.get('http://localhost:8001/employee')
.toPromise()
.then(res=>{
console.log(res);

this.employees=res as any;
})

}

deleteemployee(index:number,email:string){
   
  this.http.delete('http://localhost:8001/employees/'+email )
  .toPromise()
  .then(res=>{
      console.log(res)
      return res
})
.then(data=>{console.log(data)})
this.employees.splice(index,1);
}
}

 
