# Batalha de Tanques

Jogo de tanques no estilo 8-bit para até 10 jogadores online, com bots.

- **Grama** esconde o tanque dos outros jogadores e dos bots.
- **Água** bloqueia os tanques, mas o tiro passa por cima.
- **Pedra** bloqueia os tanques e os tiros.

## Como jogar

1. Abra o site, digite seu nome e clique em **Criar sala**.
2. Clique em **Copiar convite** e mande o link para os amigos. Eles também podem entrar digitando o código de 4 letras.
3. Escolha quantos bots completam a sala, a dificuldade, o tempo e quantos abates vencem.
4. Clique em **Começar**.

Controles: setas ou WASD para mover, Espaço para atirar. No celular aparecem um direcional e um botão de fogo na tela.

## Como funciona a conexão

Quem cria a sala vira o anfitrião: o jogo roda no navegador dele, e os outros jogadores se conectam direto a ele por WebRTC (biblioteca [PeerJS](https://peerjs.com)). Não há servidor próprio, por isso o site funciona no GitHub Pages.

Para ter menos lag, a pessoa com a melhor internet deve criar a sala e deixar a aba do jogo aberta e visível durante a partida.

## Publicar no GitHub Pages

Settings → Pages → Source: **Deploy from a branch** → Branch: `main`, pasta `/ (root)` → Save.
