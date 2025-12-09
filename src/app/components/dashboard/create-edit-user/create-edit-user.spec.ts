import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateEditUser } from './create-edit-user';

describe('CreateEditUser', () => {
  let component: CreateEditUser;
  let fixture: ComponentFixture<CreateEditUser>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateEditUser]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateEditUser);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
