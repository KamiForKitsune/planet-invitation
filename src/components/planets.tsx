// components/Scene.js
import React from 'react';
import '../styles/planet.css'; // Assuming the CSS is saved as Scene.css

const Scene = () => (
    <>

        <div className='w-full flex justify-center'>

            {/* <ul className='text-white text-lg absolute left-32 top-96 w-full mt-20'>
                <li>Ven a comer torta</li>
                <li className='ml-2'>⛩ Lugar:En mi casa</li>
                <li className='ml-2'> 👹Motivo: Mi cumple, un año de Disfrute/Jolgorio </li>
                <li>Habrá torta, galletas y té</li>
                <li>Fecha: El 10 de agosto</li>
                <li className='text-xs'>PD: No es necesario traer regalo, ven a comer pastel nomáh</li>
            </ul> */}
            <p className='text-white mt-10 font-mono m-2'>
                Ven ven a comer torta
                <div className='text-sm'>🌠 Lugar:En mi casa</div>
                <div className='text-sm'>👹Motivo: Mi cumple, un año de Disfrute/Jolgorio </div>
                <div className='text-sm'>🐬A las... 17:00 </div>
            </p>

        </div>

        <div className="scene">
            <div className="scene_titanShadow" />
            <div className="t_wrap">
                <div className="scene_titan">
                    <div className="eyes">
                        <div className="eye eye--left" />
                        <div className="eye eye--right" />
                    </div>
                </div>
            </div>
            <div className="scene_saturn">
                <div className="scene_saturn__face">
                    <div className="face_clip">
                        <div className="eye eye--left" />
                        <div className="eye eye--right" />
                        <div className="mouth" />
                    </div>
                </div>
                <div className="scene_saturn__shadow" />
                <div className="scene_saturn__shadowRing" />
                <div className="scene_saturn__sparks">
                    {Array.from({ length: 20 }).map((_, i) => (
                        <div className="spark" key={i} />
                    ))}
                </div>
                <div className="scene_saturn__ring">
                    <div className="small">
                        {Array.from({ length: 40 }).map((_, i) => (
                            <div className="small_part" key={i} />
                        ))}
                    </div>
                    {Array.from({ length: 3 }).map((_, i) => (
                        <div className="layer" key={i}>
                            {Array.from({ length: 50 }).map((_, j) => (
                                <div className="layer_part" key={j} />
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </div>
        <div className="text-animation">
            <div className="text-wrapper">
                <h2>Kebins Birthday</h2>
                <h2>Kebins Birthday</h2>
            </div>
        </div>
    </>
);

export default Scene;
