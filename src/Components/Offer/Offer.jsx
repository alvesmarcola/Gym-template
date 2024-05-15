import React from 'react'
import { UilCheckCircle } from '@iconscout/react-unicons'

import image from '../../images/about.png'

const Offer = () => {
  return (
    <div id="offer" className="section dark-mask wf-section">
      <div className="wrapper">
        <div className="side-blocks mobile-reverse">
          <div className="side-block no-padding-left">
            <div className="side-info place-top">
              <div className="title white">por que nós</div>
              <h2 className='special-h2'>Por que escolher a gente?</h2>
              <div className="divider white"></div>
              <p>Com a compreensão de que cada indivíduo é único, a academia oferece um atendimento personalizado para que cada aluno possa alcançar sua melhor forma no seu próprio tempo. A equipe de profissionais trabalha em conjunto com os alunos para desenvolver programas de treinamento que atendam às necessidades e objetivos específicos.</p>
              <div className="side-features-v2">
                <div className="side-feature-v2">
                  <i className="checkmark-icon"><UilCheckCircle /></i>
                  <div className="feature-side-info">
                    <h5>Personal Trainer</h5>
                    <p className="paragraph-small">Os alunos podem desfrutar de um acompanhamento individualizado para garantir que seus objetivos sejam alcançados da forma mais eficiente e segura possível.</p>
                  </div>
                </div>
                <div className="side-feature-v2">
                  <i className="checkmark-icon"><UilCheckCircle /></i>
                  <div className="feature-side-info">
                    <h5>Equipamentos</h5>
                    <p className="paragraph-small">Oferece diversos equipamentos de treinamento, incluindo máquinas de musculação, esteiras, bicicletas ergométricas e equipamentos de treinamento funcional.</p>
                  </div>
                </div>
              </div>
              <a target="_blank" href="https://api.whatsapp.com/send?phone=5549988213043&amp;text=Ol%C3%A1!%20Gostaria%20de%20fazer%20a%20minha%20matr%C3%ADcula.%20" data-w-id="1bfd7fce-0a84-01b2-b4de-1248270e4be2" className="button white w-inline-block">
                <div>Fale conosco</div>
                <div style={{ width: '0px' }} className="button-arrow-space">
                  <img src={image } alt="" className="button-arrow-icon big" style={{ opacity: '0' }} />
                </div>
              </a>
            </div>
          </div>
          <div className="side-block small-padding-side">
            <img
              src="images/POr-que-Academia-Sport-e-Saude.jpg"
              loading="lazy"
              sizes="(max-width: 479px) 93vw, (max-width: 991px) 96vw, 44vw"
              srcSet=""
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Offer
