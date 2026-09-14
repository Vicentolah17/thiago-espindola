# COPY · Ecossistema Surfe a Realidade

Documento de trabalho da copy. Contém **todo** o texto visível das quatro páginas.
Versão atual: v0 (rascunho gerado). Próxima: **v1, sua.**

---

## Como usar este documento

**Edite só o texto.** Cada bloco tem duas partes:

```
**Título:** O texto que aparece na tela
```

O rótulo em negrito (`**Título:**`) é a etiqueta que eu uso pra devolver a copy
pro lugar certo no código. O que vem depois dos dois pontos é seu.

**Não mexa em:**

- Títulos de seção (as linhas com `##` e `###`)
- Os rótulos em negrito antes dos dois pontos
- As linhas com `código` entre crases, que são o endereço no projeto
- A numeração dos itens em lista

**Pode mexer à vontade em:** todo o resto.

**Se quiser adicionar ou remover um item de uma lista** (um módulo, uma
pergunta do FAQ, um benefício), pode. Só escreve um comentário do lado tipo
`[NOVO]` ou `[CORTAR]` que eu ajusto a estrutura junto.

Quando a v1 estiver pronta, me manda este arquivo editado que eu aplico.

---

## Quatro regras que a copy precisa respeitar

Estas travas existem porque a página pública roda tráfego pago depois, e claim
errado derruba conta de anúncio.

**1. Nada de travessão.** Nem `—` nem `–` em lugar nenhum. Use vírgula, ponto
ou parênteses. Hoje o documento inteiro está limpo disso.

**2. Nada de promessa de faturamento.** Nenhum número de dinheiro como
resultado, em nenhuma seção, em nenhum botão. Nada de "R$3 mil na primeira
semana" ou "renda de X por mês". O único número de resultado permitido é o do
Thiago: 40 mil seguidores em 2 meses, que é seguidor, não dinheiro, e é
verificável no perfil.

**3. Nada de prova inventada.** Nenhum nome de aluno, depoimento ou print que
não exista de verdade. Os espaços de depoimento estão vazios de propósito.

**4. Nada de garantir resultado.** Fale de método, caminho e trabalho. Nunca de
garantia de sucesso.

---

## Onde o espaço aperta

Não é limite rígido, é aviso de onde o layout reclama.

| Onde | Caber em |
| --- | --- |
| Headline do hero (as duas páginas) | até ~60 caracteres, senão passa de 2 linhas no desktop |
| Título de card e de módulo | 1 linha, até ~34 caracteres |
| Apoio de card | 2 linhas, até ~90 caracteres |
| Texto de botão | até ~32 caracteres, senão quebra em duas linhas |
| Rótulo de seção (o textinho em caixa alta) | 1 a 3 palavras |
| Etiqueta e badge | 1 a 3 palavras |
| Chips do hero | até ~40 caracteres cada |

---
---

# PÁGINA 1 · HUB

Rota `/` · arquivo `src/config/hub.js`

A porta de entrada. É um menu, não uma página de venda: o trabalho dela é fazer
a pessoa escolher um caminho, não convencer.

## 1.1 Aba do navegador e prévia de link

`src/app/layout.jsx`

**Título da aba:** Surfe a Realidade · Thiago Espíndola

**Descrição:** Você não nasceu travado, foi treinado. Comece pelo kit gratuito.

> A descrição é o que aparece embaixo do link quando alguém cola no WhatsApp.

## 1.2 Topo

`header`

**Linha de cima:** Surfe a

**Nome grande:** Realidade

**Frase de apoio:** Você não nasceu travado, foi treinado. Dá pra reprogramar isso. Escolhe por onde começar.

## 1.3 Card principal (Salto Quântico)

`kit`

**Etiqueta:** Gratuito

**Linha acima do título:** Começa aqui, de graça

**Título:** Salto Quântico

**Texto:** Viver o mesmo roteiro toda semana é horrível, e conteúdo motivacional não resolve. Eu tentei, a angústia sempre voltava. Salte para sua realidade ideal, enquanto há tempo.

**Botão:** Acessar DE GRAÇA

> A etiqueta sai em CAIXA ALTA na tela. Escreva normal, o layout converte.

> Link definitivo, na Gumroad: `thiagoespindola.gumroad.com/l/saltoquantico`.
> Abre em aba nova, como todos os links que saem do hub.

## 1.4 Rótulo da lista

`levelsLabel`

**Rótulo:** Próximos níveis

## 1.5 Card 01 · Surfe Digital

`levels[0]`

**Número:** 01

**Título:** Surfe Digital

**Texto:** Como eu cheguei a 40K seguidores em 2 meses. Viralização, conteúdo e co-produção (sem aparecer), o jogo digital destravado.

> Este título aparece em CAIXA ALTA na tela. Escreva normal, o layout converte.

## 1.6 Card 02 · Método S.U.R.F.E

`levels[1]`

**Número:** 02

**Título:** Método S.U.R.F.E

**Texto:** O protocolo completo de reprogramação mental, pra quem já entendeu que quebrar ciclos é o primeiro passo.

## 1.7 Card 03 · Surfar Elite

`levels[2]`

**Número:** 03

**Título:** Surfar Elite

**Etiqueta:** por aplicação

**Texto:** Fazer mais de 10K em 3 meses com sua própria marca digital. Esse é o poder do Surfar Elite. Acompanhamento direcionado e técnicas de aplicação.

> Promessa de faturamento com valor e prazo. Aprovada pelo cliente, mas vai
> contra a regra 2 deste documento. Revisar antes de apontar anúncio pro hub
> ou pra página do Elite.

## 1.8 Redes e rodapé

`socials` e `rodape`

**Rede 1:** Instagram

**Rede 2:** YouTube

**Assinatura:** Surfe a Realidade

**Direitos:** © 2026 Thiago Espíndola · Todos os direitos reservados

## 1.9 Texto do placeholder do retrato

`HubHeader.jsx`

**Palavra dentro do círculo:** retrato

