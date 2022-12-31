import React from "react";
import { Drawer } from "antd";

const AppDrawer = ({
    title,
    placement = "right",
    closable = true,
    onClose = () => { },
    visible = false,
    width = 400,
    children,
    ...rest
}) => {
    return (
        <Drawer
            open={visible}
            title={title}
            placement={placement}
            closable={closable}
            onClose={onClose}
            width={width}
            {...rest}
        >
            {children}
        </Drawer>
    );
}

export default AppDrawer;