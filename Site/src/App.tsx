import './css/Reset.css'
import './css/App.css'

function App() {

  return (
    <>
      <header>
        <div>
          <h1>thoca</h1>
        </div>
      </header>

      <main>
        <div className='div1'>
          <div className='div2'>
            <div className='div2-1'>
              <div className='texts'>
                <h1 className='texts-1'>
                  Tudo pronto para dar o próximo passo?
                </h1>
                <span className='texts-2'>
                  Crie ou acesse uma conta.
                </span>
                <span className='texts-3'>
                  Ao criar ou acessar uma conta,
                  você entende e concorda com os Termos do Indeed,
                  além de aceitar as nossas Políticas de Cookies e de Privacidade.
                  Você receberá mensagens de marketing do Thaco,
                  as quais podem ser canceladas a qualquer momento no link de
                  cancelamento ou conforme detalhado em nossos termos.
                </span>
              </div>
              <div className='buttons'>
                <div>
                  <div className='buttonGoogle'>
                    <button>
                      <span>
                        Continuar com Google
                      </span>
                    </button>
                  </div>
                </div>
              </div>
              <span>OU</span>
              <div className='inputs'>
                <div className='inputs-1'>
                  <div>
                    <label htmlFor="email">
                      E-mail
                    </label>
                    <input type="text" />
                    <label htmlFor="senha">
                      Senha
                    </label>
                    <input type="password" />
                  </div>
                </div>
                <div className='loginButton'>
                  <button>
                    Entrar
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer>

      </footer>
    </>
  )
}

export default App