> Só aparece se a logo for removida. Hoje quem está no ar é a logo do surfista.

---
---

# PÁGINA 2 · SURFE DIGITAL (pública, R$197)

Rota `/surfe-digital` · arquivo `src/config/surfeDigital.js`

Página de venda completa, 16 seções. Tráfego frio e morno.

## 2.1 Aba do navegador e prévia de link

**Título da aba:** SURFE DIGITAL · Thiago Espíndola

**Descrição:** Uma formação completa pra viver do digital: marca pessoal, conteúdo que atrai e co-produção, o caminho de quem não quer aparecer.

## 2.2 Barra fixa do topo

`nav`

**Marca:** Surfe Digital

**Âncora 1:** Método

**Âncora 2:** Para quem é

**Âncora 3:** Bônus

**Âncora 4:** Preço

**Botão:** Quero entrar

> As âncoras somem no celular. Só marca e botão ficam.

## 2.3 Hero

`hero`

**Etiqueta:** Formação completa

**Headline:** Construa uma marca pessoal que trabalha por você, mesmo começando do zero hoje.

**Sub-headline:** Uma formação completa pra viver do digital, do primeiro post até a co-produção.

**Chip 1:** Marca pessoal do zero

**Chip 2:** Conteúdo que as pessoas param pra ver

**Chip 3:** Co-produção, pra quem não quer aparecer

**Botão:** Quero entrar no SURFE DIGITAL

**Linha abaixo do botão:** Acesso imediato após a compra · 7 dias de garantia

**Texto dentro do espaço do vídeo:** Área de embed do vídeo

> O texto do vídeo some quando a VSL entrar.

## 2.4 Faixa que rola

`faixaTermos`

Aparecem em caixa alta, em loop.

**1.** marca pessoal
**2.** conteúdo que atrai
**3.** co-produção
**4.** roteiros magnéticos
**5.** perfil de criador
**6.** surfe digital

## 2.5 Agitação do problema

`problema`

**Rótulo:** Para quem é

**Título:** Se você se reconhece em algum desses pontos, o problema não é você

### As 5 dores

**Dor 1, título:** Você posta e ninguém vê
**Dor 1, texto:** Aí vem a explicação fácil: o algoritmo te odeia, não é a sua vez, faltou sorte.

**Dor 2, título:** Você tem vivência, mas não sabe empacotar
**Dor 2, texto:** O conteúdo está todo dentro de você. Só que ninguém consegue acessar do jeito que você conta hoje.

**Dor 3, título:** Você copia o que viralizou e não funciona
**Dor 3, texto:** Você copiou o formato. O que fez aquilo funcionar era o mecanismo por trás, e ele não aparece na tela.

**Dor 4, título:** Você quer viver do digital e não sabe o primeiro passo
**Dor 4, texto:** A vontade existe há meses. O passo concreto de segunda de manhã, não.

**Dor 5, título:** Você não quer aparecer
**Dor 5, texto:** Então você decidiu que essa porta não é pra você. Ela é. Só que a chave é outra.

> A dor 5 ocupa a linha inteira no desktop, de propósito: ela é a ponte pra
> seção de co-produção.

### Os 2 cards de virada

**Virada 1, título:** A audiência ainda está sendo distribuída
**Virada 1, texto:** Todo dia entra gente nova consumindo conteúdo em português. Quem constrói presença agora pega essa onda inteira. Quem espera, pega o que sobrar dela.

**Virada 2, título:** Não é talento, não é sorte, é método
**Virada 2, texto:** O algoritmo não é um pêndulo te perseguindo. É um sistema com regra, e regra você aprende, aplica e repete.

## 2.6 A escolha

`escolha`

**Rótulo:** A escolha

**Título:** Você está diante de dois caminhos

### Coluna da esquerda (negativa)

**Título:** Continuar postando no escuro

**Item 1:** Você publica e torce.
**Item 2:** Cada post é um chute novo, sem leitura do que funcionou antes.
**Item 3:** Quando não engaja, sobra culpar o alcance.
**Item 4:** Seis meses depois, o perfil está igual.

### Coluna da direita (positiva)

**Título:** Operar com um sistema que já funcionou

**Item 1:** Você sabe por que aquele conteúdo funcionou.
**Item 2:** Você repete o mecanismo, não o formato.
**Item 3:** Cada post alimenta o próximo.
**Item 4:** Seis meses depois, você tem um ativo.

### Fechamento

**Pergunta:** Postar no escuro é dar importância excessiva ao algoritmo e nenhuma ao processo. Qual dos dois você vai estar vivendo daqui a seis meses?

## 2.7 Autoridade

`autoridade`

**Rótulo:** Quem está por trás

**Título:** Eu não comecei com audiência, comecei com um método

**Parágrafo 1:** Eu não tinha perfil grande, não tinha equipe e não tinha ninguém pra me indicar. Tinha um jeito de olhar pra realidade que eu vinha estudando e aplicando na minha própria vida.

**Parágrafo 2:** Quando eu passei a tratar conteúdo como sistema, e não como sorte, a conta virou. Foram 40 mil seguidores em 2 meses, aplicando no meu perfil exatamente o que eu ensino aqui dentro.

**Parágrafo 3:** O SURFE DIGITAL é esse processo escrito e colocado em ordem. Não é teoria que eu li em algum lugar. É o que eu faço toda semana.

**Texto no espaço da foto:** Foto do Thiago

> Os parágrafos são em primeira pessoa, na voz do Thiago. As credenciais abaixo
> são em terceira pessoa. Se quiser unificar a voz, me avisa.

### As 3 credenciais

**Credencial 1, título:** 40 mil seguidores em 2 meses
**Credencial 1, texto:** Crescimento real no Instagram, no período em que o método foi aplicado. Número verificável no perfil.

**Credencial 2, título:** Método aplicado, não teorizado
**Credencial 2, texto:** Tudo que está no curso passou primeiro pelo perfil dele, com erro, ajuste e repetição.

