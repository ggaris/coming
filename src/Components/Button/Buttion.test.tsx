import React, { FC, ReactElement } from "react";
import { render, RenderOptions, fireEvent, screen } from "@testing-library/react";
import Button from "./index";

describe("App", () => {
  test("renders App component", () => {
    render(<Button type='danger'>3333</Button>);

    screen.getByText("3333").click();
  });
});

describe("App", () => {
  const foo = () => {
    console.log(222);
  };

  test("renders App component", () => {
    render(
      <Button type='danger' onClick={foo}>
        3333
      </Button>,
    );

    screen.getByText("3333").click();
  });
});
