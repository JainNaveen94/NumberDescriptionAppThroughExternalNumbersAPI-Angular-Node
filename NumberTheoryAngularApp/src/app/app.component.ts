import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'LastClassApp';
  dataToPrint:string = '';
  resultFromServer:Array<string> = [];
  inputData: string = '';

  constructor(private data: DataService){}

  getData() {
    this.data.getFact(this.inputData).subscribe((d) => {
      this.dataToPrint = d;
      this.data.addFact(d).subscribe((msg) => {
        console.log(msg);
      });
    }, (error) => console.log(error));
  }

  ngOnInit() {
    this.data.getAllFacts().subscribe((list:Array<string>) => {
      this.resultFromServer = list;
    })
  }

}
