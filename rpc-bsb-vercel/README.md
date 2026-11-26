# RPC BSB — site independente para Vercel

Projeto em Next.js 14, React e CSS. Não depende do Odoo. Preparado para deploy na Vercel.

## Como testar localmente

1. Instale Node.js 18.17 ou superior.
2. Abra a pasta do projeto no terminal.
3. Execute `npm install`.
4. Execute `npm run dev`.
5. Abra http://localhost:3000.

## Como publicar na Vercel

1. Extraia o ZIP.
2. Envie a pasta `rpc-bsb-vercel` para um repositório GitHub.
3. Na Vercel, escolha **Add New → Project** e importe o repositório.
4. Framework: Next.js. Build command: `npm run build` (padrão). Output: automático.
5. Clique em Deploy.

## Personalizações obrigatórias antes de publicar

Abra `app/page.jsx` e edite o objeto `CONFIG` no início do arquivo:

- `whatsapp`: número oficial do RPC, somente dígitos, com código do país e DDD (ex.: 5561999999999).
- `email`: e-mail oficial de contato.

O formulário do ACAMP 2027 valida os campos e prepara uma mensagem no WhatsApp configurado. Não há banco de dados nem painel administrativo; a pessoa precisa confirmar o envio da mensagem no WhatsApp.

## Conteúdo que precisa ser confirmado/completado

- Fotos oficiais: as imagens atuais são imagens demonstrativas externas do Unsplash. Substitua pelas fotos oficiais do RPC em `gallery` e nos backgrounds do `app/globals.css`.
- Loja: o site Odoo consultado mostrou “Nenhum resultado” no catálogo. A área da loja está preparada visualmente, mas precisa receber produtos, fotos, preços e links/meio de pagamento.
- Agenda: inserir datas, horários, locais e links reais dos encontros de 2027.
- Equipe: João Borges, Lília Soares e Leonardo aparecem no site consultado. O vídeo mostra um espaço para Líder Staff, mas o nome não estava legível; confirmar o nome e incluir fotos oficiais.
- WhatsApp e e-mail: os dados visíveis no site de origem estavam mascarados/eram genéricos, então não foram inventados.
- Lotes, preços e datas do acampamento: confirmar com a organização antes de divulgar.

## Observações técnicas

- Site responsivo para celular e desktop.
- Navegação por âncoras e menu mobile.
- Formulário com validação HTML nativa.
- Links de localização para Google Maps e Waze.
- Mapa incorporado do Sítio Magistral (endereço conforme a página de inscrição consultada).
- As imagens remotas exigem conexão com a internet. Para maior controle, baixe as imagens oficiais e hospede-as em `public/`.
