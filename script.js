// ==========================================
// 1. VARIÁVEIS GLOBAIS E SELEÇÃO DE ELEMENTOS
// ==========================================
let produtosLoja = []; 
let carrinho = JSON.parse(localStorage.getItem('carrinhoEcoTrend')) || [];

const produtosContainer = document.getElementById('produtos-container');
const sidebarCarrinho = document.getElementById('sidebar-carrinho');
const btnAbrirCarrinho = document.getElementById('btn-abrir-carrinho');
const btnFecharCarrinho = document.getElementById('btn-fechar-carrinho');
const itensCarrinhoContainer = document.getElementById('itens-carrinho');
const contadorCarrinho = document.getElementById('contador-carrinho');
const valorTotal = document.getElementById('valor-total');
const btnFinalizarCompra = document.getElementById('btn-finalizar-compra');

// ==========================================
// 2. EVENTOS DA SIDEBAR (ABRIR / FECHAR)
// ==========================================
btnAbrirCarrinho.addEventListener('click', () => {
    sidebarCarrinho.classList.add('aberta');
});

btnFecharCarrinho.addEventListener('click', () => {
    sidebarCarrinho.classList.remove('aberta');
});

// ==========================================
// 3. RENDERIZAÇÃO E FILTROS
// ==========================================
// Desenha os cards na tela baseado na lista recebida
function renderizarProdutos(listaDeProdutos) {
    produtosContainer.innerHTML = ''; // Limpa a tela
    
    listaDeProdutos.forEach(produto => {
        const card = document.createElement('div');
        card.classList.add('produto-card');

        card.innerHTML = `
            <img src="${produto.imagem}" alt="${produto.nome}">
            <h3>${produto.nome}</h3>
            <span class="categoria">${produto.categoria}</span>
            <p class="descricao">${produto.descricao}</p>
            <p class="preco">R$ ${produto.preco.toFixed(2).replace('.', ',')}</p>
            <button onclick="adicionarAoCarrinho(${produto.id})">
                Adicionar ao Carrinho <i class="fas fa-shopping-cart"></i>
            </button>
        `;
        produtosContainer.appendChild(card);
    });
}

// Filtra a lista sem recarregar a página
function filtrarProdutos(categoriaSelecionada) {
    if (categoriaSelecionada === 'Todas') {
        renderizarProdutos(produtosLoja);
    } else {
        const produtosFiltrados = produtosLoja.filter(produto => produto.categoria === categoriaSelecionada);
        renderizarProdutos(produtosFiltrados);
    }
}

// Busca o JSON e chama a renderização inicial
async function carregarProdutos() {
    try {
        const resposta = await fetch('produtos.json');
        produtosLoja = await resposta.json();
        renderizarProdutos(produtosLoja); // Renderiza todos inicialmente
    } catch (erro) {
        console.error('Erro ao carregar o arquivo de produtos:', erro);
        produtosContainer.innerHTML = '<p>Erro ao carregar a loja. Tente novamente mais tarde.</p>';
    }
}

// ==========================================
// 4. LÓGICA DO CARRINHO E LOCALSTORAGE
// ==========================================
function adicionarAoCarrinho(idProduto) {
    const produto = produtosLoja.find(p => p.id === idProduto);
    if (produto) {
        carrinho.push(produto);
        salvarNoLocalStorage();
        atualizarInterfaceCarrinho();
        sidebarCarrinho.classList.add('aberta');
    }
}

function removerDoCarrinho(index) {
    carrinho.splice(index, 1);
    salvarNoLocalStorage();
    atualizarInterfaceCarrinho();
}

function salvarNoLocalStorage() {
    localStorage.setItem('carrinhoEcoTrend', JSON.stringify(carrinho));
}

function atualizarInterfaceCarrinho() {
    itensCarrinhoContainer.innerHTML = '';
    let total = 0;

    carrinho.forEach((item, index) => {
        total += item.preco;

        const divItem = document.createElement('div');
        divItem.style.display = 'flex';
        divItem.style.justifyContent = 'space-between';
        divItem.style.alignItems = 'center';
        divItem.style.padding = '10px 0';
        divItem.style.borderBottom = '1px solid #eee';

        divItem.innerHTML = `
            <div>
                <p style="font-weight: bold; font-size: 14px;">${item.nome}</p>
                <p style="color: #2e7d32; font-size: 14px;">R$ ${item.preco.toFixed(2).replace('.', ',')}</p>
            </div>
            <button onclick="removerDoCarrinho(${index})" style="background: none; border: none; color: #d32f2f; cursor: pointer; font-size: 16px;">
                <i class="fas fa-trash"></i>
            </button>
        `;
        itensCarrinhoContainer.appendChild(divItem);
    });

    contadorCarrinho.innerText = carrinho.length;
    valorTotal.innerText = `R$ ${total.toFixed(2).replace('.', ',')}`;
}

// ==========================================
// 5. FINALIZAR COMPRA COM PROMISES
// ==========================================
function processarPagamento() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const sucesso = Math.random() > 0.1; // 90% chance de sucesso
            if (sucesso) {
                resolve("Compra finalizada com sucesso! A natureza agradece sua escolha na EcoTrend.");
            } else {
                reject("Ops! Houve um problema ao processar seu pagamento. Tente novamente.");
            }
        }, 2000); // 2 segundos de loading
    });
}

btnFinalizarCompra.addEventListener('click', async () => {
    if (carrinho.length === 0) {
        alert("Seu carrinho está vazio. Adicione alguns produtos ecológicos primeiro!");
        return;
    }

    btnFinalizarCompra.innerText = "Processando...";
    btnFinalizarCompra.disabled = true;

    try {
        const mensagemSucesso = await processarPagamento();
        alert(mensagemSucesso);
        
        carrinho = [];
        salvarNoLocalStorage();
        atualizarInterfaceCarrinho();
        sidebarCarrinho.classList.remove('aberta');
        
    } catch (erro) {
        alert(erro);
    } finally {
        btnFinalizarCompra.innerText = "Finalizar Compra";
        btnFinalizarCompra.disabled = false;
    }
});

// ==========================================
// 6. INICIALIZAÇÃO DA PÁGINA
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
    carregarProdutos();
    atualizarInterfaceCarrinho();
});