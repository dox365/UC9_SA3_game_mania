import { Injectable } from '@angular/core';
import { timeout, delay } from 'q';
import { Observable, of } from 'rxjs';
import { LoadingService } from './loading.service';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private loadingService: LoadingService) { }

  products = [
    {
      id: 1,
      text: "1",
      image: ["/assets/img/gta6.png"]
    },
    {
      id: 2,
      text: "2",
      image: ["/assets/img/1.png"]
    },
    {
      id: 3,
      text: "3",
      image: ["/assets/img/2.png"]
    },
    {
      id: 4,
      text: "4",
      image: ["/assets/img/3.png"]
    },
    {
      id: 5,
      text: "5",
      image: ["/assets/img/4.png"]
    },
    {
      id: 6,
      text: "Everfresh Flowers",
      image: ["/assets/img/5.png"]
    },
    {
      id: 7,
      text: "Festive Deer",
      image: ["/assets/img/6.png"]
    },
    {
      id: 8,
      text: "Morning Greens",
      image: ["/assets/img/7.png"]
    },
    {
      id: 9,
      text: "Everfresh Flowers",
      image: ["/assets/img/8.png"]
    },
    {
      id: 10,
      text: "Festive Deer",
      image: ["/assets/img/9.png"]
    },
    {
      id: 11,
      text: "Morning Greens",
      image: ["/assets/img/10.png"]
    },
    {
      id: 12,
      text: "Everfresh Flowers",
      image: ["/assets/img/11.png"]
    },
    {
      id: 13,
      text: "Festive Deer",
      image: ["/assets/img/12.png"]
    },
    {
      id: 14,
      text: "Everfresh Flowers",
      image: ["/assets/img/13.png"]
    },

  ];


  simillarProducts = [
    {
      id: 1,
      text: "2",
      image: ["/assets/img/2.png"]
    },
    {
      id: 2,
      text: "3",
      image: ["/assets/img/3.png"]
    },
    {
      id: 3,
      text: "4",
      image: ["/assets/img/4.png"]
    },
    {
      id: 4,
      text: "5",
      image: ["/assets/img/5.png"]
    },
  ];

  getAllProducts(): any {
    return this.products;
  }

  getSimillarProducts(): any {
    return this.simillarProducts;
  }

  public getSingleProduct(id: number): Observable<any> {
    let temp: any;
    this.products.forEach(element => {
      if (element.id == id) {
            temp = element;
      }
    });
    const loading = false;
    this.loadingService.progressEnable.next(loading);
    return new Observable((observer) => observer.next(temp));
  }
}
