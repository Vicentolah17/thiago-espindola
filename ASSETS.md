# ASSETS · página de vendas SURFE DIGITAL

Lista do que a página precisa receber. Hoje **nenhuma imagem real existe**:
todo espaço visual é um placeholder desenhado em CSS, com a dimensão escrita
dentro dele. Nada foi inventado.

Ordem de prioridade: os itens 1 e 2 bloqueiam a publicação. O item 3 é o que
liga a seção 7. Os itens 4 e 5 são de compartilhamento e podem vir depois.

---

## 1. VSL do hero (bloqueia publicação)

| | |
|---|---|
| **Onde entra** | Seção 2, hero, logo abaixo da headline |
| **O que é** | Vídeo de vendas, o eixo da página inteira |
| **Formato** | Embed (YouTube não listado, Vimeo ou player de hospedagem) |
| **Proporção** | 16:9 |
| **Resolução mínima** | 1280 x 720, ideal 1920 x 1080 |
| **Arquivo** | Não é arquivo local, é URL de embed |

**Como instalar:** em `src/components/sales/Hero.jsx`, o bloco marcado
`{/* VSL: substituir pelo embed */}`. Trocar a `div.player` inteira pelo
iframe do player, mantendo a `div.playerFrame` com `aspect-ratio: 16 / 9`
para não causar salto de layout enquanto o vídeo carrega.

> Se o Thiago decidir não gravar VSL, o hero muda de estrutura: vira headline
> mais imagem mais bullets, e essa decisão precisa ser tomada antes, não
> depois. Ver a seção de decisões pendentes no fim deste arquivo.

---

## 2. Foto do Thiago (INSTALADA)

**Já está no ar:** `public/thiago_foto.webp`, 1200 x 1600, 92 KB, WebP. O
slot é 4:5, então corta uns 6% no topo e na base, centralizado no alto.
Se quiser trocar, é o campo `autoridade.foto` em `src/config/surfeDigital.js`.

| | |
|---|---|
| **Onde entra** | Seção 6, autoridade, coluna da esquerda |
| **Nome sugerido** | `thiago-autoridade.jpg` |
| **Dimensão exata** | **640 x 800 px** (proporção 4:5) |
| **Dimensão ideal p/ retina** | 1280 x 1600 px, exportada para 640 x 800 |
| **Formato** | WebP de preferência, JPG aceito, qualidade 80 |
| **Peso alvo** | Até 180 KB |
| **Pasta** | `public/thiago-autoridade.jpg` |

**Enquadramento:** vertical, meio corpo ou busto, olhando para a câmera.
Fundo escuro ou neutro, porque a página é escura e foto de fundo claro abre
um buraco de luz no meio da seção. Espaço de respiro em volta da cabeça, o
card tem cantos arredondados de 24px que cortam as bordas.

**Alt sugerido:** `Thiago Espíndola, criador do SURFE DIGITAL`

**Como instalar:** em `src/components/sales/Authority.jsx`, trocar a
`figure.photo` pelo `<img>` com `width="640" height="800"` e
`loading="lazy"` (está fora do hero).

---

## 3. Depoimentos em vídeo (liga a seção 7)

A seção 7 existe no código, está estruturada e testada, e **não renderiza
nada** enquanto não houver depoimento real. Não há nome, print ou resultado
inventado na página.

São **três** vídeos, mesmo padrão:

| | |
|---|---|
| **Onde entra** | Seção 7, prova social, grid de três colunas |
| **Nome sugerido** | `depoimentos/depoimento-1.mp4`, `-2`, `-3` |
| **Dimensão exata** | **1080 x 1920 px** (vertical 9:16) |
| **Formato** | MP4, codec H.264, áudio AAC |
| **Duração alvo** | 30 a 60 segundos cada |
| **Peso alvo** | Até 8 MB cada |
| **Pasta** | `public/depoimentos/` |

Cada vídeo precisa também de um **poster** (o frame que aparece antes do play):

| | |
|---|---|
| **Nome sugerido** | `depoimentos/depoimento-1-poster.jpg` |
| **Dimensão exata** | **1080 x 1920 px** |
| **Formato** | WebP ou JPG, qualidade 80, até 150 KB |

**Como ligar:** preencher a lista `depoimentos` em
`src/config/surfeDigital.js`. A seção aparece sozinha assim que a lista
tiver itens:

