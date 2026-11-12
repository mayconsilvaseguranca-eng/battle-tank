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

Todo chefe também tem ataques que aparecem conforme a luta demora e entra em fúria se a luta passar de 2 a 3 minutos. Os mundos 2 a 5 estão em construção.

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
