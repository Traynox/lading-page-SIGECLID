import React, { useState } from 'react';
import './styles.css';

const Preguntas = () => {
    const [selected, setSelected] = useState(null)
    const toggle = (i) => {
        if (selected == i) {
            return setSelected(null);
        }
        setSelected(i);
    }
    return (
        <div className="preguntas">
            <div className="row">
                <div className="preguntas-faq">
                    <div className="title-faq">
                        <h3>Preguntas Frecuentes</h3>
                    </div>

                    {data.map((item, i) => (
                        <div key={i} className="item-faq">
                            <div className="question" onClick={() => toggle(i)}>
                                <h3>{item.question}</h3>
                                <div className="more" ><i>{selected == i ? '-' : '+'}</i></div>
                            </div>
                            <div className={selected == i ? "answer show" : "answer"}>
                                <p>{item.answer}</p>
                            </div>
                        </div>
                    ))}



                </div>
            </div>
        </div>
    )

}
const data = [
    {
        question: '¿Qué es SIGECLID?',
        answer: 'SIGECLID es un sistema de software destinado a la gestión y control de clínicas dentales, cuyo fin es agilizar los procesos, proporcionar efectividad, eficiencia, eficacia y calidad de servicios.'
    },
    {
        question: '¿Necesito una computadora para sacarle provecho a SIGECLID?',
        answer: 'No es necesaria. Usted puede hacer uso de la versión web desde su celular.'
    },
    {
        question: '¿Cómo puedo saber cuál plan de SIGECLID me conviene?',
        answer: `SIGECLID ofrece distintos planes para cada una de las empresas interesadas en adquirir una plataforma de gestión de tareas para una clínica dental.
        1. Básico.
        2. Premium.
        
        Saber cuál plan de SIGECLID le conviene depende de los beneficios que necesite su empresa y de otras necesidades, esto puede verlo y analizarlo en el apartado de planes. Si no se encuentra seguro puede contactar y recibir una asesoría con uno de nuestros expertos.`
    },
    {
        question: '¿Por qué SIGECLID es la solución que estoy buscando?',
        answer: `Es un sistema ágil, es decir, SIGECLID permite optimizar y organizar el control de sus tareas relevantes, ya sea gestión de citas, control de expedientes y empleados, manejo de tratamientos y reportes, entre otros, lo cual supone un acceso rápido y sencillo a los datos relacionados a estas tareas, además, usted tendrá acceso a toda la información actualizada en el momento que lo desee.
        Plataforma que proporciona una interfaz amigable con el usuario, lo que la vuelve fácil de usar.  
        Buen servicio al cliente, siempre disponible, para solventar todas las dudas que tenga sobre la plataforma y sus herramientas.
        Contar con SIGECLID, puede influir positivamente en los objetivos de administración que desee alcanzar dentro de su empresa.`
    }
]

export default Preguntas