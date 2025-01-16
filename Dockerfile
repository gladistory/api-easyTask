# Use a imagem oficial do Node.js como base
FROM node:16

# Defina o diretório de trabalho dentro do contêiner
WORKDIR /dist

# Copie os arquivos package.json e package-lock.json para instalar as dependências
COPY package*.json ./

# Instale as dependências do projeto
RUN npm install

# Copie todo o código da aplicação para o contêiner
COPY . .

# Exponha a porta em que o servidor da API está rodando
EXPOSE 11863

# Defina o comando para rodar a aplicação
CMD ["npm", "start"]
