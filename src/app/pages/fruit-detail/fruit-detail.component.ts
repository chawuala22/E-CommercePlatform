import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Datum } from 'src/app/models/fruit';
import { FruitService } from 'src/app/services/fruit.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-fruit-detail',
  templateUrl: './fruit-detail.component.html',
  styleUrls: ['./fruit-detail.component.scss']
})
export class FruitDetailComponent implements OnInit {
  detail: string = 'View'
  edit: boolean = false;
  fruitDetail: any;
  fruitForm!: FormGroup;
  constructor(private _serviceFruit: FruitService, private cdr: ChangeDetectorRef, private router: Router, private fb: FormBuilder) { }
  ngOnInit(): void {
    this.getFruitById();
  }

  getFruitById() {
    const id: string | undefined = this.router.url.split('/').pop();
    this._serviceFruit.getFruitById(id).subscribe({
      next: (fruit) => {
        this.fruitDetail = fruit;
        this.initializingForm();
        this.disableInputs();
      },
      error: (err) => {
        console.log(err);
      }
    })

  }
  initializingForm() {
    this.fruitForm = this.fb.group({
      title: [this.fruitDetail.title, [Validators.required]],
      price: [this.fruitDetail.price, [Validators.required]],
      description: [this.fruitDetail.description, [Validators.required]],
      category: [this.fruitDetail.category, [Validators.required]],
      img: [this.fruitDetail.img, [Validators.required]]
    });
  }

  disableInputs() {
    console.log(this.edit);

    if (this.edit) {
      this.fruitForm.get('title')?.enable();
      this.fruitForm.get('price')?.enable();
      this.fruitForm.get('description')?.enable();
      this.fruitForm.get('category')?.enable();
      this.fruitForm.get('img')?.enable();
    } else {
      this.fruitForm.get('title')?.disable();
      this.fruitForm.get('price')?.disable();
      this.fruitForm.get('description')?.disable();
      this.fruitForm.get('category')?.disable();
      this.fruitForm.get('img')?.disable();
    }
    this.cdr.detectChanges();
  }


  editFruit() {
    this.detail = 'Edit';
    this.edit = true;
    this.disableInputs();
  }

  validateImage() {
    const text = this.fruitForm.get('img')?.value;
    console.log(text);
    if (!text.includes('png') && text !== '') {
      Swal.fire('Only png images')
    }
  }

  sendData() {
    const info = this.fruitForm.value;
    this._serviceFruit.updateFruit(this.fruitDetail.id, info).subscribe({
      next: (data) => {
        console.log(data);
        Swal.fire('Successfully updated');
        this.edit = false;
        this.detail = 'View';
        this.disableInputs();
        setTimeout(() => {
          this.router.navigate(['/']);
        }, 2000);

      },
      error: (err) => {
        console.log(err);
      }
    })
  }

}