**Credencial 3, título:** Comunidade ativa
**Credencial 3, texto:** Um grupo de pessoas construindo ao mesmo tempo, trocando o que está funcionando agora.

## 2.8 Prova social (DESLIGADA)

`provaSocial` e `depoimentos`

Esta seção **não aparece no site** hoje. A estrutura existe e liga sozinha
quando houver depoimento real gravado.

**Rótulo:** Prova social
**Título:** Quem já está aplicando
**Apoio:** Depoimentos de quem entrou e colocou o método pra rodar.

> Não escreva depoimento aqui. Quando os três vídeos existirem, eles entram com
> nome real de pessoa real que autorizou.

## 2.9 O que você vai conseguir

`resultados`

**Rótulo:** O que muda

**Título:** O que você sai sabendo fazer

**Apoio:** Cada item abaixo é uma habilidade prática, não um conceito pra guardar.

**Botão no fim da seção:** Quero entrar no SURFE DIGITAL

### Os 8 benefícios

**1, título:** Montar seu perfil de criador
**1, texto:** Bio, destaques e primeira impressão que fazem a pessoa querer ficar.

**2, título:** Escrever roteiro que segura atenção
**2, texto:** Começo, meio e fim pensados pra pessoa não deslizar o dedo.

**3, título:** Entender por que um conteúdo viraliza
**3, texto:** O mecanismo por trás do formato, pra você criar em vez de copiar.

**4, título:** Vender pelos stories sem parecer vendedor
**4, texto:** Uma rotina que aquece, mostra e convida, no seu tom de voz.

**5, título:** Atrair leads todos os dias
**5, texto:** O caminho pra transformar quem assiste em quem levanta a mão.

**6, título:** Montar seu modelo de negócio solo
**6, texto:** Como uma pessoa sozinha organiza oferta, entrega e rotina.

**7, título:** Trabalhar como co-produtor
**7, texto:** Entrar na estrutura de quem já tem audiência, sem construir a sua antes.

**8, título:** Construir sem precisar aparecer
**8, texto:** O caminho inteiro pra quem não quer o próprio rosto na câmera.

> O item 8 é o único que aparece em rosa, não roxo. É a cor com que a página
> inteira marca a trilha de co-produção. Se ele mudar de posição, me avisa.

## 2.10 Tabela comparativa

`comparativo`

**Rótulo:** Lado a lado

**Título:** A diferença não está no esforço

**Cabeçalho da coluna esquerda:** Quem posta no escuro

**Cabeçalho da coluna direita:** Quem tem um sistema

**Descrição para leitor de tela:** Comparação entre postar sem método e trabalhar com um sistema.

### As 7 linhas

**Linha 1, esquerda:** Escolhe o tema no impulso do dia
**Linha 1, direita:** Trabalha dentro de uma linha de conteúdo definida

**Linha 2, esquerda:** Copia o formato que viu viralizar
**Linha 2, direita:** Entende o mecanismo e adapta pro próprio tema

**Linha 3, esquerda:** Publica e espera
**Linha 3, direita:** Publica, lê o resultado e ajusta o próximo

**Linha 4, esquerda:** Fala pra todo mundo e não conecta com ninguém
**Linha 4, direita:** Fala pra uma pessoa específica

**Linha 5, esquerda:** Trata story como sobra do feed
**Linha 5, direita:** Usa story como o lugar onde a venda acontece

**Linha 6, esquerda:** Depende de aparecer pra existir no digital
**Linha 6, direita:** Tem também o caminho da co-produção

**Linha 7, esquerda:** Recomeça do zero toda segunda
**Linha 7, direita:** Acumula, cada semana em cima da anterior

> Linhas curtas funcionam melhor aqui: no celular são duas colunas estreitas
> lado a lado.

## 2.11 O método

`metodo`

**Rótulo:** O método

**Título:** SURFE DIGITAL é uma formação, não um cursinho de viralizar

**Apoio:** São nove módulos em ordem. Você começa desenhando a base do seu negócio, passa pela criação de conteúdo e termina no caminho da co-produção. Cada módulo entrega uma coisa pra executar.

**Prefixo dos blocos:** Bloco 01, Bloco 02, Bloco 03 (gerado automático, não editável)

### Bloco 1

**Nome do bloco:** Base

**Módulo 01, título:** Modelo de negócio solo
**Módulo 01, texto:** Como uma pessoa sozinha organiza oferta, entrega e rotina. O desenho vem antes do post.

**Módulo 02, título:** Marca pessoal do zero
**Módulo 02, texto:** O que você defende, pra quem você fala e como isso vira reconhecimento com o tempo.

### Bloco 2

**Nome do bloco:** Criação de conteúdo

**Módulo 03, título:** Perfil de criador
**Módulo 03, texto:** Bio, destaques e primeira impressão. O que faz alguém decidir ficar em três segundos.

**Módulo 04, título:** Roteiros magnéticos
**Módulo 04, texto:** A estrutura que segura atenção do primeiro ao último segundo, em qualquer formato.

**Módulo 05, título:** Vender pelos stories
**Módulo 05, texto:** A rotina que aquece, mostra e convida, sem o conteúdo virar anúncio.

**Módulo 06, título:** Atrair leads todos os dias
**Módulo 06, texto:** Como transformar quem assiste em quem levanta a mão e pede o próximo passo.

### Bloco 3

**Nome do bloco:** Co-produção

**Módulo 07, título:** O que é co-produção
**Módulo 07, texto:** O modelo por dentro: quem faz o quê, como se divide e por que ele funciona.

**Módulo 08, título:** Trabalhar como co-produtor
**Módulo 08, texto:** Como entrar na operação de um criador que já tem audiência e entregar resultado.

**Módulo 09, título:** Seu perfil de co-produtor
**Módulo 09, texto:** Como se apresentar, o que mostrar e onde encontrar os criadores certos.

> O nome do bloco 3 precisa continuar sendo exatamente "Co-produção": é ele que
> faz os módulos 07, 08 e 09 ganharem a cor rosa em vez de roxa.

