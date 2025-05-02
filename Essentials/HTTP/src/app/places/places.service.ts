import { inject, Injectable, signal } from '@angular/core';

import { Place } from './place.model';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PlacesService {
  private userPlaces = signal<Place[]>([]);
  private httpClient = inject(HttpClient)
  loadedUserPlaces = this.userPlaces.asReadonly();

  loadAvailablePlaces() {
    return this.httpClient.get<{ places: Place[] }>('http://localhost:3000/places')
  }

  loadUserPlaces() {
    return this.httpClient.get<{ places: Place[] }>('http://localhost:3000/user-places').pipe(map((res) => res.places)).subscribe((res)=>{
      this.userPlaces.set(res)
    })
  }

  addPlaceToUserPlaces(place: Place) {
    const preUserPlaces = this.userPlaces();
    if(!preUserPlaces.some((p)=>p.id === place.id))
      this.userPlaces.update((old)=>[...old,place])
    return this.httpClient.put('http://localhost:3000/user-places',{placeId: place.id})
  }

  removeUserPlace(place: Place) {
    const preUserPlaces = this.userPlaces();
    if(preUserPlaces.some((p)=>p.id === place.id))
      this.userPlaces.update((old)=>old.filter((up)=>up.id!==place.id))
    return this.httpClient.delete(`http://localhost:3000/user-places/${place.id}`)
  }
}
