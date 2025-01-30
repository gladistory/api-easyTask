
# Passo a Passo para Configurar a API localmente

### API Pública: https://api-easytask-production-3b67.up.railway.app/api/tasks

### 1. Inicialize o projeto 
Certifique-se de que o **Node.js** e o **npm** (ou **yarn**) estejam instalados. Em seguida, clone o repositório com o comando:

```bash
git clone https://github.com/gladistory/api-easyTask
```

---

### 2. Instale as dependências na raiz do projeto
Execute os comandos abaixo para instalar as dependências principais e de desenvolvimento:

```bash
npm install express cors dotenv
npm install --save-dev typescript ts-node @types/node @types/express nodemon
```

---

### 3. Inicialize o TypeScript
Configure o TypeScript com o comando:

```bash
npx tsc --init
```

---

### 4. Instale o MySQL
- Certifique-se de que o MySQL está instalado no seu sistema.
- Crie o banco de dados utilizando o arquivo `DB_model.sql` presente no repositório.

---

### 5. Adicione as dependências para conexão com o MySQL
Execute os comandos para instalar os pacotes necessários:

```bash
npm install mysql2
npm install --save-dev @types/mysql
```

---

### 6. Configure o arquivo `.env`
1. Na raiz do projeto, crie o arquivo `.env`.
2. Siga as instruções de preenchimento usando o exemplo fornecido no arquivo `.env.example`.
3. Realize a conexão com o banco de dados utilizando:
   - **MySQL Workbench**, ou
   - A extensão **Database Client** do VS Code.

---

### 7. Execute o servidor
Inicie o servidor com o comando:

```bash
npm run dev
```

---

### Estrutura do Arquivo `.env`
Abaixo está um exemplo de como pode ser estruturado o arquivo `.env`:

```env
PORT=3001
MYSQL_HOST='localhost'
MYSQL_USER='root'
MYSQL_ROOT_PASSWORD=sua_senha
MYSQL_DB=api_teste
```

Substitua os valores pelos dados reais do seu ambiente.

---

### Dica Extra
Caso enfrente algum problema durante a configuração, verifique as mensagens de erro no terminal ou revise as permissões e configurações do banco de dados. 

---

Com isso, sua API estará configurada e pronta para uso!
