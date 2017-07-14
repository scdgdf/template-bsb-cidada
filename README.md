# Brasília Cidadã e Portal do Voluntariado
Projeto HTML e CSS para a refatoreação do [Portal do Voluntariado](http://portaldovoluntariado.df.gov.br) do [Governo do Brasília](http://brasilia.df.gov.br).

## O Projeto
Todo o CSS da página foi gerado com o [LESS](http://lesscss.org/). Foram gerados dois arquivos: estilo.css e estilo.min.css.

## Observações
* As capas dos projetos, ações, campanhas, doações e notícias devem ter 380x200px, e aconselha-se que o conteúdo dessas imagens tenham margens de topo e rodapé em 15px e lados em 20px para melhor apresentação do conteúdo. Como a figura a seguir:
![Exemplo de capa sem fundo](images/exemplo-sem-fundo.png?raw=true "Exemplo de capa sem fundo")  ![Exemplo de capa com fundo](images/exemplo-com-fundo.png?raw=true "Exemplo de capa com fundo")

* As capas são incluidas na página como plano de fundo da `<div>` que conterá a imagem, portanto, essa `<div>` deverá ter o formato:
```<div class="image" style="background-image: url('caminho/da/imagem.jpg')"></div>```

* Ao fim da implementação retirar comentários do HTML.