### Os 2 cards de reforço

**Reforço 1, título:** Aulas práticas, sem enrolação
**Reforço 1, texto:** Cada aula vai direto ao ponto. Você assiste e já sai com o que fazer depois.

**Reforço 2, título:** Atualizações incluídas
**Reforço 2, texto:** O digital muda. Quando o método é atualizado, você recebe sem pagar de novo.

## 2.12 A trilha de quem não quer aparecer

`coproducao`

Seção de maior destaque visual da página, junto com o preço. É o diferencial
competitivo do produto.

**Etiqueta:** Quase ninguém ensina isso

**Título:** E se você não quer aparecer?

**Texto de abertura:** Existe um caminho no digital onde você não é o rosto. Você é a estrutura por trás de quem já é o rosto. Isso chama co-produção, e são três dos nove módulos do curso.

**Botão:** Quero aprender co-produção

### Os 4 cards

**1, título:** O que faz um co-produtor
**1, texto:** Você entra na operação de um criador: estratégia de conteúdo, roteiro, oferta, lançamento. Ele aparece, você constrói.

**2, título:** Por que criadores precisam de você
**2, texto:** Quem tem audiência quase nunca tem tempo. Falta quem organize a oferta e faça o negócio rodar sem depender do humor da semana.

**3, título:** Você não precisa de audiência própria
**3, texto:** Esse caminho não começa com seguidor. Começa com uma habilidade que resolve um problema real de quem já tem seguidor.

**4, título:** Por que agora
**4, texto:** Tem muito criador crescendo rápido e pouca gente sabendo operar por trás. A vaga existe e está aberta.

## 2.13 Bônus

`bonus`

**Rótulo:** Bônus

**Título:** Dois bônus entram junto

**Apoio:** Sem soma de valor inventada. Os dois estão inclusos no preço.

**Bônus 1, nome:** Acesso à comunidade
**Bônus 1, texto:** Um grupo de gente construindo ao mesmo tempo que você. A pergunta que te trava hoje, alguém ali já passou por ela.
**Bônus 1, etiqueta:** Incluso

**Bônus 2, nome:** Material de implementação
**Bônus 2, texto:** Checklist de execução pra você não travar no meio do caminho, mais um encontro ao vivo de tira-dúvidas.
**Bônus 2, etiqueta:** Incluso

> A etiqueta é "Incluso" e não um valor em reais de propósito. Somar valor
> fictício de bônus num produto de R$197 tira credibilidade em vez de dar.

## 2.14 Oferta e preço

`oferta`

**Etiqueta:** Acesso imediato

**Título:** Entre no SURFE DIGITAL

**Preço na tela:** R$197

**Linha do parcelamento:** à vista, ou parcelado no cartão

**Botão:** Quero entrar no SURFE DIGITAL

**Título da lista:** O que está incluso

### O que está incluso

**1.** Os 9 módulos do SURFE DIGITAL
**2.** O bloco completo de co-produção
**3.** Acesso à comunidade
**4.** Checklist de execução
**5.** Encontro ao vivo de tira-dúvidas
**6.** Atualizações do método
**7.** Acesso imediato após a compra
**8.** 7 dias de garantia

### Textos que só aparecem se houver janela de lançamento

Hoje **não aparecem**, porque a página vende a R$197 direto, sem preço riscado.

**Etiqueta alternativa:** Condição de lançamento
**Título alternativo:** Entre agora, na janela
**Texto de escassez:** O preço de lançamento vale enquanto a janela estiver aberta. Quando ela fecha, o SURFE DIGITAL volta para o preço cheio. Sem contador na tela e sem cronômetro que reinicia: é só o preço voltando ao normal.

> Se decidirem fazer janela de lançamento com preço menor, esses três textos
> ligam sozinhos e o R$197 vira preço riscado. Enquanto não houver janela real,
> a página não fala de janela nenhuma.

## 2.15 Garantia

`garantia`

**Título:** 7 dias pra decidir sem risco

**Texto:** Você entra, assiste e aplica. Se em 7 dias não fizer sentido pra você, pede o reembolso e recebe o valor de volta. Sem justificativa e sem ninguém tentando te convencer do contrário. Esse é o direito de arrependimento previsto no Código de Defesa do Consumidor, e aqui ele vale integral.

**Texto dentro do selo:** 7 dias

## 2.16 FAQ

`faq`

**Rótulo:** Dúvidas

**Título:** Perguntas que chegam sempre

**Pergunta 1:** Funciona pra quem está começando do zero?
**Resposta 1:** Funciona, e o curso começa exatamente aí. Os dois primeiros módulos são sobre montar a base antes de existir qualquer seguidor. Se você já tem perfil, essa parte passa mais rápido.

**Pergunta 2:** Funciona pra quem não quer aparecer?
**Resposta 2:** Sim. Três dos nove módulos são sobre co-produção, que é o caminho de trabalhar por trás de criadores que já aparecem. Você não precisa gravar o próprio rosto pra seguir por ali.

**Pergunta 3:** Quanto tempo por dia eu preciso?
**Resposta 3:** As aulas são curtas e dá pra fazer um módulo por semana. A execução é que pede constância, não volume. Uma hora por dia bem usada rende mais do que um fim de semana inteiro uma vez por mês.

**Pergunta 4:** E se eu não tenho o que ensinar?
**Resposta 4:** Você não precisa ensinar nada pra começar. Marca pessoal também se constrói mostrando processo, opinião e o que você está aprendendo agora. E se mesmo assim não for o seu caminho, a co-produção não depende de você ter conteúdo próprio.

**Pergunta 5:** Como eu recebo o acesso?
**Resposta 5:** O pagamento é pela Kiwify. Assim que a compra é confirmada, o acesso chega no seu e-mail. Não tem espera nem turma pra abrir.

