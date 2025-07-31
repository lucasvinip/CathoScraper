import './css/Reset.css'
import './css/Header.css'
import './css/Main/JobSearch.css'
import './css/Main/Jobs.css'
import { useEffect, useState } from 'react'

interface Job {
    id: number,
    positionOfJob: string,
    company: string
    salary: string,
    numbersOfVacancy: string,
    locationOfCompany: string,
    dayPosted: string,
    descriptionOfJob: string
}


function Jobs() {
    const [jobs, setJobs] = useState<Job[]>([])
    const [sentApplication, setSentAplication] = useState <number[]>([]);

    useEffect(() => {
        const getVacancy = async () => {
            const response = await fetch('./public/data.json');
            const data: Job [] = await response.json();
            setJobs(data);
        }

        getVacancy();   
    }, [])

    console.log(Jobs);
    

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
                                <button className='button2' onClick={() => alert('ola')}>
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
                                    {jobs.map((job) => (
                                        <div className='box-jobs'>
                                        <div className='aboutJobs' key={job.id}>
                                            <div className='title'>
                                                <h1>{job.positionOfJob.toUpperCase()}</h1>
                                                <h2 style={{ color: 'rgb(89, 89, 89)' }}>{job.company.toUpperCase()}</h2>
                                            </div>
                                            <div className='moreAbout'>
                                                <div>
                                                    <span>{job.salary}</span>
                                                    <span style={{ fontWeight: 'bold' }}>
                                                        {job.numbersOfVacancy} {' '}
                                                        <span style={{ fontWeight: 'normal' }}>
                                                            {job.locationOfCompany}
                                                        </span>
                                                    </span>
                                                    <span style={{ fontSize: '.9rem' }}>{job.dayPosted}</span>
                                                </div>
                                            </div>
                                            <div className='description'>
                                                <p>{job.descriptionOfJob}</p>
                                                <span style={{
                                                    color: 'rgb(37, 87, 167)',
                                                    fontWeight: 'bold', fontSize: '.9rem', cursor: 'pointer'
                                                }}>
                                                    continuar lendo
                                                </span>
                                            </div>
                                            <div className='sendApplication'>
                                                {!sentApplication.includes(job.id) ? (
                                                    <button onClick={() => setSentAplication([...sentApplication, job.id])}>
                                                        <span>
                                                            Enviar Candidatura Fácil
                                                        </span>
                                                    </button>
                                                )
                                                    :
                                                    <span style={{
                                                        color: 'green',
                                                        fontWeight: 'bold'
                                                    }}>
                                                        Currículo já enviado! </span>
                                                }
                                            </div>
                                        </div>
                                    </div>
                                    ))}
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
