import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';

describe('AppComponent', () => {  
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        FormsModule,
        ReactiveFormsModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'otp'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('otp');
  });

  it(`should create the form`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    app.ngOnInit();
    expect(app.otpForm).toBeTruthy();
  });

  it('form invalid when empty', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    app.ngOnInit();
    expect(app.otpForm.valid).toBeFalsy();    
  });

  it('firstSquare field validity', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    app.ngOnInit();
    let firstSquare = app.otpForm.controls['firstSquare']; 
    expect(firstSquare.valid).toBeFalsy(); 
  });

  it('secondSquare field validity', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    app.ngOnInit();
    let secondSquare = app.otpForm.controls['secondSquare']; 
    expect(secondSquare.valid).toBeFalsy(); 
  });

  it('thirdSquare field validity', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    app.ngOnInit();
    let thirdSquare = app.otpForm.controls['thirdSquare']; 
    expect(thirdSquare.valid).toBeFalsy(); 
  });

  it('fourthSquare field validity', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    app.ngOnInit();
    let fourthSquare = app.otpForm.controls['fourthSquare']; 
    expect(fourthSquare.valid).toBeFalsy(); 
  });

  it('fifthSquare field validity', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    app.ngOnInit();
    let fifthSquare = app.otpForm.controls['fifthSquare']; 
    expect(fifthSquare.valid).toBeFalsy(); 
  });

  it('sixthSquare field validity', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    app.ngOnInit();
    let sixthSquare = app.otpForm.controls['sixthSquare']; 
    expect(sixthSquare.valid).toBeFalsy(); 
  });

  it('firstSquare required validity', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    app.ngOnInit();
    let errors = {};
    let firstSquare = app.otpForm.controls['firstSquare'];
    errors = firstSquare.errors || {};
    expect(errors['required']).toBeTruthy(); (1)
  });

  it('secondSquare required validity', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    app.ngOnInit();
    let errors = {};
    let secondSquare = app.otpForm.controls['secondSquare'];
    errors = secondSquare.errors || {};
    expect(errors['required']).toBeTruthy(); (1)
  });

  it('thirdSquare required validity', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    app.ngOnInit();
    let errors = {};
    let thirdSquare = app.otpForm.controls['thirdSquare'];
    errors = thirdSquare.errors || {};
    expect(errors['required']).toBeTruthy(); (1)
  });
  it('fourthSquare required validity', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    app.ngOnInit();
    let errors = {};
    let fourthSquare = app.otpForm.controls['fourthSquare'];
    errors = fourthSquare.errors || {};
    expect(errors['required']).toBeTruthy(); (1)
  });
  it('fifthSquare required validity', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    app.ngOnInit();
    let errors = {};
    let fifthSquare = app.otpForm.controls['fifthSquare'];
    errors = fifthSquare.errors || {};
    expect(errors['required']).toBeTruthy(); (1)
  });
  it('sixthSquare required validity', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    app.ngOnInit();
    let errors = {};
    let sixthSquare = app.otpForm.controls['sixthSquare'];
    errors = sixthSquare.errors || {};
    expect(errors['required']).toBeTruthy(); (1)
  });

  it('submitting a code', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    app.ngOnInit();    
    app.otpForm.controls['firstSquare'].setValue("3");
    app.otpForm.controls['secondSquare'].setValue("5");
    app.otpForm.controls['thirdSquare'].setValue("1");
    app.otpForm.controls['fourthSquare'].setValue("2");
    app.otpForm.controls['fifthSquare'].setValue("6");
    expect(app.otpForm.valid).toBeFalsy();   
  });

});
