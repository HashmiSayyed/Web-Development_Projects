import React from 'react';

function Footer() {
    let t = new Date();
    return <footer><p>copyright {t.getFullYear()}</p></footer>
}

export default Footer;