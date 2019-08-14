import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild
} from "@angular/core";
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl
} from "@angular/forms";
import { Geolocation } from "@ionic-native/geolocation/ngx";
declare var google;

@Component({
  selector: "app-tab-gps",
  templateUrl: "./tab-gps.page.html",
  styleUrls: ["./tab-gps.page.scss"]
})
export class TabGpsPage implements OnInit, AfterViewInit {
  @ViewChild("mapElement", { static: false }) mapNativeElement: ElementRef;
  directionsService = new google.maps.DirectionsService();
  directionsDisplay = new google.maps.DirectionsRenderer({
    suppressMarkers: true,
    polylineOptions: {
      strokeColor: "green"
    }
  });
  directionForm: FormGroup;
  map;
  currentLocation: any = {
    lat: 0,
    lng: 0
  };

  destination: any = {
    text: ""
  };

  constructor(private fb: FormBuilder, private geolocation: Geolocation) {
    this.createDirectionForm();
  }

  ngOnInit() {}

  createDirectionForm() {
    this.directionForm = this.fb.group({
      destination: ["", Validators.required]
    });
  }

  ngAfterViewInit(): void {
    this.geolocation.getCurrentPosition().then(resp => {
      this.currentLocation.lat = resp.coords.latitude;
      this.currentLocation.lng = resp.coords.longitude;

      this.map = new google.maps.Map(this.mapNativeElement.nativeElement, {
        zoom: 7,
        center: { lat: 41.85, lng: -87.65 }
      });
      const infoWindow = new google.maps.InfoWindow();
      const pos = {
        lat: this.currentLocation.lat,
        lng: this.currentLocation.lng
      };
      infoWindow.setPosition(pos);
      infoWindow.setContent("Location found.");
      infoWindow.open(this.map);
      this.map.setCenter(pos);
    });

    this.directionsDisplay.setMap(this.map);
  }

  calculateAndDisplayRoute(formValues) {
    /*var request1 = {
      origin: this.currentLocation,
      destination: this.destination.text,
      travelMode: google.maps.TravelMode.DRIVING
      };
    this.directionsService.route(request1, function(response, status,routes) {
      var t = this;
      if (status === google.maps.DirectionsStatus.OK) {
        t.directionsDisplay.setDirections(response);
       }
      })*/
    this.directionsService.route(
      {
        origin: this.currentLocation,
        destination: this.destination.text,
        travelMode: google.maps.DirectionsTravelMode.DRIVING,
        provideRouteAlternatives: true
      },
      (response, status) => {
        if (status === "OK") {
          this.directionsDisplay.setDirections(response);
          console.log(response);
        } else {
          window.alert("Directions request failed due to " + status);
        }
      }
    );
  }
}
