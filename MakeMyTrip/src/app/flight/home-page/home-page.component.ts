import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { AirlineInterface } from 'src/Model/Airline';
import { searchData, JourneyData, searchPost } from 'src/Model/SearchData.model';
import { filterInterface } from 'src/Model/filter.model';
import { JourneyInterface, JourneyS } from 'src/Model/journey.model';
import { getAirLineData, getAirlineById } from 'src/NgStore/AirLine/AirLineselector';
import { SearchStore, AirlineStore, TripStore, JourneyStore } from 'src/NgStore/Stores.interface';
import { getSearchData } from 'src/NgStore/search/Search.selector';
import { JourneysService } from '../Services/journeys.service';
import {  getAirportData } from 'src/NgStore/AirPort/Airport.selector';

import { AirportModel } from 'src/Model/Airport.model';
import { LoadAirportData } from 'src/NgStore/AirPort/Airport.action';
import { LoadReturnData, LoadTripData } from 'src/NgStore/tripDetail/trip.ngStore';
import { LoadJourneyData } from 'src/NgStore/journey/journey.action';
import { LoadBookingPassengers } from 'src/NgStore/Booking/booking.action';
import { passenger } from 'src/Model/booking.model';
import { ToasterService } from 'src/app/services/toaster.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  search: searchData = {} as searchData;
  data!: JourneyS;
  filteredData!: JourneyS;
  returnFlag =false;
  postRequestData!: searchPost;
  airportData!: AirportModel[];
  filterData1= {} as filterInterface
  currentJourneyDeP: JourneyInterface | undefined;
  currentJourneyRen!: JourneyInterface | undefined;
  constructor( private toasterSer:ToasterService, private store: Store, private router: Router, private JourneysService: JourneysService) {
    this.store.dispatch(LoadAirportData())
    this.store.select(getAirportData).subscribe(d => {
      this.airportData = d;
    })
  }
  filterData(data: filterInterface) {
this.filteredData= this.data


      if(data.Price){ 
        let PriceData =  data.Price.split('-')
        let low:number= Number( PriceData[0]);
         let high:number =Number( PriceData[1]);
         this.filteredData  = {...this.filteredData,dep:this.filteredData.dep.filter(m=> m.price>=low && m.price<= high )}
          
         if(this.data && this.data.ren && this.filteredData.ren)
         {
          this.filteredData  = {...this.filteredData,ren:this.filteredData.ren.filter(m=> m.price>=low && m.price<= high )}

         }

       }
       if(data.DepartureTime){
        let dateArray =  data.DepartureTime.split('-')
        let lowerTime = dateArray[0];
        let upperTime = dateArray[1];

        let lowerTimeParts = lowerTime.split(/(\d+)(am|pm)/).filter(Boolean); 
        let upperTimeParts = upperTime.split(/(\d+)(am|pm)/).filter(Boolean);

        let lowerHours = parseInt(lowerTimeParts[0], 10) || 0;
        let upperHours = parseInt(upperTimeParts[0], 10) || 24;

    let LowDate = new Date( this.filteredData.dep[0].departureTime) ;
    let HighDate = new Date( this.filteredData.dep[0].departureTime) ;
    LowDate.setHours(lowerHours);
    HighDate.setHours(upperHours)
    this.filteredData ={...this.filteredData, dep:this.filteredData.dep.filter(m=> new Date( m.departureTime) >= LowDate && new Date( m.departureTime) <= HighDate  )}

       }

       if(data.ArrivalTime){
        let dateArray =  data.ArrivalTime.split('-')
        let lowerTime = dateArray[0];
        let upperTime = dateArray[1];

        let lowerTimeParts = lowerTime.split(/(\d+)(am|pm)/).filter(Boolean); 
        let upperTimeParts = upperTime.split(/(\d+)(am|pm)/).filter(Boolean);

        let lowerHours = parseInt(lowerTimeParts[0], 10) || 0;
        let upperHours = parseInt(upperTimeParts[0], 10) || 24;

    let LowDate = new Date( this.filteredData.dep[0].arrivalTime) ;
    let HighDate = new Date( this.filteredData.dep[0].arrivalTime) ;
    LowDate.setHours(lowerHours);
    HighDate.setHours(upperHours)
    if(this.filteredData.ren)
    this.filteredData ={...this.filteredData, ren:this.filteredData.ren.filter(m=> new Date( m.arrivalTime) >= LowDate && new Date( m.arrivalTime) <= HighDate  )}

       }


    if(data.Airlines.length>0){

     this.filteredData = {...this.filteredData,dep:this.filteredData.dep.filter(d=> data.Airlines.indexOf(d.airline?.name as string)!=-1)}

     if(this.filteredData.ren){
      this.filteredData = {...this.filteredData,ren:this.filteredData.ren.filter(d=> data.Airlines.indexOf(d.airline?.name as string)!=-1)}

     }
      
    }

  }



  ngOnInit(): void {

    this.getAirports();
  }






  getAirports() {
    this.store.select(getSearchData).subscribe({
      next: (data: searchData) => {
       
        this.search = data
        if (this.search) {

          this.postRequestData = {
            fromID: this.search.from?.airportId,
            toID: this.search.to.airportId,
            depatureDate: this.search.departureTime,
            seatClass: this.search.seatTypes
          }
          if (this.search.tripType == 2) {
            this.postRequestData.returnDate = this.search.returnTime ?? new Date();
          }
        }

        this.getJourneys()
      },
      error: (err) => {
        alert('Search Data Error  ')
      }
    })


    
  }

  getJourneys() {
    this.currentJourneyDeP = undefined;
    this.currentJourneyRen = undefined;
    this.filterData1= {} as filterInterface

    
    this.JourneysService.getJourneys(this.postRequestData).subscribe({
      next: (apiData: JourneyS) => {
        this.data = apiData;

        this.modifyData()
      },
      error: (err) => {
        alert(' Could not retrieve Journey data')
      }
    })
  }


  modifyData() {
    const tempData: JourneyInterface[] = []
    const tempData1: JourneyInterface[] = []
    this.data.dep.forEach((ob: JourneyInterface) => {



      this.store.select(getAirlineById(ob.airlineId)).subscribe(d => {
        ob = { ...ob, airline: d }
      })
      ob.From = this.airportData.find(f => f.airportId == ob.fromid);
      ob.To = this.airportData.find(f => f.airportId == ob.to);
      tempData.push(ob);
      
    })
    this.returnFlag = false;
    if (this.data.ren) {
      this.returnFlag = true;
      this.data.ren.forEach((ob: JourneyInterface) => {
        this.store.select(getAirlineById(ob.airlineId)).subscribe(d => {
          ob.airline = d
        })
        ob.From = this.airportData.find(f => f.airportId == ob.fromid)
        ob.To = this.airportData.find(f => f.airportId == ob.to)
        tempData1.push(ob);
      })
    }
    this.data.dep = tempData;
    if (this.data.ren) this.data.ren = tempData1

    this.filteredData = this.data;

  }


  addToBook(data: any) {


    if (data.den) {

      this.currentJourneyDeP = data.den;
    }
    if (data.ren) {
      this.currentJourneyRen = data.ren
    }
  }


  addToReview() {

if((this.currentJourneyRen && this.currentJourneyDeP) && (this.currentJourneyRen.departureTime < this.currentJourneyDeP?.arrivalTime))
{

this.toasterSer.showWarning("The selected flight timings are not compatible. Kindly try a different time option.","Invalid combination")
}
else{


    const data: TripStore = {
      journey: this.currentJourneyDeP ?? {} as JourneyInterface,
      search: this.search,
      error: false
    }
    this.store.dispatch(LoadTripData({ data: data }))


    if (this.currentJourneyRen) this.store.dispatch(LoadReturnData({ data: this.currentJourneyRen }))


  
    this.store.dispatch(LoadBookingPassengers({data:[{} as passenger ],email:""}))
    
    this.router.navigate(['flight/review'])
  }
}


  cancel(){
    this.currentJourneyDeP=undefined,
  this.currentJourneyRen=undefined
  }
}
