import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserInfo } from './user-info.component';

describe('UserAreaFinanceiraComponent', () => {
  let component: UserInfo;
  let fixture: ComponentFixture<UserInfo>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserInfo]
    });
    fixture = TestBed.createComponent(UserInfo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
