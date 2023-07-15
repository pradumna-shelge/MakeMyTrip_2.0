import { Injectable } from "@angular/core";
import { createEffect, ofType, Actions } from "@ngrx/effects";
import { exhaustMap, map, catchError, of, mergeMap } from "rxjs";
import { AireLineService } from "src/app/flight/Services/aire-line.service";
import { AirportService } from "src/app/services/airport.service";
import { LoadAirportData, LoadAirportDataError, LoadAirportDataSuccess } from "./Airport.action";
import { AirportModel } from "src/Model/Airport.model";


@Injectable()
export class AirportEffects {
 

    loadData$ = createEffect(() =>
    this.actions$.pipe(
      ofType(LoadAirportData),
      mergeMap(() =>

        this.airportSer.getAirports().pipe(
           map((data:AirportModel[]) => LoadAirportDataSuccess({ data:data })),
          catchError((error) => of(LoadAirportDataError({ err:true })))
        )
      )
    )
  );
 


  constructor(
    private actions$: Actions,
    private airportSer: AirportService
  ) {}
}