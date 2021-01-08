import { Component } from '@angular/core';
import { FormBuilder,FormGroup} from '@angular/forms';
import { DataService } from './services/data.service';
import { Department} from './domain/department';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';

  constructor(public dataService:DataService){}

  onLoad(){
    this.dataService.getDepartments().subscribe( (deps:Department[]) =>
      {
        this.dataService.deps=deps;
        console.log(this.dataService.deps);
      }
    )
  }
  onSubmit(dep: Department): void {

   dep.dateOpened=new Date();
   dep.location="Qui";
   dep.name="nome di prova";
   dep.telephone="11100011";
   console.log('you submitted value: ', dep);
   this.dataService.postDepartment(dep).subscribe( result=>
    console.log(result)
   )
  }
}

/*
  codeDepartment: number;
  dateOpened: Date;
  description: string;
  location: string;
  name: string;
  telephone: string;
*/
