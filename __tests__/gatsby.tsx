import React from "react"
import { render } from "@testing-library/react"

import Title from "../src/components/header"

test("Displays the correct title", () => {
  const { getByTestId } = render(<Title siteTitle="Test" />)
  // Assertion
  expect(getByTestId("hero-title")).toHaveTextContent("Gatsby is awesome!")
  // --> Test will pass
})
