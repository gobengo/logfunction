/// <reference types="jest" />
import log from "../src"

describe("logfunction", () => {
  it(`can log(level, message, etc)`, () => {
    expect(log("silly", `testing log("silly", "...")`, {})).toBe(undefined)
    expect(log("debug", `testing log("debug", "...")`, {})).toBe(undefined)
    expect(log("info", `testing log("info", "...")`, {})).toBe(undefined)
    expect(log("warn", `testing log("warn", "...")`, {})).toBe(undefined)
    expect(log("error", `testing log("error", "...")`, {})).toBe(undefined)
  })
})
