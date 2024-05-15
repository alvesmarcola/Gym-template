import React from 'react'

const Header = () => {
    return (
        <div id='main'>
            <div className='header-heading'>
                <h2 className='header-h2'>Começe agora</h2>
                <h1 className='header-h1'>Uma mudança <span className='header-span'>em você!</span></h1>
                <p className='details'> Só a <span className='mmt'>MMT Fitness </span> reúne tudo que você precisa para não ter mais desculpas para não ir treinar. </p>
                <div className='header-btns'>
                    <a href="https://api.whatsapp.com/message/LWULL3SFWIBWA1?autoload=1&app_absent=0" className='header-btn'> Contato</a>
                </div>
            </div>
        </div>
    )
}

export default Header
