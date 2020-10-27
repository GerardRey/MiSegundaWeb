import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarEventComponent } from './eliminar-event.component';

describe('EliminarEventComponent', () => {
  let component: EliminarEventComponent;
  let fixture: ComponentFixture<EliminarEventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EliminarEventComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EliminarEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
