import { Component, OnInit } from '@angular/core';
import { Datum } from 'src/app/models/fruit';
import { FruitService } from 'src/app/services/fruit.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  fruitsArray: Datum[] = [];
  constructor(private _serviceFruit: FruitService) { }
  ngOnInit(): void {
    this.getAllFruits();
  }

  getAllFruits() {
    this._serviceFruit.getAllFruits().subscribe({
      next: (data) => {
        console.log(data);
        this.fruitsArray = data.data;
      },
      error: (err) => {
        Swal.fire('Before running or viewing the frontend you must run the backend, it is in the following repository, https://github.com/chawuala22/tasks')
        console.log(err);
      }
    })
  }

}
