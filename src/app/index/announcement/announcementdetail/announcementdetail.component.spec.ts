import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnouncementdetailComponent } from './announcementdetail.component';

describe('AnnouncementdetailComponent', () => {
  let component: AnnouncementdetailComponent;
  let fixture: ComponentFixture<AnnouncementdetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnnouncementdetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnnouncementdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
