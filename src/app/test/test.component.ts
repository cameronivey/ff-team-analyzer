import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  standardDataLocation: string
  halfPprDataLocation: string
  fileData: Array<object>
  myTeam: Array<string>

  constructor(private httpClient: HttpClient) {
    this.standardDataLocation = "assets/FantasyPros_10302018_Standard.json"
    this.myTeam = [];
  }

  ngOnInit() {
    this.getData().subscribe(data => this.fileData = data)
  }

  getData() {
    return this.httpClient.get<Array<object>>(this.standardDataLocation);
  }

  addPlayer(newPlayer: string) {
    if (newPlayer) {
      this.myTeam.push(newPlayer)
    }
  }

  findPlayer(playerName: string) {
    return this.fileData.find(p => p["Overall"] == playerName)
  }
}
