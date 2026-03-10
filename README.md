# 🎧 Mini Spotify Player – Our Song

Um **player de música personalizado inspirado no Spotify**, desenvolvido como um presente especial.
O projeto permite tocar músicas, navegar entre faixas e acessar o player através de um **QR Code escaneável**, permitindo que o player seja aberto diretamente pelo celular.

💚 Desenvolvido com carinho como um presente.


## 🚀 Tecnologias utilizadas

Este projeto foi desenvolvido utilizando tecnologias modernas de desenvolvimento web:

* ⚛ React
* ⚡ Next.js
* 🎨 Tailwind CSS
* 🔊 HTML5 Audio API
* 🔳 Biblioteca de QR Code

---

## 🎵 Funcionalidades

✔ Player de música funcional
✔ Botão **Play / Pause**
✔ **Próxima música** e **Música anterior**
✔ Controle de **volume**
✔ **Capa da música animada** enquanto toca
✔ Interface inspirada no **Spotify**
✔ Página exclusiva para **geração de QR Code**
✔ QR Code que permite abrir o player diretamente no celular

---

## 📱 QR Code

O projeto possui uma página dedicada para gerar um **QR Code estilizado** que permite abrir o player diretamente pelo celular.

Depois que o projeto estiver online, basta escanear o QR Code para acessar o player.

Exemplo de uso:

```
Scan to listen 🎧
```

Esse QR Code pode ser utilizado para:

* Quadros personalizados
* Cartões de presente
* Impressões decorativas
* Acrílicos personalizados
* Presentes criativos

---

## 📂 Estrutura do Projeto

```
app
├─ page.tsx
├─ layout.tsx
├─ qr
│  └─ page.tsx
├─ globals.css

components
├─ Player.tsx
├─ MusicCards.tsx
├─ StyledQRCode.tsx

data
└─ musics.ts

types
└─ music.ts

public
├─ covers
├─ musics
├─ preview.png
```

---

## ⚙️ Como rodar o projeto

Clone o repositório:

```
git clone https://github.com/seu-usuario/mini-spotify-player
```

Entre na pasta do projeto:

```
cd mini-spotify-player
```

Instale as dependências:

```
npm install
```

Execute o projeto:

```
npm run dev
```

Abra no navegador:

```
http://localhost:3000
```

---

## 📷 Página de QR Code

Para gerar o QR Code do player:

```
http://localhost:3000/qr
```

Depois basta:

1. Abrir a página
2. Clicar com botão direito no QR Code
3. Salvar a imagem
4. Imprimir ou utilizar em um quadro personalizado

---

## 🎯 Objetivo do projeto

Este projeto foi desenvolvido com o objetivo de:

* Praticar **React e Next.js**
* Trabalhar com **componentização**
* Manipular **áudio no navegador**
* Integrar **QR Code com aplicações web**
* Criar um projeto criativo e significativo

Além disso, ele também foi criado como um **presente personalizado**, conectando tecnologia com algo especial.

---

## 💚 Mensagem

Este projeto foi desenvolvido com muito carinho.

Às vezes uma música pode guardar momentos especiais —
e este pequeno player foi criado exatamente para isso.

---

## 👨‍💻 Autor

**Thiago Simas**

🎓 Estudante de **Análise e Desenvolvimento de Sistemas**
💻 Desenvolvedor em formação apaixonado por tecnologia e desenvolvimento web.

---

⭐ Se você gostou do projeto, deixe uma estrela no repositório!
