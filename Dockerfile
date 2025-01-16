# Use a imagem Node.js como base
FROM node:16

# Defina o diretório de trabalho
WORKDIR /src

# Copie os arquivos de dependências para o container
COPY package*.json ./

# Instale as dependências
RUN npm install

# Copie o restante dos arquivos
COPY . .

# Execute o build
RUN npm run build

# Comando padrão para execução
CMD CMD ["npm", "start"]
