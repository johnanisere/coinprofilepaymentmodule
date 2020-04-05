import * as zoid from "zoid/dist/zoid.frame.min";

const widget = zoid.create({
  tag: "coinprofile-payment-gateway", //Same tag would be used in the child component
  dimensions: {
    //The default size the widget should display in
    width: "100%",
    height: "100%"
  },
  url: ({ props }) => {
    return {
      dev: "http://localhost:3004",
      production: "https://my-site.com/login",
      test: "mock://www.my-site.com/base/test/windows/login/index.htm"
    }[props.env];
  },
  props: {
    env: {
      type: "string",
      default: () => "production"
    },
    username: {
      type: "string",
      required: true
    },
    amount: {
      type: "number",
      required: true
    },
    currency: {
      type: "string",
      required: true
    },
    email: {
      type: "string",
      required: true
    },
    selectedCurrency: {
      type: "string",
      required: false
    }
  }
});

export default widget;
