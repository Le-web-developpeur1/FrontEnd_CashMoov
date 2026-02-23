import { useEffect } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { agences } from "@/agences";

const MapAgences = () => {
    useEffect(() => {
        const kaloum = agences.find(a => a.name.includes("Kaloum"));
        const map = L.map("map").setView([kaloum?.lat || 9.6412, kaloum?.lng || -13.5784], 14);
        
        L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
            attribution: "© OpenStreetMap contributors",
        }).addTo(map);

        agences.forEach((agence) => {
            L.marker([agence.lat, agence.lng])
              .addTo(map)
              .bindPopup(
                `<b>${agence.name}</b><br/>${agence.city}<br/>Tel: ${agence.phone}`
              );
        });

        return () => {
            map.remove();
        }

    }, []);

    return (
        <div style={{ display: "flex", justifyContent: "center", marginTop: "100px", marginBottom: "50px" }}>
          <div
            id="map"
            style={{
              height: "500px",
              width: "100%",
              maxWidth: "1200px",
              borderRadius: "8px",
              overflow: "hidden",
              position: "relative",
              zIndex: 1
            }}
          ></div>
        </div>
      );
      
};

export default MapAgences;