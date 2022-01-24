import { ContrasenaPipe } from "./contrasena.pipe";

describe("ContrasenaPipe", () => {
  let pipe: ContrasenaPipe;

  beforeEach(() => {
    pipe = new ContrasenaPipe();
  });

  it("create an instance", () => {
    expect(pipe).toBeTruthy();
  });

  it("Check transform logic", () => {
    const VALUE = "VALUE";
    const VALUENOTSHOW = "*****";

    const NOTSHOW = pipe.transform(VALUE, false);
    expect(NOTSHOW).toEqual(VALUENOTSHOW);

    const SHOW = pipe.transform(VALUE, true);
    expect(SHOW).toEqual(VALUE);
  });
});