```js
export const depoimentos = [
  {
    nome: "Nome real da pessoa",
    titulo: "A frase curta que resume o depoimento",
    videoSrc: "/depoimentos/depoimento-1.mp4",
    poster: "/depoimentos/depoimento-1-poster.jpg",
  },
  // ...
];
```

> Só ligar com depoimento real, de pessoa real, que autorizou o uso. É o
> bloco que mais muda a conversão desta página, e é também o que mais custa
> caro se for forjado.

---

## 4. Imagem de compartilhamento (recomendado)

Quando o link for colado no Instagram, no WhatsApp ou no Telegram, é essa
imagem que aparece. Sem ela o link vai cru.

| | |
|---|---|
| **Onde entra** | Metadados da página, não aparece no corpo |
| **Nome sugerido** | `og-surfe-digital.jpg` |
| **Dimensão exata** | **1200 x 630 px** |
| **Formato** | JPG ou WebP, até 300 KB |
| **Pasta** | `public/og-surfe-digital.jpg` |

**Conteúdo sugerido:** o wordmark SURFE DIGITAL sobre o fundo roxo da marca,
sem texto pequeno (fica ilegível na miniatura do WhatsApp).

**Como instalar:** adicionar `openGraph` ao `export const metadata` em
`src/app/surfe-digital/page.jsx`.

---

## 5. Favicon (recomendado)

| | |
|---|---|
| **Nome** | `icon.png` |
| **Dimensão exata** | **512 x 512 px** |
| **Formato** | PNG com fundo (não transparente, some na aba escura) |
| **Pasta** | `src/app/icon.png` (o Next serve automático) |

---

## 6. Retrato do hub (fora desta página)

O hub em `/` ainda usa o placeholder "retrato" do layout original.

| | |
|---|---|
| **Nome sugerido** | `retrato.jpg` |
| **Dimensão exata** | **184 x 184 px** (o círculo tem 92px, o dobro para retina) |
| **Formato** | WebP ou JPG |
| **Pasta** | `public/retrato.jpg` |

**Como instalar:** `header.avatarSrc: "/retrato.jpg"` em `src/config/hub.js`.

---

## 7. Logo da marca (INSTALADA)

| | |
|---|---|
| **Onde entra** | Topo do hub, no lugar do círculo "retrato" |
| **Arquivo atual** | `public/logo_surfe.webp` |
| **Dimensão do arquivo** | 1536 x 1024, WebP com canal alpha |
| **Peso** | 156 KB |
| **Fundo** | Transparente, verificado pixel a pixel |

**Já está no ar.** `header.logoSrc` em `src/config/hub.js` aponta pra ela.
Ela substitui o círculo de retrato: aparece solta, sem recorte, com glow roxo
via `drop-shadow`, que acompanha o contorno do desenho em vez de desenhar um
retângulo luminoso atrás.

### Uma melhoria que vale fazer no arquivo

O desenho ocupa só **660 x 655** de uma tela de **1536 x 1024**. Sobram 452px
de margem transparente à esquerda, 424px à direita, 216px em cima e 153px
embaixo, ou seja, quase 60% do arquivo é vazio.

O CSS compensa isso com altura maior e margens negativas, então visualmente
está certo. Mas o vazio atrapalha em todo uso futuro (favicon, imagem de
compartilhamento, ícone de nav), porque em cada um deles a logo aparece menor
do que deveria.

**Se puder, exporte uma versão recortada** no limite do desenho, com uns 3%
de respiro, algo como 700 x 695 exportado para ~400px de altura. Aí é só
trocar o arquivo e zerar as três linhas de `height` e `margin` em
`HubHeader.module.css`, que já estão comentadas explicando isso.

> A ilustração do surfista tem muito detalhe fino (cartola, gravata, respingos
> da prancha). Em tamanho de favicon (32px) ou de ícone de nav (24px) isso
> vira borrão. Para esses dois usos o ideal é uma versão simplificada, só a
> silhueta do surfista na prancha, sem os detalhes internos.

---

# PÁGINA · MÉTODO S.U.R.F.E

Rota `/metodo-surfe`. Onze imagens no total: uma arte de abertura, uma foto e
**nove artes verticais de módulo**. Estado atual: **a foto e oito das nove artes
estão instaladas**. A arte de abertura está provisória (a logo) e a arte
"Comece por aqui" não foi enviada.

## M1. Arte de abertura (PROVISÓRIA: a logo)

