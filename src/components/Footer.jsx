import React from "react";

const date = new Date;
const yr = date.getFullYear();

function Footer(){
    return(
        <footer>
            <p>Copyright ⓒ Giovani Pivato {yr}</p>
            </footer>
    );
}

export default Footer;