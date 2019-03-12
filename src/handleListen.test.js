const handleListen = require("./handleListen");

describe("Test handleListen server function", () => {
  test("Should call log when running", () => {
    const PORT = 3000;
    const log = jest.fn();
    handleListen(log, PORT);
    expect(log.mock.calls).toHaveLength(1);
    expect(log.mock.calls[0][0]).toBe(
      `Drinkio is running locally at localhost:${PORT.toString()}`
    );
  });
});
