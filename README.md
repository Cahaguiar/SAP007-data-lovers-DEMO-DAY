# POKÉMON GUIDE - Data Lovers

Projeto desenvolvido com o objetivo  de organizar, filtrar e buscar dados para facilitar a necessidade de pesquisa do usuário.

## Índice 
 
- [1. Introdução](#1-introdução)
- [2. Objetivo do projeto](#2-objetivo-projeto)
- [3. O problema vs A solução](#3-o-problema-vs-a-solução)
- [4. Usuários](#4-usuários)
- [5. Protótipos](#5-protótipos)
- [6. Testes de Usabilidade](#6-testes-de-usabilidade)
- [7. Objetivos de aprendizagem](#7-objetivos-de-aprendizagem)
- [8. Linguagens utilizadas](#8-linguagens-utilizadas)

---

## 1. Introdução

Ao jogar Pokémon GO o usuário interage com um mapa baseado no mundo real (inicialmente o Google Maps e atualmente o OpenStreetMap). O jogador se localiza e procura Pokémon por meio desse mapa. À medida que ele se desloca, o aplicativo vibra para avisar sobre a presença das criaturas virtuais pelo caminho. Ao tocar a tela do smartphone é possível visualizar o Pokémon no mesmo local onde o jogador está, pois, o jogo sobrepõe à visualização da câmara a imagem do Pokémon e simula que ele está no local onde o jogador se encontra, semelhantemente à realidade virtual. Para capturar o monstrinho.
Pensando nos jogadores, e até mesmo nos fãs do anime, foi proposto o desenvolvimento desse projeto que é capaz de, através de um banco de dados, extrtair informações sobre diversos Pokémons.

## 2. Objetivo do projeto

Pokémon Guide foi desenvolvido pensando nos fãs e jogadores de Pokémon Go, para ajudar como um guia que contenha as informações principais e essênciais sobre os Pokémons.

É possível encontram uma "ficha técnica" contendo informações como: os tipos de Pokémons, indo dos normais aos mais raros; a região de origem de cada um; quais são os mais resistentes a certos tipos de poderes e também suas fraquezas; tamanho; ataques especiais; quais são os mais fáceis de capturar e quais tem maior chance de fuga; sobre os ovos e desova; e as próximas evoluções assim como as evoluções anteriores.

Pokémon Guide ajudará a descobrir quais são os pokémons favoritos e quais não poderão faltar na lista de captura!

Projeto desenvolvido por [Cássia Costa](https://github.com/CassiaCosta).

## 3. O problema vs A solução

O mundo dos jogos do Pokémon é muito vasto, existem inúmeros pokémons de diversos tipos de diferentes regiões. Atualmmente existem 891 tipos de pokémons distribuidos em dez regiões e por mais fã que seja, é quase impossível, saber as informações de todos.
É possível que, como usuário de Pokémon Go, quando encontrar uma dessas criaturas não saber de fato qual o tipo daquele pokémon, seus ataques especiais, a região a qual pertence, evoluções e até mesmo o nome. 
Visando essa possibilidade, o projeto Pokémon Guide foi projetado para preencher essa lacuna, trazendo um guia de informações dos Pokémons da região de Kanto e Johto.

## 4. Usuários
### A pesquisa

Para a pesquisa foi utilizado **Google Forms** visando identificar a idade e gênero dos usuários e quais são os seus interesses em relação ao jogo e quais os itens  mais relevantes para fazer uma pesquisa em nossa aplicação.

Os resultados foram: 

- 41,7% dos usuários tem a idade entre 21 a 30 anos e 37,5% são adultos com mais de 30 anos. Objetivemos também uma singela parcela de adolescente que estão na faixa etária de 15 anos.

![age](/img-readme/age.png)

- 66,7% que responderam nossa pesquisa é do público feminino.

![gender](/img-readme/gender.png)

- Em relação ao tipo da busca em nossa aplicação, as  informações mais relevantes foram: a raridade do pokémon, e o tipo de espécie ao qual pertence.

![sort-search](/img-readme/order.png)

- 48% informaram que a raridade é o item mais relevante para se buscar um pokémon.

![relevants-info](/img-readme/relevants-info.png)


#### Histórias de usuários

Após a análise das respostas identificamos dois usuários:

**História 1**

![adult](/img-readme/adult.jpg)

Definição de pronto: O site deve mostrar todos os pokémons em cards na tela para que o usuário possa manipulálos como quiser conforme os filtros.

**História 2**

![young](/img-readme/young.jpg)

Definição de pronto: O site deve ter filtros selects para que o usuário possa fazer a pesquisa por tipo, raridade e região de origem. Além disse deve ter um input para que seja possível fazer pesquisas pelo nome do pokémon e um select para ordenação.

## 5. Protótipos

A paleta de cores foi escolhida baseada nas cores principais do logo.

![palette](/img-readme/color-palette.png)

### Protótipo de baixa fidelidade
**Página inicial**
![low-prototype](/img-readme/index-low-prototype.jpg)

**Filtros e Cards**
![low-prototype](/img-readme/main-low-prototype.jpg)

### Protótipo de alta fidelidade
Utilizamos a ferramente Mockflow para o protótipo de alta fidelidade:

**Página inicial**
![prototype-index](/img-readme/prototype-index.png) 

## 6. Testes de usabilidade

## 7. Objetivos de aprendizagem
Aprendemos a desenhar protótipos de baixa e alta fidelida para construir uma interface web onde fosse possível visualizar e manipular dados, de acordo com a necessidade do usuário.

 - Foi feita pesquisa para montar as histórias de usuário e entender suas necessidades;
 - Criação dessas histórias de usuário com base nas necessidades obtidas no resultado da pesquisa;
 - Os critérios de aceitação em manipular os dados, filtrar e extrair dele as informações para a realização de tarefas como; a construção de funções para manipular esses dados e o retorno dos dados de acordo com o desejo do usuário;
 - Criação de responsividade para o layout para se adequar a outros dispositivos móveis (celulares, tablets e notebooks);
 - Manipulação do DOM para interação do usuário com a página;
 - Manipulação de arrays e objetos;

## 8. Linguagens utilizadas

HTML5
CSS3
Node.JS
JavaScript

