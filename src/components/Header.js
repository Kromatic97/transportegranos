import React from 'react';

const Header = () => {
    return (
        <header style={styles.header}>
            <h1 style={styles.title}>TRANSPOGRAN S.A.</h1>
        </header>
    );
};

const styles = {
    header: {
        backgroundColor: '#4CAF50', // Color verde
        padding: '10px 20px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        color: '#fff',
        fontSize: '2rem',
        margin: 0,
    },
};

export default Header;
