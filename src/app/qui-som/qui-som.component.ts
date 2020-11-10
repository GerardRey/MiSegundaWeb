import { Component, OnInit } from '@angular/core';
import { CompanyWorker } from '../models/worker.model';

@Component({
  selector: 'app-qui-som',
  templateUrl: './qui-som.component.html',
  styleUrls: ['./qui-som.component.css']
})
export class QuiSomComponent implements OnInit {

  workers: CompanyWorker[] = [];
  workerSelected: CompanyWorker = null;

  constructor() { }

  ngOnInit(): void {
    this.workers.push(new CompanyWorker('Pepito', 'assets/Pepito.png','Dels Palots',32,'Hola que tal xd'));
    this.workers.push(new CompanyWorker('Juan', 'assets/Juan.jpeg', 'Magan',10,'Bom dia 8)'));
    this.workers.push(new CompanyWorker('Jorge', 'assets/Jorge.png', 'Infantes',19,'Sóc Fragati :)'));
    this.workers.push(new CompanyWorker('Pedro', 'assets/Sanchez.jpg', 'Sanchez', 4, 'A casa que ya es hora'));
    this.workers.push(new CompanyWorker('Alfonso', 'assets/Fonsi.png', 'Garcia', 18, 'Alias: Fonsi, buscado por ser tant bueno al tft 8)'));
  }

  selectWorker(worker: CompanyWorker): void {
    this.workerSelected = worker;
  }
}
