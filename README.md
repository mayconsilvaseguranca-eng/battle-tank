# Lendas da Masmorra

Roguelike de ação no navegador, para PC e celular. Você escolhe um herói, atravessa as 50 salas do mundo, sobe de nível, junta habilidades e enfrenta chefes com mecânicas no estilo MMORPG.

- **Jogar:** `index.html`
- **Versão de teste:** `teste.html` (vida infinita, pular salas, ir direto aos chefes e outros atalhos; o save é separado do jogo normal)

## Como jogar

- **PC:** WASD ou setas para andar.
- **Celular:** arraste o dedo na tela para usar o joystick.
- O herói ataca sozinho o inimigo mais perto, **só quando está parado**. Ande para desviar e pare para atacar.
- Cada nível dá uma escolha de 1 entre 3 habilidades.
- Se você morrer, o mundo recomeça da sala 1, até você derrotar o último chefe dele.
- As gemas ficam guardadas entre as partidas e servem para melhorar o herói na Forja.

## Heróis

| Herói | Arma | Ataques por segundo | Estilo |
|---|---|---|---|
| Guerreiro | Espada | 1,4 | Golpes em meia-lua que atravessam inimigos e cortam projéteis |
| Arqueira | Arco | 1,0 | Flechas de longe |
| Mago | Cajado | 0,8 | Bolas de fogo que explodem em área |

## Mundo 1: Campos Verdes

| Sala | Mini-chefe | Sala | Chefe | Mecânica principal |
|---|---|---|---|---|
| 5 | Ogro Chefe | 10 | Rei Gosma | Matar as gosminhas antes que cheguem ao rei |
| 15 | Cogumelo Ancião | 20 | Rainha Abelha | Destruir as colmeias antes de a barra encher |
| 25 | Capitão Esqueleto | 30 | Guardião do Bosque | Esconder-se atrás de um pilar |
| 35 | Lobo Alfa | 40 | Rei Ogro | Entrar no círculo seguro |
| 45 | Zangão Gigante | 50 | Dragão Esmeralda | Todas as mecânicas juntas |

## Mundo 2: Deserto Dourado

Liberado ao vencer o Mundo 1. Cada partida começa no nível 1, só com a força da Forja.

| Sala | Mini-chefe | Sala | Chefe | Mecânica principal |
|---|---|---|---|---|
| 5 | Bandido do Deserto | 10 | Golem Ancião | Chão que some: rachaduras viram buracos |
| 15 | Rainha Escorpião | 20 | Escaravelho Rei | Escudo direcional: acertar as costas |
| 25 | Abutre Gigante | 30 | Verme Colossal | Areia movediça que puxa para o centro |
| 35 | Cobra Rainha | 40 | Esfinge do Vento | Tempestade fecha a arena: corrida contra o tempo |
| 45 | Cavaleiro Negro | 50 | Faraó Amaldiçoado | Todas, mais a fase de clones (só o verdadeiro tem sombra) |

Todo chefe também tem ataques que aparecem conforme a luta demora e entra em fúria se a luta passar de 2,5 a 3 minutos. ## Mundo 3: Vulcão de Lava

Liberado ao vencer o Mundo 2. Salas com poucos inimigos (2 a 4), cada um com ataques avisados para aprender e esquivar.

| Sala | Mini-chefe | Sala | Chefe | Mecânica principal |
|---|---|---|---|---|
| 5 | Diabinho Chefe | 10 | Ferreiro Demônio | Chão de brasas em xadrez |
| 15 | Salamandra Rainha | 20 | Fênix | Ovo: quebre antes que ela renasça |
| 25 | Golem de Magma Ancião | 30 | Titã de Magma | Rios de lava que varrem a arena |
| 35 | Morcego de Brasa Gigante | 40 | Rei Diabo | Espiral de fogo para sobreviver |
| 45 | Cavaleiro Negro | 50 | Dragão de Lava | Todas as quatro |

## Progresso fora da Forja (menu 🎒 Progresso)

- Nível de cada herói (até 20), com passivas nos níveis 5, 10 e 15.
- Equipamentos (arma, armadura, anel, amuleto) que caem de chefes e mini-chefes; 3 iguais viram 1 de raridade acima.
- Relíquias dos chefes finais e desafios com bônus permanentes.

Os mundos 4 e 5 estão em construção.

## Habilidades

O dano segue a fórmula do Archero 2:

```
Dano final = base × (1 + soma ATK) × (1 + soma DMG) × (1 + soma DMG da arma principal)
Velocidade de ataque = base × (1 + soma dos bônus) × menor multiplicador das habilidades carregadas
```

O limite é de 4 ataques por segundo, e o intervalo entre ataques é arredondado para 1/30 de segundo.

## Progresso salvo

- Aberto no claude.ai, o progresso fica salvo na conta de cada jogador.
- Aberto aqui (GitHub Pages ou o arquivo direto), fica salvo só no navegador de quem joga.
- Se você fechar o jogo no meio de uma partida, ele volta na mesma sala.

## Publicar no GitHub Pages

Settings → Pages → Source: **Deploy from a branch** → Branch: `main`, pasta `/ (root)` → Save.
