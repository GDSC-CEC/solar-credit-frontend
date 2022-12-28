import React from "react";
import { Form, Select } from "antd";

const FormSelectInput = ({
    label,
    containerClassName,
    selectClassName,
    rules,
    error,
    touched,
    name,
    value,
    onChange,
    size = "small",
    options,
    ...rest
}) => {
    return (
        <Form.Item
            label={label}
            name={name}
            className={containerClassName}
            rules={rules}
            validateStatus={error && touched ? "error" : ""}
            help={error && touched ? error : ""}
        >
            <Select
                name={name}
                className={selectClassName}
                value={value}
                options={options}
                onChange={onChange}
                size={size}
                {...rest}
            />
        </Form.Item>
    );
}

export default FormSelectInput;