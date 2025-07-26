import './css/Reset.css'
import './css/Jobs/Header.css'
import './css/Jobs/Main.css'

function Jobs() {
    return (
        <>
            <header>
                <div className='navBar'>
                    <div className='NameAndButtons'>
                        <div>
                            <h1>thoca</h1>
                        </div>
                        <div className='buttonsJobsCV'>
                            <div>
                                <button className='button1'>
                                    <span>
                                        Anunciar vagas
                                    </span>
                                </button>
                                <button className='button2'>
                                    <span>
                                        Cadastrar CV grátis
                                    </span>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className='LoginMenu'>
                        <a>
                            Entrar
                        </a>
                        <a style={{ color: 'rgb(66, 66, 66)' }}>
                            Menu
                        </a>
                    </div>
                </div>
            </header>

            <main>
                <div className='jobSearch'>
                    <div className='allOptions'>
                        <div className='options'>
                            <div className='boxSearchsAndButton'>
                                <div className='boxSearch'>
                                    <input
                                        type="search"
                                        placeholder="Cargo ou palavra-chave"
                                        style={{ borderRadius: '9px 0px 0px 9px' }}
                                    />
                                    <input
                                        type="search" placeholder="Cidade, estado ou região"
                                        style={{ borderRadius: '0px 9px 9px 0px' }}
                                    />
                                </div>
                                <div className='boxButton'>
                                    <button>
                                        <span>Buscar</span>
                                    </button>
                                </div>
                            </div>
                            <div className='filters'>
                                <div>
                                    <span>
                                        Salário
                                    </span>
                                </div>
                                <div style={{ width: '9.5vw' }}>
                                    <span>
                                        Distância (Km)
                                    </span>
                                </div>
                                <div style={{ width: '8.5vw' }}>
                                    <span>
                                        Modalidade
                                    </span>
                                </div>
                                <div>
                                    <span>
                                        Setor
                                    </span>
                                </div>
                                <div>
                                    <span>
                                        Data
                                    </span>
                                </div>
                                <div style={{ width: '8.5vw' }}>
                                    <span>
                                        Contrato
                                    </span>
                                </div>
                                <div style={{ width: '5vw' }}>
                                    <span>
                                        PCD
                                    </span>
                                </div>
                                <span 
                                style={{ fontSize: '.8rem', 
                                color: 'rgb(89, 89, 89)', cursor: 'pointer' }}>
                                    Limpar filtros
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='jobs'>
                    
                </div>
            </main>
        </>
    )

}

export default Jobs
