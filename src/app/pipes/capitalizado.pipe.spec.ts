import { CapitalizadoPipe } from "./capitalizado.pipe";

describe("CapitalizadoPipe", () => {
  let pipe: CapitalizadoPipe;

  beforeEach(() => {
    pipe = new CapitalizadoPipe();
  });

  it("create an instance", () => {
    expect(pipe).toBeTruthy();
  });

  it("Check transform logic", () => {
    const VALUE = "AlfreDO is hanDSome";

    // Without specifying arguments
    const TRANSFORMEDVALUE0 = pipe.transform(VALUE);
    expect(TRANSFORMEDVALUE0).toEqual("Alfredo Is Handsome");

    // True argument
    const TRANSFORMEDVALUE1 = pipe.transform(VALUE, true);
    expect(TRANSFORMEDVALUE1).toEqual("Alfredo Is Handsome");

    // False argument
    const TRANSFORMEDVALUE2 = pipe.transform(VALUE, false);
    expect(TRANSFORMEDVALUE2).toEqual("Alfredo is handsome");
  });
});
