# Use uma imagem Node.js com suporte à última versão LTS
FROM node:18-alpine

# Configurar o diretório de trabalho no container
WORKDIR /app

# Copiar apenas os arquivos necessários para instalação das dependências
COPY package.json package-lock.json* ./

# Definir a variável de ambiente para produção
ENV NODE_ENV=production

# Instalar apenas as dependências necessárias
RUN npm ci --only=production

# Copiar o restante dos arquivos para o container
COPY . .

# Expor a porta usada pela aplicação
EXPOSE 11863

# Comando para iniciar o servidor com ts-node
CMD ["npx", "ts-node", "src/server.ts"]
