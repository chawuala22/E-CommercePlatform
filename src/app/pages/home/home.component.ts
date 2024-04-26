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
        if (data.data.length > 1) {
          console.log(data);
          this.fruitsArray = data.data;
        } else {
          Swal.fire('No data view');
        }
      },
      error: (err) => {
        console.log(err);
      }
    })
  }

  deleteFruit(id: string) {
    Swal.fire({
      title: "Do you want to delete the fruit?",
      showDenyButton: true,
      confirmButtonText: "Delete",
      denyButtonText: `Cancel`
    }).then((result) => {
      if (result.isConfirmed) {
        this._serviceFruit.deleteFruit(id).subscribe({
          next: (data) => {
            console.log(data);
            this.getAllFruits();
          },
          error: (err) => {
            console.log(err);
          }
        })
      } else if (result.isDenied) {
      }
    });
  }

}
