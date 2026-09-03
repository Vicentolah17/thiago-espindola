# Hub Surfe a Realidade

Refatoração do layout de referência (`Hub Surfe a Realidade.dc.html`) para Next.js
(App Router + CSS Modules). O visual é uma transcrição 1:1: mesmas cores, gradientes,
glows, tipografia, espaçamentos e animações. Nada foi adicionado ou removido do design.

## Rodar localmente

```bash
npm install
npm run dev
```

Depois abra <http://localhost:3000>.

Outros comandos: `npm run build` (build de produção) e `npm start` (servir o build).

## Onde editar os links

Tudo que muda no dia a dia está em **um arquivo só**: `src/config/hub.js`.

| O que | Campo |
| --- | --- |
| Botão principal (Kit de Aplicação) | `kit.href` |
| Card 01 — Surfe Digital | `levels[0].href` |
| Card 02 — Surfar Elite | `levels[1].href` |
| Instagram / YouTube | `socials[].href` |

O mesmo arquivo guarda os textos (títulos, descrições, badge, rodapé) e os quatro
switches de exibição que existiam no layout original (`sc-if`):

```js
display: { halos: true, grain: true, avatar: true, numbered: true }
```

Cada componente também aceita esses valores direto como props, se preferir passar
por fora do config.

## Trocar o retrato

O círculo do topo vem com o placeholder "retrato" do layout original. Para usar uma
foto, coloque o arquivo em `public/` e aponte:

```js
header: { avatarSrc: "/retrato.jpg" }
```

Com `avatarSrc: null` (padrão) o placeholder continua igual ao da referência.

## Estrutura

```
src/
├── app/
│   ├── layout.jsx          fontes Google (Archivo + Public Sans) e metadata
│   ├── globals.css         resets e estilos de <a> da referência
│   ├── page.jsx            monta os blocos a partir do config
│   └── page.module.css     fundo radial e container de 620px
├── components/
│   ├── Halos.jsx           os 3 halos de luz animados (drift1 / drift2)
│   ├── Grain.jsx           textura de ruído em SVG
│   ├── HubHeader.jsx       avatar + "Surfe a / Realidade" + tagline
│   ├── KitCard.jsx         card principal gratuito (animação sheen)
│   ├── LevelCard.jsx       card de nível, variantes "violet" e "magenta"
│   ├── SectionHeading.jsx  rótulo "Próximos níveis" com a linha degradê
│   └── HubFooter.jsx       pílulas sociais + assinatura
└── config/
    └── hub.js              LINKS E TEXTOS
```

## Detalhes fiéis à referência

- **Mobile-first**: o layout base é o mobile (coluna única, `max-width: 620px`,
  título em `clamp(40px, 12vw, 60px)`). Não há media queries — em telas maiores
  o conteúdo apenas centraliza, como no original.
- **`uppercaseTitle`**: no arquivo original o card 01 tem `text-transform: uppercase`
  e o card 02 não. Isso foi preservado através da prop `uppercaseTitle` em
  `LevelCard` (marcada como `true` só no card 01).
- **Sem bibliotecas extras**: apenas `next`, `react` e `react-dom`. Sem Tailwind,
  sem lib de ícones, sem lib de animação — os ícones sociais continuam sendo as
  mesmas formas em CSS puro e as animações continuam sendo os mesmos `@keyframes`.

---

# Página de vendas SURFE DIGITAL

Rota `/surfe-digital`, no mesmo projeto e no mesmo sistema de design do hub.

O card 01 do hub ("Surfe Digital") aponta para essa rota. A navegação é
interna: o Next pré-carrega a página quando o card entra na tela e a troca
acontece sem recarregar tudo. Quem faz essa escolha é `SmartLink`, em
`src/components/SmartLink.jsx`: destino que começa com "/" usa o Link do
Next, âncora e link externo usam `<a>` normal. Os dois viram `<a>` no HTML,
então o visual do hub não muda.

O checkout é na **Kiwify**.

```bash
npm run dev
```

Depois abra <http://localhost:3000/surfe-digital>.

## Constantes configuráveis

Todas agrupadas no topo de `src/config/surfeDigital.js`:

| Constante | O que é |
| --- | --- |
| `CHECKOUT_URL` | Link do checkout na Kiwify. Alimenta os 6 botões da página. |
| `PRECO_CHEIO` | Preço do SURFE DIGITAL (`R$197`). |
| `PRECO_JANELA` | Preço de lançamento, ou `null` para vender pelo preço cheio. |
| `PARCELAMENTO` | Texto do parcelamento. Confirmar na Kiwify. |
| `DATA_FECHAMENTO` | Data real de fechamento, ou `null`. |
| `GARANTIA_DIAS` | Prazo da garantia. |

O mesmo arquivo guarda **toda a copy** da página, seção por seção, para a
revisão acontecer num lugar só sem abrir componente.

## Tokens do design system

`src/app/tokens.css` é a extração do sistema do hub em custom properties:
paleta, gradientes, sombras, escala de tipo, espaçamento, raios e easing.
O CSS do hub não foi tocado, continua com os valores literais.

Um ajuste deliberado: os três tons mais apagados do hub (alpha `.5`, `.42` e
`.3`) medem 3.32:1, 2.69:1 e 1.95:1 de contraste, abaixo do mínimo de 4.5:1
do WCAG AA. No hub são três rótulos curtos; aqui o mesmo tom carregaria
parágrafo, tabela e disclaimer. Os alphas subiram para `.72`, `.68` e `.64`
(5.65:1, 5.16:1 e 4.70:1), mantendo o matiz exato. O contraste entre "calado"
e "forte" passou a vir do tamanho, do peso e do fundo do card.

## Ordem das seções

1 nav fixa · 2 hero + VSL · 3 faixa em loop · 4 dor · 5 escolha ·
6 autoridade · **7 prova social (desligada)** · 8 resultados · 9 comparativo ·
10 método · **11 co-produção** · 12 bônus · **13 preço** · 14 garantia ·
15 FAQ · 16 rodapé · CTA fixo no mobile

As seções 11 e 13 são as únicas com o tratamento de destaque do hub (borda
de 1px em gradiente, glow duplo, brilho animado). O resto usa o card
disciplinado.

## O que está desligado

A seção 7 não renderiza nada enquanto `depoimentos` estiver vazio em
`src/config/surfeDigital.js`. Não há nome, print ou resultado inventado na
página. Ver `ASSETS.md` para o formato dos vídeos e como ligar.

## Movimento

Só dois lugares, como pede o briefing: a faixa da seção 3 e o abrir e fechar
do FAQ (mais o brilho herdado do card do hub nas seções 11 e 13). Não existe
fade-and-slide-up ao rolar. Tudo respeita `prefers-reduced-motion`.

## Assets

`ASSETS.md` lista cada imagem e vídeo que a página precisa, com nome
sugerido, dimensão exata em pixels, formato, peso alvo e onde entra.
