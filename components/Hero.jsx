import createGlobe from "cobe";
import { useEffect, useRef } from "react";
import Image from "next/image";

export default function Hero({isLoggedIn, name}) {
    return (
        <section>
            <h1 className="text-[5vw] xs:text-2xl italic">Add login and registration in seconds</h1>
            <div className="my-6">
                {!isLoggedIn && <h2 className="text-[12vw] xs:text-[3.42rem]">Try out the demo</h2>}
                
            </div>
            <div className="text-left mx-auto w-64 mb-6 pl-4">
                {!isLoggedIn && (
                    <>
                        <h3>You will be prompted to provide:</h3>
                        <ul className="list-disc list-inside">
                            <li className="font-semibold">Name</li>
                            <li className="font-semibold">Verified Email</li>
                            <li className="font-semibold">Profile Picture</li>
                        </ul>
                    </>
                )}
            </div>
            {isLoggedIn && (
                <>
                    <section className="relative h-64 bg-no-repeat bg-center bg-contain flex items-center justify-center text-[4vw] xs:text-2xl font-mono my-16">
                        <span className="z-20" style={{mixBlendMode: "difference"}}>Say Hellō to a Co-operative World<span className="blinker"></span></span>
                        <Globe/>
                    </section>

                    <h1 className="text-2xl">{name}</h1>
                </>
            )}
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
        style={{ width: 375, height: 375, maxWidth: "100%", aspectRatio: 1, margin: 'auto', position: 'absolute', zIndex: 10 }}
    />
  )
}