**Hoje:** `logo_surfe.webp` no lugar da arte, com `contain` e o mesmo glow do
hub, porque é horizontal e transparente. Quando a arte real existir, em
`src/config/metodoSurfe.js` troque `hero.arte` pelo caminho dela e apague a
linha `arteAjuste: "contain"`.

| | |
|---|---|
| **Onde entra** | Seção 2, hero. À direita no desktop, abaixo do texto no celular |
| **Nome sugerido** | `metodo/arte-abertura.webp` |
| **Dimensão exata** | **960 x 1200 px** (proporção 4:5) |
| **Formato** | WebP, qualidade 82 |
| **Peso alvo** | Até 160 KB. É a única imagem que carrega antes da dobra |
| **Pasta** | `public/metodo/arte-abertura.webp` |

**Conteúdo:** a silhueta em meditação da identidade do produto, violeta neon
sobre preto. Sem texto dentro da imagem, a página já tem a headline do lado.

**Como instalar:** `hero.arte: "/metodo/arte-abertura.webp"` em
`src/config/metodoSurfe.js`.

## M2. Foto do Thiago (INSTALADA)

**Já está no ar:** a mesma `public/thiago_foto.webp` da página do SURFE
DIGITAL, via `autoridade.foto` em `src/config/metodoSurfe.js`.

| | |
|---|---|
| **Onde entra** | Seção 7, autoridade, coluna da esquerda |
| **Nome sugerido** | `metodo/thiago-metodo.jpg` |
| **Dimensão exata** | **640 x 800 px** (4:5) |
| **Formato** | WebP ou JPG, qualidade 80, até 180 KB |
| **Pasta** | `public/metodo/thiago-metodo.jpg` |

Pode ser a mesma foto da página do SURFE DIGITAL. Se for uma foto diferente,
vale uma mais quieta, sem sorriso aberto: o tom desta página é introspectivo.

**Como instalar:** em `src/components/metodo/MetodoAutoridade.jsx`, trocar a
`figure.photo` pelo `<img>` com `width="640" height="800"` e `loading="lazy"`.

## M3. As nove artes de módulo (8 INSTALADAS)

**Já estão no ar**, em `public/metodo/`, convertidas para WebP 800 x 1200 a
partir dos originais enviados na raiz de `public/`. Os originais somavam
22 MB (JPEG de 3 a 4 MB cada); os oito WebP somam 1,1 MB. **Os originais na
raiz de `public/` podem ser apagados.**

Todas no mesmo padrão. São as artes que já existem na área de membros:
ilustração violeta neon sobre preto, silhueta humana, nome do módulo em
tipografia grande.

| | |
|---|---|
| **Dimensão exata** | **800 x 1200 px** (proporção 2:3) |
| **Formato** | WebP, qualidade 80 |
| **Peso alvo** | **Até 120 KB cada.** São nove: passou disso, o celular sente |
| **Pasta** | `public/metodo/` |

| # | Módulo | Arquivo em `public/metodo/` | Saída | Onde entra | Estado |
|---|---|---|---|---|---|
| 1 | Comece por aqui | `comece-por-aqui.webp` | 800 x 1200 | ver nota abaixo | **não enviada** |
| 2 | Sintonia (S) | `sintonia.webp` | 800 x 1200 · 131 KB | Seção 9, etapa 1 | instalada |
| 3 | Unidade (U) | `unidade.webp` | 800 x 1200 · 145 KB | Seção 9, etapa 2 | instalada |
| 4 | Reprogramação (R) | `reprogramacao.webp` | 800 x 1200 · 129 KB | Seção 9, etapa 3 | instalada |
| 5 | Fluxo (F) | `fluxo.webp` | 800 x 1200 · 173 KB | Seção 9, etapa 4 | instalada |
| 6 | Execução (E) | `execucao.webp` | 800 x 1200 · 75 KB | Seção 9, etapa 5 | instalada |
| 7 | Leis Herméticas | `leis-hermeticas.webp` | 800 x 1200 · 187 KB | Seção 10, item 1 | instalada |
| 8 | Salto Quântico | `salto-quantico.webp` | 759 x 646 · 113 KB | Seção 10, item 2 | instalada, **ver nota** |
| 9 | Economia Digital | `economia-digital.webp` | 800 x 1200 · 177 KB | Seção 10, item 3 | instalada |

