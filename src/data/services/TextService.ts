export const TextService = {
  Limitartexto(texto: string, tamanhoMaximo: number): string{
      if(texto.length < tamanhoMaximo){
        return texto;
      }
      return texto.slice(0, tamanhoMaximo) + '...';
  }
}