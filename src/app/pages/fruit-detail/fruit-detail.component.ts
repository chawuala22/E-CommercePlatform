import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FruitService } from 'src/app/services/fruit.service';

@Component({
  selector: 'app-fruit-detail',
  templateUrl: './fruit-detail.component.html',
  styleUrls: ['./fruit-detail.component.scss']
})
export class FruitDetailComponent implements OnInit {

  constructor(private _serviceFruit: FruitService, private router: Router) { }
  ngOnInit(): void {
    this.getFruitById();
  }

  getFruitById() {
    const id: string | undefined = this.router.url.split('/').pop();
    this._serviceFruit.getFruitById(id).subscribe({
      next: (fruit) => {
        console.log(fruit);
      },
      error: (err) => {
        console.log(err);
      }
    })
  }

}
