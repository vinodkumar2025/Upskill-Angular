import { Component, DestroyRef, inject, signal } from '@angular/core';

import { Place } from '../place.model';
import { PlacesComponent } from '../places.component';
import { PlacesContainerComponent } from '../places-container/places-container.component';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';
import { PlacesService } from '../places.service';

@Component({
  selector: 'app-available-places',
  standalone: true,
  templateUrl: './available-places.component.html',
  styleUrl: './available-places.component.css',
  imports: [PlacesComponent, PlacesContainerComponent],
})
export class AvailablePlacesComponent {
  places = signal<Place[] | undefined>(undefined);
  isFetching = signal(false);
  error = signal(false);
  private httpClient = inject(HttpClient)
  private placesService = inject(PlacesService)
  private destroyRef =inject(DestroyRef)

  ngOnInit() {
    this.isFetching.set(true);
    const subsription = this.placesService.loadAvailablePlaces()
      .pipe(map((res) => res.places))
      .subscribe({
        next: (res) => { this.places.set(res) },
        error: () => this.error.set(true),
        complete: () => console.log(this.isFetching.set(false))
      })
      this.destroyRef.onDestroy(()=>subsription)
    
      
  }

  onSelectPlace(event:Place){
    const putesq = this.placesService.addPlaceToUserPlaces(event).subscribe({
      next:(res)=>console.log(res)
      ,error:(err)=>console.log(err)
    })
    this.destroyRef.onDestroy(()=>putesq)
  }
  
}
