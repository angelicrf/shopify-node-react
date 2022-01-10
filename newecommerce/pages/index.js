import { Heading, Page, TextStyle, Layout, EmptyState } from "@shopify/polaris";
import React, { Component } from "react";

const img = "https://cdn.shopify.com/s/files/1/0757/9955/files/empty-state.svg";

class Index extends Component {
  state = { open: false, custName: "Angelique" };

  render() {
    const myStyle = { color: "red" };
    function discount() {
      this.setState({ open: true });
    }
    return (
      <Page>
        <Layout>
          <EmptyState
            heading="Get Discount"
            action={{
              content: "Select product",
              onAction: () => discount(),
            }}
            image={img}
          >
            <p style={{ color: myStyle.color }}>
              Dear {this.state.custName ? this.state.custName : "Customer"}{" "}
              Choose your favorite product to get discount from.
            </p>
          </EmptyState>
        </Layout>
      </Page>
    );
  }
}

export default Index;
