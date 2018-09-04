import { NGRXPocModule } from './ngrxpoc.module';

describe('NGRXPocModule', () => {
  let nGRXPocModule: NGRXPocModule;

  beforeEach(() => {
    nGRXPocModule = new NGRXPocModule();
  });

  it('should create an instance', () => {
    expect(nGRXPocModule).toBeTruthy();
  });
});
