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
            }}
        />
    );
};

export default MenuItem;
