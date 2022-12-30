import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
 name = "veeru";
 constructor(){
  
 console.log( this.arithmathic(5,45,3,"multi"));
 }
  


arithmathic(a:any,b:any,c:any,type:any){

  if(type=="add"){
    return a+b+c;
   } else if(type=="sub"){
     return a-b-c;
  
   }ifelse:(type=="div");{
    return a/b/c;
    
   }elseif:( type=="multi");{
   return a*b*c ;
    
   }



  }
}






  
