import React from "react";
import { Link } from "gatsby";
import variables from "./variables";

const MenuItem = (props) => {
    return (
        <Link
            {...props}
            style={{
                color: variables.menuFontColor,
                textDecoration: "none",
                fontSize: variables.menuFontSize,
                margin: "0 40px 0 10px",
            }}
        />
    );
};

export default MenuItem;
