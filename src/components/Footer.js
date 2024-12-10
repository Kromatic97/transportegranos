import React from 'react';

const Footer = () => {
    return (
        <footer style={styles.footer}>
            <p style={styles.text}>
                © {new Date().getFullYear()} Transpogran. Todos los derechos reservados.
            </p>
        </footer>
    );
};

const styles = {
    footer: {
        backgroundColor: '#333', // Color oscuro
        color: '#fff',
        textAlign: 'center',
        padding: '10px 0',
        position: 'fixed',
        bottom: 0,
        left: 0,
        width: '100%',
        boxShadow: '0 -2px 5px rgba(0, 0, 0, 0.2)',
    },
    text: {
        fontSize: '0.9rem',
        margin: 0,
    },
};

export default Footer;
