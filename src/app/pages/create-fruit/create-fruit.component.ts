import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FruitService } from 'src/app/services/fruit.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-create-fruit',
  templateUrl: './create-fruit.component.html',
  styleUrls: ['./create-fruit.component.scss']
})
export class CreateFruitComponent implements OnInit {
  fruitForm!: FormGroup;

  constructor(private fb: FormBuilder, private _serviceFruit: FruitService, private router: Router) { }

  ngOnInit(): void {
    this.initializingForm();
  }

  initializingForm() {
    this.fruitForm = this.fb.group({
      title: ['', [Validators.required]],
      price: ['', [Validators.required]],
      description: ['', [Validators.required]],
      category: ['', [Validators.required]],
      img: ['', [Validators.required]]
    });
  }
  sendData() {
    console.log(this.fruitForm.value);

    this._serviceFruit.postFruit(this.fruitForm.value).subscribe({
      next: (data) => {
        if (data.status == 'ok') {
          Swal.fire('Successfully created');
          setTimeout(() => {
            this.router.navigate(['/']);
          }, 2000);
        }
      },
      error: (err) => {
        console.log(err);
      }
    })

  }
}
