/* eslint-disable testing-library/prefer-screen-queries */
import React from "react";
import { render } from "@testing-library/react";
import { ionFireEvent } from "@ionic/react-test-utils";
import Component from "./component";

const setup = async () => {
  const utils = render(<Component />);

  const normal = await utils.findByTitle("normal");
  const distance = await utils.findByTitle("distance");

  const result = await utils.findByTestId("result");

  return {
    ...utils,
    normal,
    distance,
    result,
  };
};

describe("Shift list sorting", () => {
  it("renders correctly", async () => {
    const { normal } = await setup();
    expect(normal).toBeInTheDocument();
  });
  it("can select other options", async () => {
    const { distance, result } = await setup();

    ionFireEvent.click(distance);

    expect(result).toHaveTextContent("Distance");
  });
});
