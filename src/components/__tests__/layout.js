/* eslint-disable no-undef */
import React from "react";
import renderer from "react-test-renderer";
import { StaticQuery } from "gatsby";
import Layout from '../layout';

beforeEach(() => {
  StaticQuery.mockImplementationOnce(({ render }) =>
    render({
      site: {
        siteMetadata: {
          title: `Default Starter`,
        },
      },
    })
  )
});

describe("Layout", () =>
  it("renders correctly", () => {
    const data = {
      site: {
        siteMetadata: {
          author: "Your name",
        },
      },
    }
    const tree = renderer.create(<Layout data={data}><h1>!!!</h1></Layout>).toJSON();
    expect(tree).toMatchSnapshot();
  }));
