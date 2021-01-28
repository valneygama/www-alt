# Simple Markdown WebServer

Servidor Web em NodeJS de resposta única, que lê arquivos **.txt** formatados na linguagem [MarkDown](https://guides.github.com/features/mastering-markdown/), e exibe ordenados em uma página HTML simples.

## Rodando

### Com Dockerfile
```bash
docker build -t website .
docker run -d -p 80:80 --name website website
```

### Sem Dockerfile
```bash
sudo apt install nodejs npm
npm i
npm ci --only=production
npm run server
```

## Outros
Consulte os tutoriais de uso da linguagem online:
 - https://docs.pipz.com/central-de-ajuda/learning-center/guia-basico-de-markdown#open
 - https://guides.github.com/features/mastering-markdown/

