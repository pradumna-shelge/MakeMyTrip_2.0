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
import { airportStore, getAirportData } from 'src/NgStore/AirPort/Airport.selector';
import { AirportStore } from 'src/NgStore/AirPort/Airport.reduser';
import { AirportModel } from 'src/Model/Airport.model';
import { LoadAirportData } from 'src/NgStore/AirPort/Airport.action';
import { LoadReturnData, LoadTripData } from 'src/NgStore/tripDetail/trip.ngStore';
import { LoadJourneyData } from 'src/NgStore/journey/journey.action';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  search: searchData = {} as searchData;
  data!: JourneyS;
  filteredData!: JourneyS;
  postRequestData!: searchPost;
  airportData!: AirportModel[]
  currentJourneyDeP: JourneyInterface | undefined;
  currentJourneyRen!: JourneyInterface | undefined;
  constructor(private airportStore: Store<AirportStore>, private router: Router, private JourneysService: JourneysService, private searchStore: Store<SearchStore>, private airlineStore: Store<AirlineStore>, private tripStore: Store<TripStore>) {
    this.airportStore.dispatch(LoadAirportData())
    this.airlineStore.select(getAirportData).subscribe(d => {
      this.airportData = d;
    })
  }
  filterData(data: filterInterface) {
    let newData = this.data;



    //   if(data.Price){ 
    //     let PriceData =  data.Price.split('-')
    //     let low:number= Number( PriceData[0]);
    //      let high:number =Number( PriceData[1]);
    //      this.filteredData  = {...this.filteredData,dep:this.filteredData.dep.filter(m=> m.price>=low && m.price<= high )}


    //    }
    //    if(data.DepartureTime){

    //     let dateArray =  data.DepartureTime.split('-')
    //     let lowerTime = dateArray[0];
    //     let upperTime = dateArray[1];

    //     let lowerTimeParts = lowerTime.split(/(\d+)(am|pm)/).filter(Boolean); 
    //     let upperTimeParts = upperTime.split(/(\d+)(am|pm)/).filter(Boolean);

    //     let lowerHours = parseInt(lowerTimeParts[0], 10) || 0;
    //     let upperHours = parseInt(upperTimeParts[0], 10) || 24;

    // let LowDate = new Date( this.filteredData.dep[0].departureTime) ;
    // let HighDate = new Date( this.filteredData.dep[0].departureTime) ;
    // LowDate.setHours(lowerHours);
    // HighDate.setHours(upperHours)



    // newData.dep = newData.dep.filter(m=>  m.departureTime >= LowDate && m.departureTime <= HighDate  )




    //    }

    //    if(data.ArrivalTime){
    //     const dateArray =  data.DepartureTime.split('-')

    //     const high = dateArray[1]; 

    // const [Hhours, Hminutes] = high.split(/(?<=\d)(?=[A-Z])/)[0].split(':').map(Number);

    // const HighDate = new Date();

    // HighDate.setHours(Hhours % 12);
    // HighDate.setMinutes(Hminutes);
    // if(Array.isArray(this.filteredData.ren) ){

    //   this.filteredData.ren = this.filteredData.ren.filter(m=>  m.departureTime<= HighDate )
    // }
    //    }

  }



  ngOnInit(): void {

    this.getAirports();
  }






  getAirports() {
    this.searchStore.select(getSearchData).subscribe({
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



      this.airlineStore.select(getAirlineById(ob.airlineId)).subscribe(d => {
        ob = { ...ob, airline: d }
      })
      ob.From = this.airportData.find(f => f.airportId == ob.fromid);
      ob.To = this.airportData.find(f => f.airportId == ob.to);
      tempData.push(ob);
    })
    if (this.data.ren) {

      this.data.ren.forEach((ob: JourneyInterface) => {
        this.airlineStore.select(getAirlineById(ob.airlineId)).subscribe(d => {
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

    const data: TripStore = {
      journey: this.currentJourneyDeP ?? {} as JourneyInterface,
      search: this.search,
      error: false
    }
    this.tripStore.dispatch(LoadTripData({ data: data }))


    if (this.currentJourneyRen) this.tripStore.dispatch(LoadReturnData({ data: this.currentJourneyRen }))


  
    
    this.router.navigate(['flight/review'])
  }
}
