# Revisão e Primeiro Estudo

Quando: 02/10/2018

Assuntos:

- Programação
- JavaScript
- O que queremos estudar?

## Assuntos

### Programação

Revisão curta do que é programação, quais os pontos principais e ferramentas.

* Resolver problemas
* Algoritmos - Usar comandos para dizer ao computador o que fazer

#### Ferramentas (de código)

* _Condicionais_ quando precisar verificar alguma coisa
* _Laços_ quando precisar iterar por listas de elementos
* _Funções_ para simplificar e reutilizar código

#### Linguagens de programação

Não existe a melhor linguagem de programação, existem linguagens mais e menos
populares e mais adaptadas para determinadas funções.

* C é muito útil quando a memória é limitada
* Java se destaca pela estabilidade e por ter diversas ferramentas maduras
* JavaScript roda em qualquer lugar, por isso é simples de escrever protótipos

### JavaScript

Uma linguagem cada vez mais popular, é uma linguagem _interpretada_ e não
_compilada_.

É uma linguagem sem _tipagem forte_, isto é, ao contrário de C, você não
precisa dizer o tipo das suas variáveis, o interpretador tentará definir os
tipos _dinamicamente_.

Alguns exemplos das ferramentas da seção passada em JavaScript:

#### Condicionais

Testar se um número é par:

```
var numero = 15;

if (numero % 2 === 0) {
  console.log('Número par!');
} else {
  console.log('Número ímpar!');
}
```

#### Laços

Reverter a ordem de uma lista

```
var lista = [1, 2, 3];
var reversa = [];

for (var i = lista.length - 1; i >= 0; i--) {
  reversa.push(lista[i]);
}

console.log(reversa);
// [3, 2, 1]
```

#### Funções

Função que diz se um número é maior que 5:

```
function maiorQueCinco(numero) {
  if (numero > 5) {
    return true;
  }

  return false;
}
```

#### Tudo junto

Elementos de uma lista que sejam pares

```
function ehPar(numero) {
  if (numero % 2 === 0) {
    return true;
  }
  return false;
}

var lista = [1, 2, 3, 4, 5, 6];
var pares = [];

for (var i = 0; i < lista.length; i++) {
  if (ehPar(lista[i])) {
    pares.push(lista[i]);
  }
}

console.log(pares);
// [2, 4, 6]
```

### O que queremos estudar?

Revisão feita, o que vamos estudar?

Sugestões:

- Princípios de programação
- Exercícios! (Resolvendo problemas)
- Backend vs Frontend
- Criando um site
- CSS
- NodeJS
- Java
- Git
- ...
