import { useEffect, useRef } from "react";
import mapboxgl from "mapbox-gl";

export default function MapAgences() {
  const mapContainer = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mapContainer.current) return;

    mapboxgl.accessToken = import.meta.env.VITE_MAPBOX_TOKEN;

    const map = new mapboxgl.Map({
      container: mapContainer.current,
      style: import.meta.env.VITE_MAPBOX_STYLE_URL,
      center: [-13.6878, 9.6412], 
      zoom: 6, 
      projection: 'globe', 
    });

    map.on('style.load', () => {
      map.setFog({
        color: 'rgb(186, 210, 235)',
        'high-color': 'rgb(36, 92, 223)',
        'horizon-blend': 0.02,
        'space-color': 'rgb(11, 11, 25)',
        'star-intensity': 0.6
      });
    });

    map.on("load", () => {
      // Écouter tous les clics
      map.on("click", (e) => {
        const features = map.queryRenderedFeatures(e.point);
        
        const agenceFeature = features.find(f => 
          (f.layer && (f.layer.id.includes('agence') || f.layer.id.includes('Agence'))) ||
          (f.properties && (f.properties.name || f.properties.city))
        );

        if (agenceFeature && agenceFeature.properties) {
          const props = agenceFeature.properties;
          
          const popupHTML = `
            <div style="font-family: Arial, sans-serif; min-width: 250px; padding: 8px;">
              <h3 style="margin: 0 0 12px 0; font-size: 18px; font-weight: bold; color: #2A4793;">
                ${props.name || props.agence || 'Agence Cashmoov'}
              </h3>
              ${props.agence ? `<p style="margin: 8px 0;"><strong>Agence :</strong> ${props.agence}</p>` : ''}
              ${props.region ? `<p style="margin: 8px 0;"><strong>Région :</strong> ${props.region}</p>` : ''}
              ${props.city ? `<p style="margin: 8px 0;"><strong>Ville :</strong> ${props.city}</p>` : ''}
              ${props.address ? `<p style="margin: 8px 0;"><strong>Adresse :</strong> ${props.address}</p>` : ''}
              ${props.phone ? `<p style="margin: 8px 0;"><strong>Téléphone :</strong> <a href="tel:${props.phone}" style="color: #2A4793;">${props.phone}</a></p>` : ''}
            </div>
          `;

          new mapboxgl.Popup({
            closeButton: true,
            closeOnClick: false,
            maxWidth: '350px',
            offset: 25
          })
            .setLngLat(e.lngLat)
            .setHTML(popupHTML)
            .addTo(map);
        }
      });

      // Curseur pointer au survol
      map.on('mousemove', (e) => {
        const features = map.queryRenderedFeatures(e.point);
        const hasAgence = features.some(f => 
          (f.layer && (f.layer.id.includes('agence') || f.layer.id.includes('Agence'))) ||
          (f.properties && f.properties.name)
        );
        map.getCanvas().style.cursor = hasAgence ? 'pointer' : '';
      });
    });

    return () => map.remove();
  }, []);

  return (
    <div className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Nos agences en Guinée
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Retrouvez nos points de service partout en Guinée. Cliquez sur les marqueurs pour voir les détails de chaque agence.
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-[#2A4793] rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-[#F7CE47]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">Plus de 500 points de service</h3>
                  <p className="text-gray-600 text-sm">Présents dans toutes les régions du pays</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-[#2A4793] rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-[#F7CE47]" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">Service client disponible</h3>
                  <p className="text-gray-600 text-sm">Contactez-nous pour toute information</p>
                </div>
              </div>
            </div>
          </div>

          <div
            ref={mapContainer}
            className="w-full h-[400px] sm:h-[500px] rounded-2xl shadow-2xl overflow-hidden border-4 border-gray-200"
          />
        </div>
      </div>
    </div>
  );
}
