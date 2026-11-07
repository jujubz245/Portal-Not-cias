# Pulso News — Portal de Notícias

Projeto da disciplina **Desenvolvimento Front-End para Web** — Universidade Positivo.

**Integrantes:** Julia Perch e Fernanda Mara
**Professor:** Fabricio Olivo

> Todas as notícias, nomes, times e indicadores deste portal são **fictícios** e foram criados apenas para fins acadêmicos.

## Como abrir

1. Descompacte a pasta `portal-noticias`.
2. Dê dois cliques em `index.html`.

Não precisa de internet nem de servidor: Bootstrap, fontes, imagens, vídeo e áudio estão dentro da pasta. Recomendado: Google Chrome ou Microsoft Edge.

## Páginas (11)

| Arquivo | Conteúdo | Bootstrap? |
|---|---|---|
| `index.html` | Destaque, últimas notícias, vídeo, newsletter, sobre e localização | Sim |
| `noticias.html` | Todas as notícias com filtro por categoria e busca | Sim |
| `politica.html` | Editoria de política + agenda da semana | Sim |
| `tecnologia.html` | Editoria de tecnologia + dicas de segurança | Sim |
| `economia.html` | Editoria de economia + tabela de indicadores | Sim |
| `esportes.html` | Editoria de esportes + tabela de classificação | Sim |
| `entretenimento.html` | Editoria de entretenimento + agenda cultural | Sim |
| `noticia-destaque.html` | Leitura da notícia completa (`?id=`) + player de áudio | **Não (HTML/CSS/JS puros)** |
| `sobre.html` | Proposta, valores, galeria em Grid, equipe e FAQ | **Não (HTML/CSS/JS puros)** |
| `contato.html` | Formulário com validação e mensagens salvas | Sim |
| `favoritos.html` | Notícias favoritas salvas no localStorage | Sim |

## Estrutura de pastas

```
portal-noticias/
├── *.html              (todas as páginas na raiz)
├── css/                style.css, temas.css, responsive.css
├── js/                 tema.js, noticias.js, main.js, formulario.js
├── lib/bootstrap/      Bootstrap 5.3.8 local (CSS e JS)
├── fonts/              Poppins e Inter em .woff2
├── img/                ilustrações das notícias, logo e galeria
├── video/              boletim-pulso.mp4
├── audio/              pulso-cast.mp3

```

## Funcionalidades em JavaScript

- Modo claro/escuro salvo no localStorage (`pulsoTema`)
- Cards de notícias criados dinamicamente a partir de um array de objetos
- Filtro por categoria e busca sem acentos
- Favoritos salvos no localStorage (`pulsoFavoritos`)
- Notícia completa montada pelo parâmetro `?id=` da URL
- Ajuste do tamanho do texto salvo (`pulsoTamanhoFonte`)
- Formulário de contato com mensagens salvas (`pulsoMensagens`)
- Newsletter salva (`pulsoNewsletter`)
- Barra de progresso de leitura, botão voltar ao topo, FAQ e menu móvel sem framework

## Publicação no GitHub

```bash
git init
git add .
git commit -m "Projeto Pulso News"
git branch -M main
git remote add origin https://github.com/USUARIO/pulso-news.git
git push -u origin main
```

Para publicar como site: no repositório, abra **Settings → Pages**, escolha a branch `main` e a pasta `/ (root)`.

## Créditos

- [Bootstrap 5](https://getbootstrap.com/) — licença MIT
- Fontes [Poppins](https://fonts.google.com/specimen/Poppins) e [Inter](https://fonts.google.com/specimen/Inter) — SIL Open Font License
- Ilustrações, vídeo e áudio criados pela equipe para o projeto (feitos pelo Notebook.google)
