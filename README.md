# 🌿 EcoTrend - E-commerce Sustentável

**Disciplina:** Web Development with JS | Engenharia de Software  
**Professor:** Lucas Sousa  
**Atividade:** Check-Point 04  

---

## 🌍 Demonstração ao Vivo

Acesse a aplicação funcionando diretamente pelo navegador através do GitHub Pages:  
👉 **[Clique aqui para acessar o EcoTrend](https://dgdoougz.github.io/CP4_WEBDEV/)**

---

## 📖 Sobre o Projeto
O **EcoTrend** é um e-commerce especializado em produtos sustentáveis e ecológicos. O objetivo principal da aplicação é promover um estilo de vida mais consciente, oferecendo uma interface interativa e dinâmica para a compra de itens de quatro categorias principais: roupas e acessórios, beleza e cuidados pessoais, itens para casa e tecnologia verde.

Este projeto foi desenvolvido como método de avaliação para consolidar conhecimentos em **JavaScript Moderno**, focando em manipulação do DOM, armazenamento local, requisições assíncronas e estruturação de dados.

---

## 🚀 Funcionalidades Implementadas

O projeto atende a todos os requisitos solicitados no escopo do Check-Point 04:

- **Integração de Produtos via JSON:** O catálogo de produtos não é fixo no HTML. Ele é carregado de forma assíncrona a partir do arquivo `produtos.json` utilizando a API `fetch()`.
- **Manipulação do DOM e Carrinho Dinâmico:** Os produtos são renderizados dinamicamente na tela. O usuário pode adicioná-los ao carrinho, o que aciona uma *sidebar* interativa com atualizações instantâneas do contador de itens e do valor total.
- **Persistência de Dados (Local Storage):** O estado do carrinho é salvo no `localStorage` do navegador. Se o usuário fechar a aba ou recarregar a página, os itens adicionados permanecem intactos.
- **Sistema de Filtros Dinâmicos:** Os usuários podem filtrar os produtos por categoria clicando nos botões correspondentes. A exibição é atualizada utilizando o método `.filter()` do JavaScript, sem a necessidade de recarregar a página.
- **Uso de Promises:** A ação de "Finalizar Compra" utiliza `Promises` (com `async/await` e `setTimeout`) para simular o tempo de processamento de um pagamento e fornecer um feedback visual adequado ao usuário.

---

## 🛠️ Tecnologias e Ferramentas Utilizadas

- **HTML5:** Estruturação semântica da página.
- **CSS3:** Estilização responsiva (uso de CSS Grid e Flexbox).
- **JavaScript (ES6+):** Lógica da aplicação, consumo de JSON, promises e manipulação do DOM.
- **[Google Fonts](https://fonts.google.com/):** Tipografia utilizando a fonte 'Roboto'.
- **[Font Awesome](https://fontawesome.com/):** Biblioteca de ícones utilizada para o carrinho e interface.

---

## ⚙️ Como Executar o Projeto Localmente

Embora o projeto esteja disponível online no link acima, caso queira rodar localmente:

1. Clone este repositório em sua máquina.
2. Abra a pasta do projeto em seu editor de código (ex: VS Code).
3. Utilize uma extensão como o **Live Server** para rodar a aplicação em um servidor local (isso é necessário para que a API `fetch` consiga ler o arquivo JSON sem bloqueios de segurança do navegador).
   * *Alternativa:* Se tiver o Python instalado, abra o terminal na pasta do projeto e rode `python -m http.server` (acesse `http://localhost:8000`).

---

## 👥 Integrantes do Grupo

- [Wenderson Da Silva Santos ] - RM: [567847]
- [Douglas Taveira Vilella Roberto] - RM: [567846]
- [Guilherme Pereira De Souza] - RM: [567487]
- [Eduardo Navarro  ] - RM: [568095]
- [Victor De Souza Zoncoler] - RM: [568234]

---
*Projeto desenvolvido para fins acadêmicos.*
