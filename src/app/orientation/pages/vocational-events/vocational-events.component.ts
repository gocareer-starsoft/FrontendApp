import {Component, Input, OnInit} from '@angular/core';
import {EvaluationsService} from "../../../assessment/services/evaluations.service";
import {Meeting} from "../../model/meeting";
import {MeetingsService} from "../../services/meetings.service";

@Component({
  selector: 'app-vocational-events',
  templateUrl: './vocational-events.component.html',
  styleUrls: ['./vocational-events.component.css']
})
export class VocationalEventsComponent implements OnInit {
  @Input() meetings: Array<Meeting>=[]

  constructor(private meetingsService: MeetingsService) {}

  private getAllMeetings(){
    this.meetingsService.getAll().subscribe((response: any) => {
      this.meetings = response
    });
  }

  ngOnInit(): void {
    this.getAllMeetings()
  }
}
