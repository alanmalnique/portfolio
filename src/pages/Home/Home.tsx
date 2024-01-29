import { useEffect, useState } from "react";
import { Particles, initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

import particlesConfig from '@/assets/json/particles.json';

import './Home.scss';

function Home() {

    const [, setInit] = useState(false);

    useEffect(() => {
        initParticlesEngine(async (engine) => {
            await loadSlim(engine);
        }).then(() => {
            setInit(true);
        });
    }, []);

    return (
        <div className="App">
            <Particles
                data-test-id={'particles'}
                id="tsparticles"
                options={particlesConfig}
            />
        </div>
    );
}

export default Home;