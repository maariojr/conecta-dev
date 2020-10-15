import React from 'react'

function Header(){
    return(
        <header className="header">
            <div className="toolbar">
                <div>
                    <span>Conecta Dev</span>
                </div>

                <div>
                    <button>Novo post</button>

                    <span>img1</span>
                    <span>img2</span>
                </div>
            </div>
        </header>
    )
}

export default Header;