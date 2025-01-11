import React, { useEffect, useState } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const Mapa = () => {
    const [map, setMap] = useState(null);

    useEffect(() => {
        if (!map) {
            const mapa = L.map('map').setView([-7.076, -41.469], 14);
            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                attribution: '&copy; OpenStreetMap contributors'
            }).addTo(mapa);
            setMap(mapa);

            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition((position) => {
                    const userPosition = [position.coords.latitude, position.coords.longitude];
                    mapa.setView(userPosition, 14);
                    L.marker(userPosition).addTo(mapa)
                        .bindPopup('Sua localização atual!')
                        .openPopup();
                }, () => {
                    alert('Não foi possível obter sua localização.');
                });
            } else {
                alert('Geolocalização não é suportada pelo seu navegador.');
            }
        }
    }, [map]);

    return (
        <div id="map" style={{ height: '500px', width: '100%' }}></div>
    );
};

export default Mapa;
