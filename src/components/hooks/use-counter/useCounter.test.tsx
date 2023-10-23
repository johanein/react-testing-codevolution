import { renderHook } from "@testing-library/react";
import { useCounter } from "./useCounter";
import { act } from "react-dom/test-utils";

describe("useCounter", () => {
  test("render initial count", () => {
    const { result } = renderHook(useCounter);
    expect(result.current.count).toBe(0);
  });
  test("should render intial count with 10", () => {
    const { result } = renderHook(useCounter, {
      initialProps: { initialCount: 10 },
    });
    expect(result.current.count).toBe(10);
  });
  test("should render 11 by increment with initial count 10", () => {
    const { result } = renderHook(useCounter, {
      initialProps: {
        initialCount: 10,
      },
    });
    act(() => result.current.increment());
    expect(result.current.count).toBe(11);
  });
});
