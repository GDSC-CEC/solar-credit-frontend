import React from "react";
import { Button } from "antd";

const AppButton = ({
    label,
    type = "primary",
    htmlType = "button",
    className,
    onClick,
    size = "small",
    ...rest
}) => {
    return (
        <Button
            type={type}
            htmlType={htmlType}
            className={className}
            onClick={onClick}
            size={size}
            {...rest}
        >
            {label}
        </Button>
    );
}

export default AppButton;
