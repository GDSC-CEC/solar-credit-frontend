import React from "react";
import { Form, Input } from "antd";

const FormInput = ({
  label,
  name,
  containerClassName,
  inputClassName,
  inputProps = {},
  containerProps = {},
  rules,
  error,
  touched,
  value,
  onChange,
  size = "small"
}) => {
  return (
    <Form.Item
      label={label}
      className={containerClassName}
      rules={rules}
      validateStatus={error && touched ? "error" : ""}
      help={error && touched ? error : ""}
      {...containerProps}
    >
      <Input
        name={name}
        className={inputClassName}
        value={value}
        onChange={onChange}
        size={size}
        {...inputProps}
      />
    </Form.Item>
  );
};

export default FormInput;
