# Backend _vs_ Frontend, criando sites, npm, ...

Quando: 04/10/2018

Assuntos:

- Backend vs Frontend
- Criando websites
- `npm` e gerenciadores de pacotes

## Assuntos

### Backend vs Frontend

Em resumo, a diferença é quem consome as informações geradas.

- Se outros serviços/programas que são os consumidores, _backend_.
- Caso interaja com usuários, _frontend_.

Um não é melhor ou pior do que o outro.

As diferenças já foram maiores.

Para a maioria dos projetos, os dois são necessários.

| Backend       | Frontend    |
| ------------- |-------------|
| Roda num servidor que você controla      | Roda no computador dos seus usuários |
| Fácil acesso a logs             | Logs devem ser enviados para um servidor |
| Difícil interagir               | Criado para ser interativo               |
| Dados gerados para computadores | Dados gerados para humanos               |

A parte _frontend_, além de programação, também contém o design de interações
com usuários, usabilidade, otimização para diferentes dispositivos, etc.

A parte _backend_ contém ainda controle de acesso a dados, determinar pontos de
acesso à informação gerada, acesso a bancos de dados, etc.


### Criando websites

O modelo mais genérico de se criar um aplicativo atualmente é escrevê-lo de
forma que seja compatível com navegadores web. Todos os dispositivos smart e
computadores possuem navegadores, e Internet é cada vez mais acessível o tempo
todo.

Para criar uma página, é necessário aprender ao menos o básico de HTML e CSS.

HTML é o que contém seu conteúdo e diagramação geral: posição, conteúdo,
navegação, formatos, etc.

CSS é o que define como seu conteúdo será exibido: cores, tamanhos, ajustes de
posição, animações, etc.

Tá, e onde JavaScript entra nessa história? JavaScript é utilizado
principalmente como o controle de dados. Garantir que sua aplicação tem todos os
dados que precisa, na hora que precisa e no formato que precisa.

Nem HTML nem CSS são linguagens de programação, então a maior parte das
interações que envolvem dados precisam de JavaScript. Exemplos são:

- Fazer _login_ em um site
- Pesquisar por algum produto
- Marcar um email como lido

#### Como começar então?

Um passo importante, principalmente no começo, é desenhar o que você deseja
primeiro em um papel ou um arquivo separado. Esse desenho deve ter uma visão
geral da diagramação do que você espera ver.

Depois tente replicar isso em uma página com HTML e CSS. Quando conseguir a
diagramação geral em um estado legal, passe para a próxima fase.

Tente pôr mais detalhes em cada componente agora, ainda num papel ou arquivo
separado, tente ser mais realista com como exatamente você quer que aquele
componente seja exibido na tela.

Use CSS para reproduzir no seu site o que você desenhou para o componente.

Repita os passos anteriores até você atingir o estado desejado!

Quando precisar de dados reais e mais interação, aí você começa a botar
JavaScript na página. Com o tempo essa ordem vai mudando, mas no começo é
importante marcar o que é responsável pelo que.


### `npm` e gerenciadores de pacotes

Existem vários problemas que todos desenvolvedores encontram. Para poupar tempo,
alguns desenvolvedores que resolvem problemas transformam suas soluções em
pequenos projetos que podem ser baixados e utilizados por outros
desenvolvedores, isso é feito _empacotando_ um conjunto de código em
_bibliotecas_.

Bibliotecas (ou pacotes) são muito úteis no desenvolvimento de qualquer projeto.

O problema é descobrir quais bibliotecas usar, mantê-las atualizadas, avisar a
seus colaboradores quais bibliotecas você usa e garantir que você também tem
todas as bibliotecas que sua biblioteca precisa!

Para isso existem os _gerenciadores de pacotes_. Várias linguagens tem a sua
própria versão disso. A de JavaScript é `npm`, ou `Node package manager`.
Apesar de ter *Node* no nome, `npm` contém pacotes de back e frontend, e é muito
utilizado mesmo em projetos puramente frontend.

### Para ler e começar!

https://reactjs.org/tutorial/tutorial.html
