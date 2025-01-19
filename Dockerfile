# Use uma imagem Node.js com suporte à última versão
FROM node:18

# Configurar o diretório de trabalho no container
WORKDIR /app

# Copiar os arquivos de dependência primeiro (para cache eficiente)
COPY package*.json ./

# Instalar as dependências
RUN npm install

# Instalar o ts-node globalmente
RUN npm install -g ts-node

# Copiar o restante dos arquivos para o container
COPY . .

# Expor a porta usada pela aplicação
EXPOSE 3000

ENV PORT=11863
ENV MYSQL_HOST='monorail.proxy.rlwy.net'
ENV MYSQL_USER='root'
ENV MYSQL_ROOT_PASSWORD='IBAkeCuaqLHLnkAMNYqQXCQwkFrMCFlq'
ENV MYSQL_DB=railway

# Comando para iniciar o servidor com ts-node
CMD ["ts-node", "src/server.ts"]
