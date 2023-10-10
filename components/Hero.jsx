import createGlobe from "cobe";
import { useEffect, useRef } from "react";
import { useAuth } from "@hellocoop/nextjs";

export default function Hero() {
    const { auth: { name } } = useAuth()
    return (
        <section>
            <h1 className="text-[5vw] xs:text-2xl italic">Add login and registration in seconds</h1>
            <section className="relative h-64 bg-no-repeat bg-center bg-contain flex items-center justify-center my-16">
                <p className="z-20 inline-flex items-center text-[4vw] xs:text-2xl font-mono" style={{mixBlendMode: "difference"}}>
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
      diffuse: 1.2,
      mapSamples: 16000,
      mapBrightness: 6,
      baseColor: [0.3, 0.3, 0.3],
      markerColor: [0.1, 0.8, 1],
      glowColor: [1, 1, 1],
      markers: [
        // longitude latitude
        // { location: [37.7595, -122.4367], size: 0.03 },
        // { location: [40.7128, -74.006], size: 0.1 }
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
