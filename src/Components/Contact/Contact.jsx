import React, { useEffect } from 'react';

// Icons
import { UilWhatsapp, UilHouseUser, UilPhone } from '@iconscout/react-unicons';

const Contact = () => {
    return (
        <div id='contact'>
            <div id="contato" className="section wf-section">
                <div className="wrapper">
                    <div className="intro small-margin">
                        <p className="title">Contato</p>
                        <h2 className='ok'>Entre em contato conosco <br/> e solicite um orçamento</h2>
                        <div className="divider"></div>
                    </div>
                    <div className="features-v2">
                        <div className="feature-v2">
                            <div className="icon ghost left"><UilWhatsapp /></div>
                            <div className="feature-side-info">
                                <h5>Fale conosco pelo WhatsApp</h5>
                                <div className="divider margin-v2"></div>
                                <p className="paragraph-small text-grey">
                                    <a href="" className="link-2">(99) 99999-9999</a>
                                </p>
                            </div>
                        </div>
                        <div className="feature-v2">
                            <div className="icon ghost left"><UilPhone /></div>
                            <div className="feature-side-info">
                                <h5>Ligue para nós</h5>
                                <div className="divider margin-v2"></div>
                                <p className="paragraph-small text-grey">
                                    <a href="tel:49988213043" className="link-2">(99) 99999-9999</a>
                                </p>
                            </div>
                        </div>
                        <div className="feature-v2">
                            <div className="icon ghost left"><UilHouseUser /></div>
                            <div className="feature-side-info">
                                <h5>Faça-nos uma visita</h5>
                                <div className="divider margin-v2"></div>
                                <p className="paragraph-small text-grey">
                                    <a href="https://goo.gl/maps/DkuswLAHFVmkgJ4d7" target="_blank" className="link-2">Rua tatatatata</a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;