> **Salto Quântico veio diferente das outras.** O arquivo enviado
> (`salto_quantico.png`) é horizontal, 759 x 646, com fundo transparente:
> parece um selo, não uma arte vertical de módulo. Não recortei em 2:3 pra não
> decepar o desenho; ele entra inteiro, com `contain`, e por isso fica mais
> baixo que os dois vizinhos na seção 10. Quando existir a versão vertical
> 2:3, é trocar o arquivo e apagar a linha `arteAjuste: "contain"` no config.

**Como instalar:** em `src/config/metodoSurfe.js`, cada etapa e cada item de
aprofundamento tem um campo `arte: null`. Trocar por
`arte: "/metodo/sintonia.webp"` e assim por diante. O componente
`ModuleArt` já cuida de `loading="lazy"`, `decoding="async"` e das dimensões
declaradas. Só a arte de abertura carrega antes da dobra.

> **Sobre a arte "Comece por aqui":** ela existe, mas a página hoje não tem
> um lugar visual pra ela. A trilha aparece como item de texto na seção 12 e
> na composição do preço. Se quiser exibir a arte, o lugar mais natural é ao
> lado do item "Trilha Comece por aqui" na seção 12. Não coloquei sem
> confirmar, porque desequilibra a lista de cinco itens.

## M4. Como o carregamento foi tratado

Nove imagens verticais numa página que roda no celular é peso de verdade.
O que está no código:

- Todas com `width` e `height` declarados: o espaço é reservado antes de
  carregar, sem salto de layout.
- Todas com `loading="lazy"` e `decoding="async"`, menos a arte de abertura.
- Placeholder em CSS puro enquanto não há arquivo: zero bytes de imagem.
- A proporção 2:3 vem do `aspect-ratio` no CSS, então mesmo um arquivo fora
  da medida não quebra a grade, só recorta pelo `object-fit: cover`.

O que depende de você: exportar em WebP e respeitar o teto de 120 KB. Um PNG
de 800 x 1200 pesa de 400 KB a 1 MB. Nove deles somam o peso de um vídeo
curto.

---

## Resumo para pedir ao criador

```
1. VSL          embed 16:9, mínimo 1280x720          BLOQUEIA
2. Foto Thiago  640x800 (4:5), vertical, fundo escuro BLOQUEIA
3. 3 depoimentos vídeo 1080x1920 + 3 posters 1080x1920 (depois de gravados)
4. OG image     1200x630
5. Favicon      512x512
6. Retrato hub  184x184

MÉTODO S.U.R.F.E
M1. Arte abertura  PROVISÓRIA (logo). Real: 960x1200, WebP, até 160 KB
M2. Foto Thiago    OK (thiago_foto.webp, 1200x1600)
M3. 9 artes modulo 8 OK em public/metodo. Falta: comece-por-aqui (800x1200)
                   Salto Quântico veio horizontal, ideal reenviar em 2:3
```

---

## Decisões que dependem do Thiago antes de fechar os assets

1. **Vai ter VSL?** A página é construída em torno de um vídeo no hero. Se
   não vai gravar, o hero precisa ser remontado antes, não depois.
2. **Garantia de 7 ou 30 dias?** Hoje está 7 dias incondicional, que é o
   direito de arrependimento já garantido por lei. Se optar por 30 dias,
   muda `GARANTIA_DIAS` no config e o texto da seção 14.
3. **Vai existir janela de R$97?** Hoje `PRECO_JANELA` está `null`, ou
   seja, a página vende a R$197 sem preço riscado. Só preencher se o
   produto realmente voltar a R$197 depois da janela.
4. ~~**Link da Kiwify.**~~ RESOLVIDO. Os dois checkouts estão no ar:

   | Página | Preço | Link | Constante |
   | --- | --- | --- | --- |
   | `/surfe-digital` (pública) | R$197 | `pay.kiwify.com.br/iSMthCh` | `CHECKOUT_URL` em `surfeDigital.js` |
   | `/kit/oferta` (e-mail do kit) | R$147 | `pay.kiwify.com.br/PjPcARr` | `CHECKOUT_URL_OFERTA` em `ofertaSurfeDigital.js` |

   Cada página usa só o link dela, verificado no HTML de produção. Se um
   dia trocar um dos dois, **confira que não inverteu**: a página pública
   com o link de R$147 entrega o desconto pra quem nunca baixou o kit.
5. **Data de fechamento da janela.** Se existir data real, preencher
   `DATA_FECHAMENTO` no config e ela entra no bloco de preço como frase,
   sem contador.
