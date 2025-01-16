# Use a imagem base
FROM node:16

# Defina o diretório de trabalho
WORKDIR /src

# Copie os arquivos do projeto
COPY package*.json ./

# Instale as dependências
RUN npm install

# Copie o restante dos arquivos
COPY . .

# Execute o comando de build
RUN npm run build

# Configure o comando padrão
CMD ["node", "src/index.js"]
