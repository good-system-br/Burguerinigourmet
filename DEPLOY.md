# 🚀 Deploy na Vercel - Burguerini Gourmet

## Passos para Deploy

### 1. Configurar Variáveis de Ambiente na Vercel

No painel da Vercel, adicione a variável de ambiente:

```
GEMINI_API_KEY=sua_chave_aqui
```

### 2. Fazer Deploy

#### Opção A: Via CLI da Vercel
```bash
npm install -g vercel
vercel --prod
```

#### Opção B: Via GitHub
1. Conecte seu repositório GitHub à Vercel
2. A Vercel fará o deploy automaticamente

### 3. Comandos Úteis

```bash
# Instalar dependências
npm install

# Desenvolvimento local
npm run dev

# Build para produção
npm run build

# Preview do build
npm run preview
```

## Estrutura de Build

- **Framework**: Vite + React
- **Build Output**: `dist/`
- **Comando de Build**: `npm run build`
- **Comando de Dev**: `npm run dev`

## Variáveis de Ambiente Necessárias

- `GEMINI_API_KEY` - Chave da API do Google Gemini para o AI Sommelier

## Troubleshooting

### Erro 404 na Vercel?
✅ Certifique-se de que:
- O arquivo `vercel.json` está presente
- As dependências estão instaladas (`npm install`)
- O build funciona localmente (`npm run build`)
- A variável de ambiente está configurada na Vercel

### Imagens não carregam?
✅ As imagens devem estar em `public/assets/` ou `assets/` na raiz
✅ Usar caminhos relativos: `./assets/imagem.jpg`

## Contato

Em caso de problemas, verifique os logs da Vercel em:
https://vercel.com/dashboard
