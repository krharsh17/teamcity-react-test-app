import { describe, expect, test } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App"

describe("App", () => {
  test("renders", () => {
    render(<App />);
    expect(screen.getByText("Vite + React")).toBeDefined();
  });

  test("should increase count by 1", () => {
    // Act
    render(<App />);

    const count = screen.getByTestId("count");
    const button = screen.getByTestId("button");

    fireEvent.click(button);

    // Assert
    expect(count.textContent).toBe("1");
  });
});
