import { async, TestBed } from '@angular/core/testing';
import { TodosModule } from './todos.module';

describe('TodosModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [TodosModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(TodosModule).toBeDefined();
  });
});
