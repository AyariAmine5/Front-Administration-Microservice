import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeLogsComponent } from './liste-logs.component';

describe('ListeLogsComponent', () => {
  let component: ListeLogsComponent;
  let fixture: ComponentFixture<ListeLogsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeLogsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeLogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
