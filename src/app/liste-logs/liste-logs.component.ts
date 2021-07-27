import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { RecordService } from 'src/_services/records.service';
import { TokenStorageService } from 'src/_services/token-storage.service';
import { UserService } from 'src/_services/user.service';

@Component({
  selector: 'app-liste-logs',
  templateUrl: './liste-logs.component.html',
  styleUrls: ['./liste-logs.component.css'],
})
export class ListeLogsComponent implements OnInit {
  logs: Observable<any>;
  loading: boolean = true;

  org: any;
  orgid: any;

  constructor(
    private recordService: RecordService,
    private userservice: UserService,
    private tokenStorageService: TokenStorageService
  ) {}

  ngOnInit(): void {
    const user = this.tokenStorageService.getUser();
    this.GetOrganizationByName(user.organizations[0]);

    this.loading = false;
  }

  GetOrganizationByName(str: string) {
    this.userservice.GetOrganizationByName(str).subscribe((data) => {
      this.org = data;
      this.orgid = this.org.id;
      this.getOrganizationLogs(this.org.id);
    });
  }

  getOrganizationLogs(id: number) {
    this.recordService.getOrganizationRecords(id).subscribe((data) => {
      this.logs = data;
    });
  }
}
