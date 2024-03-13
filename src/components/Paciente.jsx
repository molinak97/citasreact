const Paciente = () => {
  return (
    <div className='mx-5 my-10 bg-white shadow-md px-5 py-10 rounded-xl'>
        <p className='font-bold mb-3 text-gray-700 uppercase'>Nombre:{''}
        <span className='font-normal normal-case'>Hook</span>
        </p>

        <p className='font-bold mb-3 text-gray-700 uppercase'>Propietario:{''}
        <span className='font-normal normal-case'>Kevin Molina</span>
        </p>

        <p className='font-bold mb-3 text-gray-700 uppercase'>Email:{''}
        <span className='font-normal normal-case'>correo@correo.com</span>
        </p>

        <p className='font-bold mb-3 text-gray-700 uppercase'>Fecha Alta:{''}
        <span className='font-normal normal-case'>10 de Diciembre 2024</span>
        </p>

        <p className='font-bold mb-3 text-gray-700 uppercase'>Sintomas:{''}
        <span className='font-normal normal-case'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum corporis beatae, voluptatibus laborum magni nihil corrupti deleniti mollit</span>
        </p>
    </div>
  )
}

export default Paciente
