import './css/Reset.css'
import './css/Jobs/Jobs.css'

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
                        <a>
                            Menu
                        </a>
                    </div>
                </div>
            </header>
        </>
    )

}

export default Jobs
