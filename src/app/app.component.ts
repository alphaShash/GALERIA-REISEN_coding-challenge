import { Component, OnInit } from '@angular/core';
import { ApiService } from './services/api.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  //  resData: any;
  //  catData = [];
  //  hotels:;
  hotels: any;
  hotelNames: any;

   constructor(private hotelList: ApiService) { }

  ngOnInit() {

    // function hotelDescription():void {

    //   getHotels().subscribe((hotels:any[]) => {
    //     // iterate over hotels
    //       hotels.forEach((hotel: { id: string; }) => {
          
    //         // ... and get each hotel infos
    //         getHotelInfos(hotel.id).subscribe((data: any) => {
    //             // do whatever you want to do with the hotel infos
    //             console.log(data);
    //             // this.hotels = data;
    //           });
    //       });
    //   });
 

    // } 
        this.hotelList.getHotels().subscribe(hotels => {
            // iterate over hotels
              hotels.forEach((hotel: { id: string; }) => {
              
                // ... and get each hotel infos
                this.hotelList.getHotelInfos(hotel.id).subscribe(data => {
                    // do whatever you want to do with the hotel infos
                    console.log(data);
                    this.hotels = data;
                    this.hotelNames = this.hotels.id;
                  });
              });
          });
     
    }

    // hotelDescription(): void {

    //   getHotels().Observable((hotels:any[]) => {
    //     // iterate over hotels
    //       hotels.forEach((hotel: { id: string; }) => {
          
    //         // ... and get each hotel infos
    //         getHotelInfos(hotel.id).subscribe((data: any) => {
    //             // do whatever you want to do with the hotel infos
    //             console.log(data);
    //             // this.hotels = data;
    //           });
    //       });
    //   });
 

    // } 

}




function getHotels() {
  throw new Error('Function not implemented.');
}

function getHotelInfos(id: string) {
  throw new Error('Function not implemented.');
}

