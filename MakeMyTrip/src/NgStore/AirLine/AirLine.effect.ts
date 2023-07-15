import { Injectable } from "@angular/core";
import { createEffect, ofType, Actions } from "@ngrx/effects";
import { exhaustMap, map, catchError, of, mergeMap } from "rxjs";
import { AireLineService } from "src/app/flight/Services/aire-line.service";

import { LoadAirLineData, LoadAirLineDataError, LoadAirLineDataSuccess } from "./AirLine.action";
import { AirlineInterface } from "src/Model/Airline";


@Injectable()
export class AirLienEffects {
 

    loadData$ = createEffect(() =>
    this.actions$.pipe(
      ofType(LoadAirLineData),
      mergeMap(() =>

        this.airline.getAll().pipe(
           map((data:AirlineInterface[]) => LoadAirLineDataSuccess({ data:data })),
          catchError((error) => of(LoadAirLineDataError({ err:true })))
        )
      )
    )
  );
 


  constructor(
    private actions$: Actions,
    private airline: AireLineService
  ) {}
}