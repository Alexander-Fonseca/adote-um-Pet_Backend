import type { NextPage } from 'next'
import Lista from '../ui/components/Lista/Lista'
import Titulo from '../ui/components/Titulo/Titulo';
import { Dialog, TextField, Grid } from '@mui/material';

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
        } 
      />
      <Lista 
        pets={[
          {
            id: 1,
            nome: 'Bidu',
            historia: ' dgdsgdhdhfjhfdjdjdf',
            foto: 'https://images.pexels.com/photos/2023384/pexels-photo-2023384.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' 
          },
          {
            id: 2,
            nome: 'Scooby',
            historia: ' dgdsgdhdhfjhfdjdjdf',
            foto: 'https://images.pexels.com/photos/39317/chihuahua-dog-puppy-cute-39317.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' 
          }
        ]}
      />

      <Dialog 
      open={true}
      fullWidth
      PaperProps={{ sx:{ padding: 5 }}}
      > 
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
            label={'E-mail'}
            fullWidth
           />
          </Grid>

          <Grid item xs={12}>
            <TextField
            label={'Quantia por mês'}
            fullWidth
            />
          </Grid>  
        </Grid>
      </Dialog>
    </div>
  )
}

export default Home
