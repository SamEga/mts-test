import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SettingsComponent implements OnInit {
  settingsForm!: FormGroup;
  history: any;

  constructor(private formBuilder: FormBuilder, private api: ApiService, private cdr: ChangeDetectorRef) {
    this.initForm();
  }

  initForm(): void {
    this.settingsForm = this.formBuilder.group({
      name: ['Доронин Сергей Леонидович', [Validators.required, Validators.maxLength(200)]],
      alias: ['Псевдоним', [Validators.required, Validators.maxLength(200)]],
      email: ['', [Validators.required, Validators.email, Validators.maxLength(200)]],
      phone: ['', [Validators.required, Validators.maxLength(11), Validators.pattern(/^[8][9]\d{0,9}$/)]],
      radio: 'email',
      notifications: false,
    });
  }

  ngOnInit(): void {
    this.getForm();
  }

  saveForm(): void {
    const form = this.settingsForm;
    const data = this.history;

    Object.keys(form.controls).forEach(key => {
      if (form.controls[key].valid) {
        data[key] = form.controls[key].value;
      }
    });
    this.sendForm(data);
  }

  sendForm(form: any): void {
    this.api.setSettings(form).subscribe(
      res => {},
      error => console.error(error)
    );
  }

  resetChangesForm(): void {
    this.settingsForm.reset();
    this.settingsForm.patchValue(this.history);
    this.getForm();
  }

  getForm(): void {
    this.api.getData<FormGroup>('settings').subscribe(
      res => {
        this.settingsForm.patchValue(res);
        this.history = res;
        this.cdr.detectChanges();
      },
      err => console.log(err)
    );
  }
}
