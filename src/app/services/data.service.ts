import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { FormBuilder, FormGroup } from "@angular/forms";
import { Department } from "../domain/department";
@Injectable()
export class DataService {
  deps: Department[] = [];
  frmDep: FormGroup;
  constructor(private http: HttpClient, fb: FormBuilder) {
    this.frmDep = fb.group({
      codeDepartment: [],
      dateOpened: [],
      description: [],
      location: [],
      name: [],
      telephone: []
    });
  }
  getDepartments() {
    return this.http.get(
      "https://lit-ridge-34418.herokuapp.com/api/department"
    );
  }

  postDepartment(dep:Department){
    return this.http.post("https://lit-ridge-34418.herokuapp.com/api/department/save",dep);

  }
}


