import { useEffect, useRef } from 'react';
import Globe from 'globe.gl';

export default function Globe3D() {
  const globeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!globeRef.current) return;

    const globe: any = Globe()(globeRef.current)
      .globeImageUrl('//unpkg.com/three-globe/example/img/earth-blue-marble.jpg')
      .bumpImageUrl('//unpkg.com/three-globe/example/img/earth-topology.png')
      .pointOfView({ lat: 20, lng: 0, altitude: 2 })
      .backgroundColor("#F9FAFB");

    globe.controls().autoRotate = false;

    const countriesCashMoov = [
      "Guinea",
      "Senegal",
      "Mali",
      "Ivory Coast",
      "Burkina Faso",
      "Togo",
      "Benin",
      "Niger"
    ];

    fetch('https://raw.githubusercontent.com/holtzy/D3-graph-gallery/master/DATA/world.geojson')
      .then(res => res.json())
      .then(world => {
        globe
          .polygonsData(world.features)
          .polygonCapColor(d =>
            countriesCashMoov.includes(d.properties.name)
              ? '#00C896'
              : '#E5E7EB'
          )
          .polygonSideColor(() => 'rgba(0,0,0,0.15)')
          .polygonStrokeColor(() => '#D1D5DB')
          .polygonAltitude(d =>
            countriesCashMoov.includes(d.properties.name) ? 0.03 : 0.01
          );
      });
  }, []);

  return (
    <div className="h-[700px] bg-white" ref={globeRef}></div>
  );
}
