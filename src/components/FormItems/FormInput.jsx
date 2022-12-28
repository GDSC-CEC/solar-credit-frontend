import React from "react";
import { Form, Input } from "antd";

const FormInput = ({
  label,
  name,
  containerClassName,
  inputClassName,
  rules,
  error,
  touched,
  value,
  onChange,
  size = "small",
  ...rest
}) => {
  return (
    <Form.Item
      label={label}
      className={containerClassName}
      rules={rules}
      validateStatus={error && touched ? "error" : ""}
      help={error && touched ? error : ""}
    >
      <Input
        name={name}
        className={inputClassName}
        value={value}
        onChange={onChange}
        size={size}
        {...rest}
      />
    </Form.Item>
  );
};

export default FormInput;
