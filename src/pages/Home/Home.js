import {useEffect, useState} from "react";
import {Particles, initParticlesEngine} from "@tsparticles/react";
import {loadSlim} from "@tsparticles/slim";

import particlesConfig from '../../assets/json/particles.json';

import './Home.css';

function Home() {
    const [init, setInit] = useState(false);

    useEffect(() => {
        initParticlesEngine(async (engine) => {
            await loadSlim(engine);
        }).then(() => {
            setInit(true);
        });
    }, []);

    const particlesLoaded = (container) => {
        console.log(container);
    };

    return (
        <div className="App">
            <Particles
                data-test-id={'particles'}
                id="tsparticles"
                particlesLoaded={particlesLoaded}
                options={particlesConfig}
            />
        </div>
    );
}

export default Home;
