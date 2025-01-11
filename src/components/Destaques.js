import React from 'react';

const Destaques = () => {
    return (
        <section className="highlights">
            <h2>Destaques</h2>
            <div className="highlight-container">
                <div className="highlight-item">
                    <img src="https://via.placeholder.com/300x200?text=Ponto+1" alt="Ponto Turístico 1" />
                    <h3>Ponto Turístico 1</h3>
                    <p>Descrição do ponto turístico 1.</p>
                </div>
                <div className="highlight-item">
                    <img src="https://via.placeholder.com/300x200?text=Ponto+2" alt="Ponto Turístico 2" />
                    <h3>Ponto Turístico 2</h3>
                    <p>Descrição do ponto turístico 2.</p>
                </div>
                <div className="highlight-item">
                    <img src="https://via.placeholder.com/300x200?text=Ponto+3" alt="Ponto Turístico 3" />
                    <h3>Ponto Turístico 3</h3>
                    <p>Descrição do ponto turístico 3.</p>
                </div>
                <div className="highlight-item">
                    <img src="https://via.placeholder.com/300x200?text=Ponto+4" alt="Ponto Turístico 4" />
                    <h3>Ponto Turístico 4</h3>
                    <p>Descrição do ponto turístico 4.</p>
                </div>
            </div>
        </section>
    );
};

export default Destaques;
