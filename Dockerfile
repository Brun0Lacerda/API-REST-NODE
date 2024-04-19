# Use a imagem base do Node.js mais recente
FROM node:latest

# Define o diretório de trabalho no contêiner
WORKDIR /app

# Copia os arquivos package.json e package-lock.json para o diretório de trabalho
COPY package*.json ./

# Instala as dependências do aplicativo
RUN npm install

# Copia o restante do código-fonte para o diretório de trabalho
COPY . .

# Expõe a porta em que o aplicativo será executado
EXPOSE 8080

# Comando para executar o aplicativo quando o contêiner for iniciado
CMD ["node", "app.js"]
