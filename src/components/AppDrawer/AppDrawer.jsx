import React from "react";
import { Drawer } from "antd";

const AppDrawer = ({
    title,
    placement = "right",
    closable = true,
    onClose = () => {},
    visible = false,
    width = 400,
    children,
    ...rest
}) => {
    return (
        <Drawer
            title={title}
            placement={placement}
            closable={closable}
            onClose={onClose}
            visible={visible}
            width={width}
            {...rest}
        >
            {children}
        </Drawer>
    );
}

export default AppDrawer;