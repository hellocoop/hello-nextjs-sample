'use client'

import createGlobe from "cobe";
import { useEffect, useRef } from "react";
import { useAuth } from "@hellocoop/nextjs/react";

export default function Hero() {
    const { auth: { name } } = useAuth()
    return (
        <section>
            <h1 className="text-2xl italic font-semibold">Add login and registration in seconds</h1>
            <section className="relative h-64 bg-no-repeat bg-center bg-contain flex items-center justify-center my-16">
                <p className="z-20 inline-flex items-center text-2xl font-semibold font-mono" style={{mixBlendMode: "difference"}}>
                  <span className="text-gray">Say Hellō to a Co-operative World</span>
                  <span className="blinker"></span>
                </p>
                <Globe/>
            </section>
            <h1 className="text-2xl">{name}</h1>
        </section>
    )
}


function Globe() {
  const canvasRef = useRef();

  useEffect(() => {
    let phi = 0;

    const globe = createGlobe(canvasRef.current, {
      devicePixelRatio: 2,
      width: 375 * 2,
      height: 375 * 2,
      phi: 0,
      theta: 0,
      dark: 1,
      diffuse: 2,
      mapSamples: 16000,
      mapBrightness: 6,
      baseColor: [0.3, 0.3, 0.3],
      markerColor: [1, 1, 1],
      glowColor: [1, 1, 1],
      markers: [
        { location: [47.6061, -122.3328], size: 0.035 }, //Seattle
        { location: [8.5241, 76.9366], size: 0.035 }, //Trivandrum
        { location: [51.5072, 0.1276], size: 0.035 }, //London
        { location: [36.7783, -119.4179], size: 0.035 }, //California
        { location: [35.6762, 139.6503], size: 0.035 }, //Tokyo
        { location: [25.2048, 55.2708], size: 0.035 }, //Dubai
        { location: [-41.2924, 174.7787], size: 0.035 }, //Wellington
        { location: [-33.868, 151.209], size: 0.035 }, //Sydney
        { location: [43.6532, -79.3832], size: 0.035 }, //Toronto
        { location: [19.0760, 72.8777], size: 0.035 }, //Mumbai
        { location: [40.7128, -74.0060], size: 0.035 }, //New York
        { location: [1.3521, 103.8198], size: 0.035 }, //Singapore
        { location: [6.5244, 3.3792], size: 0.035 }, //Lagos
        { location: [31.2001, 29.9187], size: 0.035 }, //Alexandria
        { location: [-33.9249, 18.4241], size: 0.035 }, //Cape Town
        { location: [59.9311, 30.3609], size: 0.035 }, //St. Petersburg
        { location: [-34.6037, -58.3816], size: 0.035 }, //Buenos Aires
        { location: [37.5519, 126.9918], size: 0.035 }, //Seoul
        { location: [-23.5558, -46.6396], size: 0.035 }, //São Paulo
        { location: [23.1136, -82.3666], size: 0.035 }, //Havana
        { location: [52.5200, 13.4050], size: 0.035 }, //Berlin
        { location: [-1.2921, -36.8219], size: 0.035 }, //Nairobi
        { location: [-12.0464, -77.0428], size: 0.035 }, //Lima
        { location: [9.0765, 7.3986], size: 0.035 }, //Abuja
      ],
      onRender: (state) => {
        // Called on every animation frame.
        // `state` will be an empty object, return updated params.
        state.phi = phi;
        phi += 0.005;
      }
    });

    return () => {
      globe.destroy();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{ width: 375, height: 375, maxWidth: "100%", aspectRatio: 1, margin: 'auto', position: 'absolute', zIndex: 10, borderRadius: '50%' }}
    />
  )
}
