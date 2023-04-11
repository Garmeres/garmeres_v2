import React from "react";
import { Link } from "gatsby";

const MenuItem = (props) => {
    return (
        <Link
            {...props}
            style={{
                color: "white",
                textDecoration: "none",
                fontSize: "16pt",
                margin: "0",
            }}
        />
    );
};

export default MenuItem;
