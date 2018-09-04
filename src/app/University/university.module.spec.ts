import { UniversityModule } from './university.module';

describe('UniversityModule', () => {
  let universityModule: UniversityModule;

  beforeEach(() => {
    universityModule = new UniversityModule();
  });

  it('should create an instance', () => {
    expect(universityModule).toBeTruthy();
  });
});
