import React from "react";
import { List } from "antd";

const AppList = ({
    className,
    dataSource,
    renderItem,
    size = "small",
    ...rest
}) => {
    return (
        <List
            className={className}
            dataSource={dataSource}
            renderItem={renderItem}
            size={size}
            {...rest}
        />
    );
}

export default AppList;
