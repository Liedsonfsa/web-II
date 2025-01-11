import React from 'react';
import Header from './Header';
import Mapa from './Mapa';
import Destaques from './Destaques';
import Footer from './Footer';

const App = () => {
    return (
        <div>
            <Header />
            <main>
                <Mapa />
                <Destaques />
            </main>
            <Footer />
        </div>
    );
};

export default App;
