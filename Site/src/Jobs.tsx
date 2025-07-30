import './css/Reset.css'
import './css/Header.css'
import './css/Main/JobSearch.css'
import './css/Main/Jobs.css'


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
                                    style={{
                                        fontSize: '.8rem',
                                        color: 'rgb(89, 89, 89)', cursor: 'pointer'
                                    }}>
                                    Limpar filtros
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='jobs'>
                    <div className='contentJobs'>
                        <div className='content'>
                            <div className='contentOne'>
                                <div className='one'>
                                    <span>
                                        Vagas de emprego no Brasil
                                    </span>
                                    <span>
                                        627.615 resultados
                                    </span>
                                    <div>
                                        <span style={{
                                            color: 'rgb(37, 87, 167)',
                                            textDecoration: 'underline',
                                            cursor: 'pointer',
                                            fontWeight: 'bold'
                                        }}>
                                            Cadastre-se ou faça login para ver todas as vagas
                                        </span>
                                        <span style={{ fontSize: '.8rem' }}>
                                            Ordenar por: {' '}
                                            <span style={{
                                                color: 'rgb(37, 87, 167)',
                                                cursor: 'pointer',
                                            }}>mais relevantes</span>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className='contentSecond'>
                                <div className='second'>
                                    <div className='box-jobs'>
                                        <div className='aboutJobs'>
                                            <div className='title'>
                                                <h1>ANALISTA DE GROWTH SENIOR</h1>
                                                <h2 style={{color: 'rgb(89, 89, 89)'}}>PROMPT</h2>
                                            </div>
                                            <div className='moreAbout'>
                                                <div>
                                                    <span>De R$ 9.001,00 a R$ 10.000,00</span>
                                                    <span style={{fontWeight: 'bold'}}>
                                                        1 vaga: {' '}
                                                        <span style={{fontWeight: 'normal'}}>
                                                            São Paulo - SP (1)
                                                        </span>
                                                    </span>
                                                    <span style={{fontSize: '.9rem'}}>Publicada hoje</span>
                                                </div>
                                            </div>
                                            <div className='description'>
                                                <p style={{}}>Realizar cotações, negociações e processos de compra com fornecedores de embalagens,
                                                    materiais operacionais e serviços logísticos;
                                                    Gerar e acompanhar pedidos de compra (até a…
                                                </p>
                                                <span style={{
                                                    color: 'rgb(37, 87, 167)', 
                                                    fontWeight: 'bold', fontSize: '.9rem', cursor: 'pointer'}}>
                                                    continuar lendo
                                                </span>
                                            </div>
                                            <div className='sendApplication'>
                                                <button>
                                                    <span>
                                                        Enviar Candidatura Fácil
                                                    </span>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='box-jobs'>
                                        <div className='aboutJobs'>
                                            <div className='title'>
                                                <h1>ANALISTA DE GROWTH SENIOR</h1>
                                                <h2 style={{color: 'rgb(89, 89, 89)'}}>PROMPT</h2>
                                            </div>
                                            <div className='moreAbout'>
                                                <div>
                                                    <span>De R$ 9.001,00 a R$ 10.000,00</span>
                                                    <span style={{fontWeight: 'bold'}}>
                                                        1 vaga: {' '}
                                                        <span style={{fontWeight: 'normal'}}>
                                                            São Paulo - SP (1)
                                                        </span>
                                                    </span>
                                                    <span style={{fontSize: '.9rem'}}>Publicada hoje</span>
                                                </div>
                                            </div>
                                            <div className='description'>
                                                <p style={{}}>Realizar cotações, negociações e processos de compra com fornecedores de embalagens,
                                                    materiais operacionais e serviços logísticos;
                                                    Gerar e acompanhar pedidos de compra (até a…
                                                </p>
                                                <span style={{
                                                    color: 'rgb(37, 87, 167)', 
                                                    fontWeight: 'bold', fontSize: '.9rem', cursor: 'pointer'}}>
                                                    continuar lendo
                                                </span>
                                            </div>
                                            <div className='sendApplication'>
                                                <button>
                                                    <span>
                                                        Enviar Candidatura Fácil
                                                    </span>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='box-jobs'>
                                        <div className='aboutJobs'>
                                            <div className='title'>
                                                <h1>ANALISTA DE GROWTH SENIOR</h1>
                                                <h2 style={{color: 'rgb(89, 89, 89)'}}>PROMPT</h2>
                                            </div>
                                            <div className='moreAbout'>
                                                <div>
                                                    <span>De R$ 9.001,00 a R$ 10.000,00</span>
                                                    <span style={{fontWeight: 'bold'}}>
                                                        1 vaga: {' '}
                                                        <span style={{fontWeight: 'normal'}}>
                                                            São Paulo - SP (1)
                                                        </span>
                                                    </span>
                                                    <span style={{fontSize: '.9rem'}}>Publicada hoje</span>
                                                </div>
                                            </div>
                                            <div className='description'>
                                                <p style={{}}>Realizar cotações, negociações e processos de compra com fornecedores de embalagens,
                                                    materiais operacionais e serviços logísticos;
                                                    Gerar e acompanhar pedidos de compra (até a…
                                                </p>
                                                <span style={{
                                                    color: 'rgb(37, 87, 167)', 
                                                    fontWeight: 'bold', fontSize: '.9rem', cursor: 'pointer'}}>
                                                    continuar lendo
                                                </span>
                                            </div>
                                            <div className='sendApplication'>
                                                <button>
                                                    <span>
                                                        Enviar Candidatura Fácil
                                                    </span>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='box-jobs'>
                                        <div className='aboutJobs'>
                                            <div className='title'>
                                                <h1>ANALISTA DE GROWTH SENIOR</h1>
                                                <h2 style={{color: 'rgb(89, 89, 89)'}}>PROMPT</h2>
                                            </div>
                                            <div className='moreAbout'>
                                                <div>
                                                    <span>De R$ 9.001,00 a R$ 10.000,00</span>
                                                    <span style={{fontWeight: 'bold'}}>
                                                        1 vaga: {' '}
                                                        <span style={{fontWeight: 'normal'}}>
                                                            São Paulo - SP (1)
                                                        </span>
                                                    </span>
                                                    <span style={{fontSize: '.9rem'}}>Publicada hoje</span>
                                                </div>
                                            </div>
                                            <div className='description'>
                                                <p style={{}}>Realizar cotações, negociações e processos de compra com fornecedores de embalagens,
                                                    materiais operacionais e serviços logísticos;
                                                    Gerar e acompanhar pedidos de compra (até a…
                                                </p>
                                                <span style={{
                                                    color: 'rgb(37, 87, 167)', 
                                                    fontWeight: 'bold', fontSize: '.9rem', cursor: 'pointer'}}>
                                                    continuar lendo
                                                </span>
                                            </div>
                                            <div className='sendApplication'>
                                                <button>
                                                    <span>
                                                        Enviar Candidatura Fácil
                                                    </span>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='box-jobs'>
                                        <div className='aboutJobs'>
                                            <div className='title'>
                                                <h1>ANALISTA DE GROWTH SENIOR</h1>
                                                <h2 style={{color: 'rgb(89, 89, 89)'}}>PROMPT</h2>
                                            </div>
                                            <div className='moreAbout'>
                                                <div>
                                                    <span>De R$ 9.001,00 a R$ 10.000,00</span>
                                                    <span style={{fontWeight: 'bold'}}>
                                                        1 vaga: {' '}
                                                        <span style={{fontWeight: 'normal'}}>
                                                            São Paulo - SP (1)
                                                        </span>
                                                    </span>
                                                    <span style={{fontSize: '.9rem'}}>Publicada hoje</span>
                                                </div>
                                            </div>
                                            <div className='description'>
                                                <p style={{}}>Realizar cotações, negociações e processos de compra com fornecedores de embalagens,
                                                    materiais operacionais e serviços logísticos;
                                                    Gerar e acompanhar pedidos de compra (até a…
                                                </p>
                                                <span style={{
                                                    color: 'rgb(37, 87, 167)', 
                                                    fontWeight: 'bold', fontSize: '.9rem', cursor: 'pointer'}}>
                                                    continuar lendo
                                                </span>
                                            </div>
                                            <div className='sendApplication'>
                                                <button>
                                                    <span>
                                                        Enviar Candidatura Fácil
                                                    </span>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='box-jobs'>
                                        <div className='aboutJobs'>
                                            <div className='title'>
                                                <h1>ANALISTA DE GROWTH SENIOR</h1>
                                                <h2 style={{color: 'rgb(89, 89, 89)'}}>PROMPT</h2>
                                            </div>
                                            <div className='moreAbout'>
                                                <div>
                                                    <span>De R$ 9.001,00 a R$ 10.000,00</span>
                                                    <span style={{fontWeight: 'bold'}}>
                                                        1 vaga: {' '}
                                                        <span style={{fontWeight: 'normal'}}>
                                                            São Paulo - SP (1)
                                                        </span>
                                                    </span>
                                                    <span style={{fontSize: '.9rem'}}>Publicada hoje</span>
                                                </div>
                                            </div>
                                            <div className='description'>
                                                <p style={{}}>Realizar cotações, negociações e processos de compra com fornecedores de embalagens,
                                                    materiais operacionais e serviços logísticos;
                                                    Gerar e acompanhar pedidos de compra (até a…
                                                </p>
                                                <span style={{
                                                    color: 'rgb(37, 87, 167)', 
                                                    fontWeight: 'bold', fontSize: '.9rem', cursor: 'pointer'}}>
                                                    continuar lendo
                                                </span>
                                            </div>
                                            <div className='sendApplication'>
                                                <button>
                                                    <span>
                                                        Enviar Candidatura Fácil
                                                    </span>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='box-jobs'>
                                        <div className='aboutJobs'>
                                            <div className='title'>
                                                <h1>ANALISTA DE GROWTH SENIOR</h1>
                                                <h2 style={{color: 'rgb(89, 89, 89)'}}>PROMPT</h2>
                                            </div>
                                            <div className='moreAbout'>
                                                <div>
                                                    <span>De R$ 9.001,00 a R$ 10.000,00</span>
                                                    <span style={{fontWeight: 'bold'}}>
                                                        1 vaga: {' '}
                                                        <span style={{fontWeight: 'normal'}}>
                                                            São Paulo - SP (1)
                                                        </span>
                                                    </span>
                                                    <span style={{fontSize: '.9rem'}}>Publicada hoje</span>
                                                </div>
                                            </div>
                                            <div className='description'>
                                                <p style={{}}>Realizar cotações, negociações e processos de compra com fornecedores de embalagens,
                                                    materiais operacionais e serviços logísticos;
                                                    Gerar e acompanhar pedidos de compra (até a…
                                                </p>
                                                <span style={{
                                                    color: 'rgb(37, 87, 167)', 
                                                    fontWeight: 'bold', fontSize: '.9rem', cursor: 'pointer'}}>
                                                    continuar lendo
                                                </span>
                                            </div>
                                            <div className='sendApplication'>
                                                <button>
                                                    <span>
                                                        Enviar Candidatura Fácil
                                                    </span>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='box-jobs'>
                                        <div className='aboutJobs'>
                                            <div className='title'>
                                                <h1>ANALISTA DE GROWTH SENIOR</h1>
                                                <h2 style={{color: 'rgb(89, 89, 89)'}}>PROMPT</h2>
                                            </div>
                                            <div className='moreAbout'>
                                                <div>
                                                    <span>De R$ 9.001,00 a R$ 10.000,00</span>
                                                    <span style={{fontWeight: 'bold'}}>
                                                        1 vaga: {' '}
                                                        <span style={{fontWeight: 'normal'}}>
                                                            São Paulo - SP (1)
                                                        </span>
                                                    </span>
                                                    <span style={{fontSize: '.9rem'}}>Publicada hoje</span>
                                                </div>
                                            </div>
                                            <div className='description'>
                                                <p style={{}}>Realizar cotações, negociações e processos de compra com fornecedores de embalagens,
                                                    materiais operacionais e serviços logísticos;
                                                    Gerar e acompanhar pedidos de compra (até a…
                                                </p>
                                                <span style={{
                                                    color: 'rgb(37, 87, 167)', 
                                                    fontWeight: 'bold', fontSize: '.9rem', cursor: 'pointer'}}>
                                                    continuar lendo
                                                </span>
                                            </div>
                                            <div className='sendApplication'>
                                                <button>
                                                    <span>
                                                        Enviar Candidatura Fácil
                                                    </span>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='box-jobs'>
                                        <div className='aboutJobs'>
                                            <div className='title'>
                                                <h1>ANALISTA DE GROWTH SENIOR</h1>
                                                <h2 style={{color: 'rgb(89, 89, 89)'}}>PROMPT</h2>
                                            </div>
                                            <div className='moreAbout'>
                                                <div>
                                                    <span>De R$ 9.001,00 a R$ 10.000,00</span>
                                                    <span style={{fontWeight: 'bold'}}>
                                                        1 vaga: {' '}
                                                        <span style={{fontWeight: 'normal'}}>
                                                            São Paulo - SP (1)
                                                        </span>
                                                    </span>
                                                    <span style={{fontSize: '.9rem'}}>Publicada hoje</span>
                                                </div>
                                            </div>
                                            <div className='description'>
                                                <p style={{}}>Realizar cotações, negociações e processos de compra com fornecedores de embalagens,
                                                    materiais operacionais e serviços logísticos;
                                                    Gerar e acompanhar pedidos de compra (até a…
                                                </p>
                                                <span style={{
                                                    color: 'rgb(37, 87, 167)', 
                                                    fontWeight: 'bold', fontSize: '.9rem', cursor: 'pointer'}}>
                                                    continuar lendo
                                                </span>
                                            </div>
                                            <div className='sendApplication'>
                                                <button>
                                                    <span>
                                                        Enviar Candidatura Fácil
                                                    </span>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='box-jobs'>
                                        <div className='aboutJobs'>
                                            <div className='title'>
                                                <h1>ANALISTA DE GROWTH SENIOR</h1>
                                                <h2 style={{color: 'rgb(89, 89, 89)'}}>PROMPT</h2>
                                            </div>
                                            <div className='moreAbout'>
                                                <div>
                                                    <span>De R$ 9.001,00 a R$ 10.000,00</span>
                                                    <span style={{fontWeight: 'bold'}}>
                                                        1 vaga: {' '}
                                                        <span style={{fontWeight: 'normal'}}>
                                                            São Paulo - SP (1)
                                                        </span>
                                                    </span>
                                                    <span style={{fontSize: '.9rem'}}>Publicada hoje</span>
                                                </div>
                                            </div>
                                            <div className='description'>
                                                <p style={{}}>Realizar cotações, negociações e processos de compra com fornecedores de embalagens,
                                                    materiais operacionais e serviços logísticos;
                                                    Gerar e acompanhar pedidos de compra (até a…
                                                </p>
                                                <span style={{
                                                    color: 'rgb(37, 87, 167)', 
                                                    fontWeight: 'bold', fontSize: '.9rem', cursor: 'pointer'}}>
                                                    continuar lendo
                                                </span>
                                            </div>
                                            <div className='sendApplication'>
                                                <button>
                                                    <span>
                                                        Enviar Candidatura Fácil
                                                    </span>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            
        </>
    )

}

export default Jobs
