import { Component, OnInit, ViewChild, ElementRef  } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-tab-graficas',
  templateUrl: './tab-graficas.page.html',
  styleUrls: ['./tab-graficas.page.scss'],
})
export class TabGraficasPage implements OnInit {
  @ViewChild('barCanvas', {static: true}) barCanvas: ElementRef;

  private barChart: Chart;

  constructor() {}

  ngOnInit() {
    this.barChart = new Chart(this.barCanvas.nativeElement, {
      type: 'bar',
      data: {
        labels: ['Traumatismos Superficiales', 'Luxaciones, esguinces y desgarros', 'Heridas', 'Fracturas', 'Traumatimos', 'Dorsalgias', 'Quemaduras', 'Cuerpo Extraño', 'Amputaciones', 'Varios de frecuencia menor'],
        datasets: [{
          label: 'Hombres',
          data: [64652, 59292, 57363, 28487, 15316, 4862, 6036, 4753, 3269, 6496],
          backgroundColor: '#ddee44', // array should have same number of elements as number of dataset
          borderColor: '#ddee44', // array should have same number of elements as number of dataset
          borderWidth: 1
        },
        {
          label: 'Mujeres',
          data: [29249, 29122, 14029, 4975, 4885, 1909, 2221, 669, 556, 2560],
          backgroundColor: '#dd1144', // array should have same number of elements as number of dataset
          borderColor: '#dd1144', // array should have same number of elements as number of dataset
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true
              }
            }
          ]
        }
      }
    });
  }
}
