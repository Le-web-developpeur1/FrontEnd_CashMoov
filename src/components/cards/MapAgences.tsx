// import { useEffect, useRef } from "react";
// import mapboxgl from "mapbox-gl";

// export default function MapAgences() {
//   const mapContainer = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     if (!mapContainer.current) return;

//     mapboxgl.accessToken = import.meta.env.VITE_MAPBOX_TOKEN;

//     const map = new mapboxgl.Map({
//       container: mapContainer.current,
//       style: import.meta.env.VITE_MAPBOX_STYLE_URL,
//       center: [-13.6878, 9.6412], 
//       zoom: 12,
//     });

//     map.on("click", "agences-6cqpi8", (e) => {
//       if (!e.features || e.features.length === 0) return;
      
//       const props = e.features[0].properties as {
//         name: string;
//         city: string;
//         phone: string;
//       };

//       new mapboxgl.Popup()
//         .setLngLat(e.lngLat)
//         .setHTML(`
//           <strong>${props.name}</strong><br>
//           Ville : ${props.city}<br>
//           Téléphone : ${props.phone}
//         `)
//         .addTo(map);
//     });

//     return () => map.remove();
//   }, []);

//   return (
//     <div className="w-full flex justify-center py-8">
//       <div
//         ref={mapContainer}
//         className="w-full max-w-6xl rounded-xl shadow-lg"
//         style={{ height: "600px" }}
//       />
//     </div>
//   );
// }
