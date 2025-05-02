import { Component, computed, DestroyRef, inject, signal } from '@angular/core';

import { PlacesContainerComponent } from '../places-container/places-container.component';
import { PlacesComponent } from '../places.component';
import { Place } from '../place.model';
import { PlacesService } from '../places.service';
import { map } from 'rxjs';

@Component({
  selector: 'app-user-places',
  standalone: true,
  templateUrl: './user-places.component.html',
  styleUrl: './user-places.component.css',
  imports: [PlacesContainerComponent, PlacesComponent],
})
export class UserPlacesComponent {
  private placesService = inject(PlacesService)
  places = this.placesService.loadedUserPlaces
  isFetching = signal(false);
  error = signal(false);
  
  ngOnInit(){
    this.placesService.loadUserPlaces();
  }

  onSelectPlace(event: Place){
    this.placesService.removeUserPlace(event).subscribe({
      next:(res)=>console.log(res)
    })
  }
}
