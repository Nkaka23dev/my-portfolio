import { Component, ViewChild, OnInit } from '@angular/core';
import{HttpClientModule, HttpClient} from '@angular/common/http'
import { map, filter, switchMap} from 'rxjs/operators'
import { ApiService } from './api.service';
import { FormGroup, FormBuilder, FormGroupDirective, Validators, FormArray,Form}
 from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit { 
  title = 'my-portfolio';
  currentYear: number;
  contactFormGroup: FormGroup;
  loading = false;
  isEmailSent: string;
constructor(private api: ApiService, private formBuilder: FormBuilder){}
ngOnInit(){
  const currentDate = new Date();
    this.currentYear = currentDate.getFullYear();
    this.createContactForm();

    // this.api.send_to_slack(form.value).subscribe((response:any) =>{
    //   console.log(" success ",response)
    // },error =>{
    //   console.log(" Error ",error)
    // })
}
createContactForm() {
  this.contactFormGroup = this.formBuilder.group({
    name: ['', Validators.required],
    email: ['', Validators.required],
    subject: ['', Validators.required],
    message: ['', Validators.required],
  });
}

onSubmit(form, formDirective: FormGroupDirective) {
  this.loading = true;
  this.api.send_to_slack(form.value).subscribe((response: any) => {
    this.isEmailSent = 'Message received!,Nkaka will get back to you soon';
    this.loading = false;
    this.contactFormGroup.reset();
    formDirective.resetForm();
  }, error => {
    this.loading = false;
    if (error.status == 200) {
      this.isEmailSent = 'Message received!,Nkaka will get back to you soon';
      this.contactFormGroup.reset();
      formDirective.resetForm();
    } else {
      this.isEmailSent ='Message not sent, kindly try again.';
    }
  });
}
// onSubmit(form, formDirective: FormGroupDirective) {}
}  