**Pergunta 6:** Como funciona a garantia?
**Resposta 6:** São 7 dias contados a partir da compra. Nesse período você pede o reembolso e recebe o valor de volta, sem precisar justificar. É o direito de arrependimento do Código de Defesa do Consumidor.

## 2.17 Rodapé

`rodape`

**Assinatura:** Surfe a Realidade

**Direitos:** Todos os direitos reservados

> A linha completa monta como: © 2026 Thiago Espíndola · Todos os direitos reservados

**Link 1:** Política de privacidade

**Link 2:** Termos de uso

**Disclaimer 1:** Este site não é parte do Facebook nem da Meta Platforms, Inc. O nome Facebook é marca registrada da Meta Platforms, Inc.

**Disclaimer 2:** Os resultados variam de pessoa para pessoa e dependem de aplicação, contexto e esforço individual. Nada nesta página é garantia de resultado.

> Os dois disclaimers são proteção pra conta de anúncio. Pode reescrever pra
> ficar mais natural, mas o sentido dos dois precisa continuar de pé.

## 2.18 Botão fixo do celular

`ctaFixo`

**Ação:** Quero entrar

**Linha de apoio:** acesso imediato

> Aparece só no celular, depois que a pessoa passa do hero, e some no rodapé.
> Mostra o preço ao lado da ação, então o texto precisa ser bem curto.

---
---

# PÁGINA 3 · SURFE DIGITAL (oferta exclusiva, R$147)

Rota `/kit/oferta` · arquivo `src/config/ofertaSurfeDigital.js`

Destino do e-mail de quem baixou o kit. Não é linkada em lugar nenhum e não
aparece no Google. Público quente: a pessoa já conhece o Thiago e já consumiu
material dele.

**O tom aqui é mais direto e mais urgente que o da página pública.** Ela não
precisa ser apresentada ao produto, precisa decidir.

## 3.1 Aba do navegador

**Título da aba:** SURFE DIGITAL · condição exclusiva

**Descrição:** Condição de quem baixou o Kit de Aplicação. Página não listada.

## 3.2 Hero

`hero`

**Etiqueta:** Só para quem baixou o kit

**Headline:** Você já começou. Agora vem o sistema inteiro.

**Sub-headline:** O Kit de Aplicação é o primeiro passo. O SURFE DIGITAL é o caminho completo: marca pessoal, conteúdo que as pessoas param pra ver e co-produção, a trilha de quem não quer aparecer.

**Botão:** Quero o SURFE DIGITAL agora

**Linha abaixo do botão:** R$147 à vista · acesso imediato · 7 dias de garantia

> A linha abaixo do botão monta sozinha com o preço e o prazo de garantia. Se
> reescrever, mantenha os dois valores vindo das variáveis.

## 3.3 Reforço da exclusividade

`exclusividade`

**Título:** Este preço não existe fora daqui

**Texto:** Na página pública o SURFE DIGITAL é R$197, e continua sendo. Os R$147 desta página são a condição de quem baixou o Kit de Aplicação. Não é cupom que circula, não é campanha de feriado. É este link, que chegou no seu e-mail.

> Esta é a seção que justifica o desconto. Se ela não convencer, o preço menor
> parece arbitrário e derruba a percepção de valor do produto inteiro.

## 3.4 O que você leva

`entrega`

**Rótulo:** A entrega

**Título:** O que você leva

**Apoio:** Nove módulos em ordem, do desenho do negócio até o caminho da co-produção.

**Título dos bônus:** E ainda entra junto

**Bônus 1, nome:** Acesso à comunidade
**Bônus 1, texto:** Um grupo de gente construindo ao mesmo tempo que você.

**Bônus 2, nome:** Material de implementação
**Bônus 2, texto:** Checklist de execução e um encontro ao vivo de tira-dúvidas.

> Os nove módulos desta seção são os mesmos da página pública, puxados do mesmo
> lugar. Se você editar um nome de módulo na seção 2.11, ele muda aqui também.
> Isso é de propósito: uma lista só, pra não divergirem.

## 3.5 Prova

`prova`

**Título:** O método aplicado no próprio perfil

**Número em destaque:** 40 mil

**Rótulo do número:** seguidores em 2 meses

**Texto:** Crescimento real do Thiago no Instagram, no período em que o método foi aplicado. Número verificável no perfil, e o único número de resultado que esta página usa.

**Título dos depoimentos:** Quem já está aplicando

**Texto das caixas vazias:** Depoimento 1, Depoimento 2, Depoimento 3

> As caixas de depoimento estão vazias e tracejadas hoje. Antes de disparar o
> e-mail, ou elas recebem vídeo real ou a lista some da página. Não escreva
> depoimento aqui.

## 3.6 A oferta

`oferta`

**Etiqueta:** Sua condição

**Título:** SURFE DIGITAL completo

**Preço riscado:** R$197

**Preço em destaque:** R$147

**Linha do parcelamento:** à vista, ou parcelado no cartão

**Botão:** Garantir meu acesso por R$147

**Texto da garantia:** Você entra, assiste e aplica. Se em 7 dias não fizer sentido pra você, pede o reembolso e recebe o valor de volta, sem precisar justificar.

### O que está incluso

**1.** Os 9 módulos do SURFE DIGITAL
**2.** O bloco completo de co-produção
**3.** Acesso à comunidade
**4.** Checklist de execução
**5.** Encontro ao vivo de tira-dúvidas
**6.** Atualizações do método
**7.** Acesso imediato após a compra
**8.** 7 dias de garantia

> Aqui o preço riscado é honesto: R$197 é o preço público real, praticado na
> outra página. Essa é a diferença pra página pública, onde não existe riscado.

## 3.7 Fechamento

`ctaFinal`

**Título:** Você leu até aqui. O preço continua o mesmo.

**Texto:** R$147 é o que esta página cobra, e ela não fica linkada em lugar nenhum. Quando você fechar esta aba, o caminho de volta é o e-mail que te trouxe.

**Botão:** Entrar no SURFE DIGITAL

**Linha abaixo do botão:** Pagamento pela Kiwify · acesso imediato · 7 dias de garantia

