import { useState } from "react";
import { Pet } from "../../@types/Pet";

export function useIndex() {
  const [listaPets, setListaPets] = useState(
    [
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
    ]
  ),
      [petSelecionado, setpetSelecionado] = useState<Pet | null>(null);

  return {
    listaPets
  };
}