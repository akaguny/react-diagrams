import * as React from "react";
import * as ReactDOM from "react-dom";
import { Form, Input, message } from "antd";
const FormItem = Form.Item;
import { FormComponentProps } from "antd/lib/form";
import "antd/dist/antd.css";

class App extends React.Component<FormComponentProps> {
  constructor(props: FormComponentProps) {
    super(props);
  }

  componentDidMount() {
    this.props.form.setFields({
      testNumber: { value: 60 }
    });
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Form>
        <FormItem
          label="Number Field"
          labelCol={{ span: 10 }}
          wrapperCol={{ span: 12 }}
        >
          {getFieldDecorator("testNumber", {
            getValueFromEvent: (e: React.FormEvent<HTMLInputElement>) => {
              const convertedValue = Number(e.currentTarget.value);
              if (isNaN(convertedValue)) {
                return Number(this.props.form.getFieldValue("testNumber"));
              } else {
                return convertedValue;
              }
            },
            rules: [{ required: true, type: "number", min: 60, max: 100 }]
          })(<Input addonAfter={"<-- Type 51 here"} />)}
        </FormItem>
      </Form>
    );
  }
}

export default Form.create()(App);