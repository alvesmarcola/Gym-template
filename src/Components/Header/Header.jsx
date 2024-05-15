import React from 'react'

const Header = () => {
    return (
        <div id='main'>
            <div className='header-heading'>
                <h2 className='header-h2'>Começe agora</h2>
                <h1 className='header-h1'>Uma mudança <span className='header-span'>Fitness</span></h1>
                <p className='details'> Só a ... reúne tudo que você precisa para não ter mais desculpas para não ir treinar. </p>
                <div className='header-btns'>
                    <a href="#" className='header-btn'> Contato</a>
                </div>
            </div>
        </div>
    )
}

export default Header
