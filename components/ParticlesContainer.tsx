import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import {
    type Container,
    type ISourceOptions,
} from "@tsparticles/engine";
import { loadFull } from "tsparticles";

const ParticlesContainer = () => {
  const [init, setInit] = useState(false);
  useEffect(() => {
      initParticlesEngine(async (engine) => {
          await loadFull(engine);
      }).then(() => {
          setInit(true);
      });
  }, []);

  const particlesLoaded = async (container?: Container): Promise<void> => {
      console.log(container);
  };

  const options: ISourceOptions = useMemo(
      () => ({
          fullScreen: {
              enable: true // Ubah ini menjadi true
          },
          background: {
              color: {
                  value: "",
              },
          },
          fpsLimit: 120,
          interactivity: {
              events: {
                  onClick: {
                      enable: false,
                      mode: "push",
                  },
                  onHover: {
                      enable: true,
                      mode: "repulse",
                  },
                  resize: {
                      enable: true
                  }
              },
              modes: {
                  push: {
                      quantity: 90,
                  },
                  repulse: {
                      distance: 200,
                      duration: 0.4,
                  },
              },
          },
          particles: {
              color: {
                  value: "#e68e2e",
              },
              links: {
                  color: "#f5d393",
                  distance: 150,
                  enable: true,
                  opacity: 0.5,
                  width: 1,
              },
              collisions: {
                  enable: true
              },
              move: {
                  direction: 'none',
                  enable: true,
                  outModes: {
                      default: 'bounce',
                  },
                  random: false,
                  speed: 0.5,
                  straight: false,
              },
              number: {
                  density: {
                      enable: true,
                      area: 800 // Ubah ini untuk menyesuaikan dengan ukuran layar
                  },
                  value: 300,
              },
              opacity: {
                  value: 0.5,
              },
              shape: {
                  type: "circle",
              },
              size: {
                  value: { min: 1, max: 5 },
              },
          },
          detectRetina: true,
      }),
      []
  );

  if (init) {
      return (
          <Particles
              className="w-full h-full fixed top-0 left-0" // Ubah ini untuk memastikan elemen mengambil seluruh layar
              id="tsparticles"
              particlesLoaded={particlesLoaded}
              options={options}
          />
      );
  }

  return <></>;
}

export default ParticlesContainer