---
---

# PÁGINA 4 · MÉTODO S.U.R.F.E (R$97)

Rota `/metodo-surfe` · arquivo `src/config/metodoSurfe.js`

Página de venda completa, 17 seções. Tom mais grave e introspectivo que o do
SURFE DIGITAL: aquela vende construção, esta vende reconhecimento.

**Regra extra desta página:** proibido usar campo científico como selo de
validação. Descrever como a mente funciona é legítimo ("o comportamento é
largamente automático"). Escrever "a neurociência comprova" não é.

Alguns textos montam sozinhos com as constantes do topo (20 minutos, 7 dias,
R$97). Eles aparecem aqui já montados, mas no código os números vêm da
variável. Se for mudar o número, muda a constante, não o texto.

## 4.1 Aba do navegador

**Título da aba:** Método S.U.R.F.E · Thiago Espíndola

**Descrição:** Um protocolo de 20 minutos por dia para sair do piloto automático e reescrever os padrões que decidem a sua vida por você.

## 4.2 Barra fixa do topo

`nav`

**Marca:** Método S.U.R.F.E

**Âncora 1:** O padrão

**Âncora 2:** O método

**Âncora 3:** Para quem é

**Âncora 4:** Investimento

**Botão:** Começar agora

## 4.3 Hero

`hero`

**Assinatura acima do título:** Surfe a Realidade

**Headline:** Existe uma versão da sua vida onde as escolhas são suas de verdade. Ela não está longe. Está do outro lado de um padrão que ninguém te ensinou a desligar.

**Headline alternativa (guardada no código, desligada):** Existe uma versão da sua vida onde o dinheiro, a liberdade e as escolhas já são suas. E essa realidade paralela está esperando ser acessada.

**Subtexto:** Desde a infância você gravou padrões que ensinaram a operar em modo sobrevivência: encolher diante da oportunidade, acreditar que a vida é trabalhar, esperar e nunca chegar. Isso não é quem você é. É a frequência em que você foi programado.

**Botão:** Quero reprogramar minha mente

**Linha abaixo do botão:** 20 minutos por dia · acesso imediato · garantia de 7 dias

**Texto dentro do espaço da arte:** Arte de abertura

> A headline tem 152 caracteres e rende 7 linhas no celular. Ela veio do
> briefing e está no tamanho um degrau abaixo do h1 padrão por isso. A
> alternativa fala em dinheiro e liberdade como coisas "já suas", o que roça
> a regra de promessa de resultado. Ficou guardada, não no ar.

## 4.4 Agitação

`agitacao`

**Título:** Você já teve aquela sensação estranha? De que a vida que você está vivendo não é a sua?

**Parágrafo 1:** Por fora, tudo em ordem. Trabalho, rotina, gente em volta. Por dentro, um ruído constante, como se alguma coisa estivesse fora do lugar e você não conseguisse apontar o quê.

**Parágrafo 2:** É a sensação de estar sintonizado num canal errado. Você sente que a frequência certa existe. E toda vez que tenta sintonizar, alguma coisa puxa de volta pro mesmo loop.

**Rótulo da lista:** Os quatro padrões

### Os 4 padrões

**01, título:** Uma vida que você não escolheu
**01, texto:** Como se seguisse um roteiro escrito por outra pessoa, e a sua parte fosse só decorar as falas.

**02, título:** O projeto que para de novo
**02, texto:** Você começa, jura que dessa vez vai ser diferente, e em poucas semanas tudo volta pro lugar de antes.

**03, título:** A informação está lá. A mudança, não.
**03, texto:** Você já leu, já assistiu, já tentou. Sabe o que precisa fazer. E continua no mesmo ponto.

**04, título:** Uma parte acredita que merece mais. A outra trabalha o dia inteiro pra provar que não.
**04, texto:** Não é preguiça nem falta de vontade. É um padrão rodando por baixo, e ele é bom no que faz.

> O padrão 04 é o mais forte e ocupa a linha inteira no desktop, com acento
> violeta. Os outros três ficam apagados de propósito.

## 4.5 A raiz

`raiz`

**Título:** Mais conteúdo não vai te salvar. Reprogramação vai.

**Parágrafo 1:** A mente que criou o problema não resolve o problema com as mesmas ferramentas que o criaram.

**Parágrafo 2:** A maioria consome anos de desenvolvimento pessoal e não muda nada. Não por falta de esforço. Por tentar resolver um problema de identidade com uma solução de superfície.

**Fechamento:** Motivação não faz isso. Força de vontade não faz isso. Protocolo faz.

## 4.6 Faixa que rola

`faixaTermos`

**1.** agora chegou a sua vez
**2.** sair do piloto automático
**3.** surfar a realidade
**4.** 20 minutos por dia
**5.** sintonizar
**6.** reprogramar

## 4.7 Números sociais (DESLIGADO)

`NUMEROS_SOCIAIS` e `MOSTRAR_NUMEROS_SOCIAIS`

Não aparece no site. Três números grandes com rótulo pequeno, só ligam com a
flag em `true` e valores reais preenchidos. Hoje os três estão vazios.

> Não preencher com número que não seja verificável.

## 4.8 Autoridade

`autoridade`

**Rótulo:** Quem está por trás

**Título:** Como eu descobri isso, e por que você deveria saber

**Parágrafo 1:** Eu também fui um zumbi funcional. Faculdade, rotina, amigos, tudo dentro do padrão esperado. Por fora, uma vida que fazia sentido. Por dentro, ansiedade constante e a sensação de seguir um script que eu não tinha escrito.

**Parágrafo 2:** Eu sentia no corpo que existia outra versão da minha realidade. E não conseguia acessar.

**Parágrafo 3:** Até a pergunta que virou a chave: e se não fosse falta de esforço, azar ou limitação? E se fosse um padrão, instalado sem que eu percebesse, rodando por baixo de tudo?

**Parágrafo 4:** Daí veio a obsessão. E a resposta que eu encontrei: fomos programados por um sistema que funciona melhor quando a gente opera no mínimo.

**Subtítulo do segundo bloco:** Por que eu decidi compartilhar

**Parágrafo 5:** Conteúdo solto não transforma ninguém. Eu sei porque consumi anos dele. Então peguei o que estudei, testei e vivi, e transformei num sistema com começo, meio e resultado.

**Parágrafo 6:** Hoje eu moro na Europa, com liberdade de tempo, de escolha e de movimento. O que me move é ver alguém preso no piloto automático começar a navegar com intenção.

**Texto no espaço da foto:** Foto do Thiago

> Toda a seção é em primeira pessoa, sem número de investimento pessoal e sem
> número de alcance, como o briefing pediu.

## 4.9 Para quem é

`paraQuem`

**Rótulo:** Para quem é

**Título:** Seja honesto consigo mesmo.

### Coluna positiva

**Título:** É pra você se

**Item 1:** Sua mente trabalha contra você mais do que a favor.
**Item 2:** Você sabe o que precisa fazer e não consegue sustentar.
**Item 3:** Você cansou de motivação que some em 48 horas.
**Item 4:** Você quer entender a mecânica real por trás da mudança, e não só o “acredite em você”.
**Item 5:** Você topa 20 minutos por dia pra mudar o que anos de tentativa não mudaram.

### Coluna negativa

**Título:** Não é pra você se

**Item 1:** Você quer atalho mágico, sem compromisso.
**Item 2:** Você já tem exatamente a vida que quer e busca entretenimento.
**Item 3:** Você prefere a desculpa confortável de que não é possível.
**Item 4:** Você busca motivação. Aqui não se motiva, se reprograma.

## 4.10 O protocolo S.U.R.F.E

`protocolo`

A seção de maior peso da página. Espinha vertical, cinco letras, arte
alternando de lado. As letras acendem em sequência quando a seção entra na
tela.

**Rótulo:** O protocolo

**Título:** Um sistema de 20 minutos por dia para reescrever quem você acredita ser.

**Apoio:** Cinco etapas, em ordem. Cada uma prepara a próxima. Quando você consegue repetir as cinco de cabeça, elas começam a rodar sozinhas.

**Rótulo de cada etapa:** Etapa 1 de 5, Etapa 2 de 5... (gerado automático)

### As 5 etapas

**S, nome:** Sintonia
**S, texto:** Calibrar a mente para a versão que você quer se tornar. Antes de agir, você sintoniza.

**U, nome:** Unidade
**U, texto:** Parar de lutar contra a realidade e passar a moldá-la. A resistência é o que te mantém no lugar.

**R, nome:** Reprogramação
**R, texto:** Reescrever as crenças que te mantêm preso, especialmente as que bloqueiam prosperidade.

**F, nome:** Fluxo
**F, texto:** Entrar no estado em que ação e resultado se alinham. Menos força, mais direção.

**E, nome:** Execução
**E, texto:** Transformar o que foi calibrado em resultado concreto. Aqui o padrão novo vira vida.

> As letras são fixas, é o acrônimo do produto. O nome de cada etapa também
> precisa continuar começando com a letra dela.

## 4.11 Além do protocolo

`aprofundamento`

**Rótulo:** Aprofundamento

**Título:** E depois que o protocolo está rodando

**Apoio:** Três módulos que vêm depois. Não são bônus, são a camada seguinte.

**1, nome:** Leis Herméticas
**1, texto:** Os princípios por trás de como a realidade responde ao que você emite.

**2, nome:** Salto Quântico
**2, texto:** A mudança de patamar, depois que o protocolo já está rodando em você.

**3, nome:** Economia Digital
**3, texto:** Como o novo padrão mental se traduz em oportunidade concreta.

## 4.12 A base por trás do método

`base`

**Título:** Não é autoajuda. É prática deliberada.

**Texto:** O comportamento humano é largamente automático: a maior parte do que você faz hoje roda em padrões instalados cedo e nunca revisados. Automatismos se reescrevem com método e repetição, não com pensamento positivo. O S.U.R.F.E é engenharia de padrão. Não é lei da atração, não é mantra. É prática, todo dia, na mesma ordem.

> Quatro frases. Se crescer, falhou. E sem nome de ciência como prova.

## 4.13 O que você recebe

`entrega`

**Rótulo:** O que você recebe

**Título:** O acesso é liberado na hora. Isso é o que está lá dentro.

**1, título:** Oito módulos completos
**1, texto:** Cada um com várias aulas. Os cinco do protocolo e os três de aprofundamento.

**2, título:** Trilha Comece por aqui
**2, texto:** Pra você saber exatamente por onde começar, sem se perder no menu.

**3, título:** Comunidade no WhatsApp
**3, texto:** Exclusiva para alunos. Quem está aplicando junto, no mesmo ritmo que você.

**4, título:** Acesso pela Kiwify
**4, texto:** Liberado imediatamente após a compra, no e-mail que você usar no checkout.

**5, título:** No seu ritmo, do seu jeito
**5, texto:** A partir de 20 minutos por dia. Sem turma, sem prazo pra assistir.

## 4.14 Investimento

`investimento` e as constantes de preço

**Rótulo:** Investimento

**Título:** Um protocolo. Um preço.

**Rótulo da âncora:** Valor total

**Valor riscado:** R$457

**Composição da âncora, 1:** 8 módulos completos
**Composição da âncora, 2:** Trilha Comece por aqui
**Composição da âncora, 3:** Comunidade no WhatsApp

**Preço em destaque:** R$97

**Linha do preço:** à vista, ou 12x de R$10,03

**Botão:** Aceito a oferta

**Linha abaixo do botão:** Pagamento seguro · acesso imediato

### O que está incluso

**1.** Os 5 módulos do protocolo S.U.R.F.E
**2.** Os 3 módulos de aprofundamento
**3.** Trilha Comece por aqui
**4.** Comunidade no WhatsApp
**5.** Acesso imediato pela Kiwify
**6.** 7 dias de garantia

> O preço e o botão são os únicos lugares da página em dourado, junto com o
> botão da seção 4.17. É o acento reservado pro momento de compra.

## 4.15 Garantia

`garantia`

**Título:** 7 dias pra testar o protocolo

**Texto:** Você entra, testa o protocolo, roda os primeiros dias. Se não fizer sentido pra você, pede o reembolso e recebe o valor de volta, sem justificativa. É o direito de arrependimento previsto no Código de Defesa do Consumidor, e aqui ele vale integral.

**Texto dentro do selo:** 7 dias

## 4.16 FAQ

`faq`

**Rótulo:** Dúvidas

**Título:** O que as pessoas perguntam antes de entrar

**Pergunta 1:** Preciso de conhecimento prévio?
**Resposta 1:** Não. O curso abre pela trilha Comece por aqui, que organiza a ordem certa. Se você nunca leu nada sobre o assunto, começa do mesmo lugar que todo mundo.

**Pergunta 2:** Quanto tempo por dia eu preciso?
**Resposta 2:** 20 minutos. É a prática central do protocolo. As aulas você assiste no ritmo que quiser, mas é a prática diária que faz o padrão novo se instalar.

**Pergunta 3:** O curso é online e no meu ritmo?
**Resposta 3:** Sim. Tudo fica na plataforma Kiwify. Você assiste quando quiser, de onde quiser, quantas vezes quiser.

**Pergunta 4:** Por quanto tempo tenho acesso?
**Resposta 4:** O acesso é liberado na sua conta da Kiwify e você volta nas aulas quantas vezes precisar.

**Pergunta 5:** E se eu não gostar?
**Resposta 5:** Você tem 7 dias pra pedir reembolso, sem justificativa. É o direito de arrependimento do Código de Defesa do Consumidor.

**Pergunta 6:** Serve para qualquer idade?
**Resposta 6:** O protocolo é o mesmo pra qualquer idade adulta. Padrão instalado é padrão instalado, aos 20 ou aos 60. O que muda é há quanto tempo ele está rodando, não a possibilidade de revisar.

**Pergunta 7:** Qual a diferença entre isso e o conteúdo gratuito do Thiago?
**Resposta 7:** O conteúdo gratuito informa: te mostra que o padrão existe e como ele opera. O protocolo organiza essa informação em prática, com ordem e constância. É a diferença entre saber que precisa treinar e ter o treino montado, dia a dia.

> A resposta 4 não diz por quanto tempo de propósito: eu não sei se o acesso
> é vitalício ou por prazo, e "vitalício" é promessa comercial. Confirmar e
> aí a resposta ganha o prazo.

## 4.17 A decisão

`decisao`

**Título:** A versão de você que quer mais já existe. Ela só está esperando a reprogramação.

**Texto:** Você pode continuar tentando só com vontade, e sabe onde isso te trouxe até aqui. Ou pode entender como a sua mente realmente funciona e surfar a realidade em vez de lutar contra ela.

**Botão:** Entrar no Método S.U.R.F.E

**Linha abaixo do botão:** Acesso imediato · garantia de 7 dias · pagamento seguro

## 4.18 Rodapé

`rodape`

**Assinatura:** Surfe a Realidade

**Direitos:** Todos os direitos reservados

**Link 1:** Política de privacidade

**Link 2:** Termos de uso

**Disclaimer 1:** Este site não é parte do Facebook nem da Meta Platforms, Inc. O nome Facebook é marca registrada da Meta Platforms, Inc.

**Disclaimer 2:** Os resultados variam de pessoa para pessoa e dependem de aplicação, contexto e constância. Nada nesta página é garantia de resultado.

## 4.19 Botão fixo do celular

`ctaFixo`

**Ação:** Quero entrar

**Linha de apoio:** ou 12x de R$10,03

---
---

# Coisas que valem sua atenção na v1

Não são erros, são escolhas que eu tomei sozinho e que você pode querer virar.

**1. A voz da autoridade troca de pessoa.** Na seção 2.7 os três parágrafos são
em primeira pessoa ("eu não tinha perfil grande") e as três credenciais logo
abaixo são em terceira ("passou primeiro pelo perfil dele"). Fica estranho lido
em sequência. Vale unificar.

**2. O hub fala manso, as páginas de venda falam direto.** Foi de propósito,
mas se você quiser uma voz só no ecossistema inteiro, o hub é o que muda.

**3. A página de R$147 não tem rodapé.** Sem política de privacidade, sem
termos, sem o disclaimer de resultados que a página pública tem. É uma página
que cobra dinheiro. Se quiser, eu adiciono.

**4. "Formação" aparece muito.** Está no hero da página pública, no título do
método e na sub-headline da página de oferta. Talvez uma dessas queira outra
palavra.

**5. Os CTAs quase não variam.** "Quero entrar no SURFE DIGITAL" aparece três
vezes na página pública. Repetir CTA não é erro, mas em página longa dá pra
usar a variação pra reforçar objeção diferente em cada altura da página.

**6. Um card do hub ainda não leva a lugar nenhum:** o Método S.U.R.F.E. Ele
aparece normalmente mas o clique não faz nada até o link existir.

**8. A página de R$147 ainda fala em "Kit de Aplicação".** O produto gratuito
do hub virou Salto Quântico, mas a `/kit/oferta` continua dizendo "a condição
de quem baixou o Kit de Aplicação", em três lugares (seções 3.1, 3.2 e 3.3).
Se a automação de e-mail agora dispara a partir do Salto Quântico, esse texto
está prometendo uma coisa e entregando outra. Ver detalhe abaixo.

**7. O hub agora tem três níveis e os cards ficaram desiguais.** As descrições
têm 63, 101 e 93 caracteres, então os cards rendem 3, 4 e 4 linhas no celular e
a coluna fica irregular. Se as três descrições ficarem no mesmo comprimento na
v1, a lista ganha ritmo.
