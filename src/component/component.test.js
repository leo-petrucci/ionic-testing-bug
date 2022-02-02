/* eslint-disable testing-library/prefer-screen-queries */
import React from "react";
import { render } from "@testing-library/react";
import { ionFireEvent } from "@ionic/react-test-utils";
import Component from "./component";

const setup = async () => {
  const utils = render(<Component />);

  const normal = await utils.findByTitle("normal");
  const distanceRadio = await utils.findByTitle("distanceRadio");
  const distanceItem = await utils.findByTitle("distanceItem");
  const distanceLabel = await utils.findByTitle("distanceLabel");

  const result = await utils.findByTestId("result");

  return {
    ...utils,
    normal,
    result,
    distanceRadio,
    distanceItem,
    distanceLabel,
  };
};

describe("Shift list sorting", () => {
  it("renders correctly", async () => {
    const { normal } = await setup();
    expect(normal).toBeInTheDocument();
  });
  it("can select other options", async () => {
    const { distanceItem, distanceLabel, distanceRadio, result } =
      await setup();

    ionFireEvent.click(distanceItem);
    ionFireEvent.click(distanceRadio);
    ionFireEvent.click(distanceLabel);

    expect(result).toHaveTextContent("Distance");
  });
});
