import React from 'react'
import './styles.css';
const Preguntas = () => {
    let question = document.querySelectorAll('.question');
    let btnDropdown = document.querySelectorAll('.question .more')
    let answer = document.querySelectorAll('.answer');
    let parrafo = document.querySelectorAll('.answer p');

    for (let i = 0; i < btnDropdown.length; i++) {

        let altoParrafo = parrafo[i].clientHeight;
        let switchc = 0;

        btnDropdown[i].addEventListener('click', () => {

            if (switchc == 0) {

                answer[i].style.height = `${altoParrafo}px`;
                question[i].style.marginBottom = '20px';
                btnDropdown[i].innerHTML = '<i>-</i>';
                switchc++;

            }

            else if (switchc == 1) {

                answer[i].style.height = `0`;
                question[i].style.marginBottom = '0';
                btnDropdown[i].innerHTML = '<i>+</i>';
                switchc--;

            }

        })

    }
    return (
        <div className="preguntas">
            <div className="row">
                <div className="preguntas-faq">
                    <div className="title-faq">
                        <h3>Preguntas Frecuentes</h3>
                    </div>

                    <div className="item-faq">
                        <div className="question">
                            <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit ? </h3>
                            <div className="more"><i>+</i></div>
                        </div>
                        <div className="answer">
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores repellat vitae tenetur eos doloremque. Tempora sed ut consequatur laboriosam sit mollitia beatae error, omnis deleniti, earum eius odit. Doloribus, nesciunt.</p>
                        </div>
                    </div>

                    <div className="item-faq">
                        <div className="question">
                            <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit ? </h3>
                            <div className="more"><i>+</i></div>
                        </div>
                        <div className="answer">
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores repellat vitae tenetur eos doloremque. Tempora sed ut consequatur laboriosam sit mollitia beatae error, omnis deleniti, earum eius odit. Doloribus, nesciunt.</p>
                        </div>
                    </div>

                    <div className="item-faq">
                        <div className="question">
                            <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit ? </h3>
                            <div className="more"><i>+</i></div>
                        </div>
                        <div className="answer">
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores repellat vitae tenetur eos doloremque. Tempora sed ut consequatur laboriosam sit mollitia beatae error, omnis deleniti, earum eius odit. Doloribus, nesciunt.</p>
                        </div>
                    </div>

                    <div className="item-faq">
                        <div className="question">
                            <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit ? </h3>
                            <div className="more"><i>+</i></div>
                        </div>
                        <div className="answer">
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores repellat vitae tenetur eos doloremque. Tempora sed ut consequatur laboriosam sit mollitia beatae error, omnis deleniti, earum eius odit. Doloribus, nesciunt.</p>
                        </div>
                    </div>

                    <div className="item-faq">
                        <div className="question">
                            <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit ? </h3>
                            <div className="more"><i>+</i></div>
                        </div>
                        <div className="answer">
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores repellat vitae tenetur eos doloremque. Tempora sed ut consequatur laboriosam sit mollitia beatae error, omnis deleniti, earum eius odit. Doloribus, nesciunt.</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Preguntas