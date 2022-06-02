import type { NextPage } from 'next'
import Titulo from '../ui/components/Titulo/Titulo';

const Home: NextPage = () => {
  return (
    <div>
      <Titulo 
      titulo="" 
      subtitulo={
      <span>
        Com um pequeno valor mensal, você <br />
        pode <strong>adorar um pet virtualmente</strong>
        </span>
      } />
    </div>
  )
}

export default Home
