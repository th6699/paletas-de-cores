const paletasDeCores = [
    {
        nome: "Terra e Pastel",
        cores: [
            { hex: "#495340", nome: "verde escuro - cor principal" },
            { hex: "#ecd9c4", nome: "bege claro - cor de fundo" },
            { hex: "#d4b699", nome: "bege médio" },
            { hex: "#4c6b57", nome: "verde musgo" },
            { hex: "#f7eee8", nome: "off-white" }
        ]
    },
    {
        nome: "Natureza e Calidez",
        cores: [
            { hex: "#495340", nome: "verde escuro - cor principal" },
            { hex: "#ecd9c4", nome: "bege claro - cor de fundo" },
            { hex: "#e4b25d", nome: "dourado suave" },
            { hex: "#8c9d66", nome: "verde oliva" },
            { hex: "#fff6f0", nome: "creme" }
        ]
    },
    {
        nome: "Terrosos e Rústicos",
        cores: [
            { hex: "#495340", nome: "verde escuro - cor principal" },
            { hex: "#ecd9c4", nome: "bege claro - cor de fundo" },
            { hex: "#b2a69e", nome: "cinza pálido" },
            { hex: "#5e7a61", nome: "verde musgo" },
            { hex: "#e2b89b", nome: "pêssego suave" }
        ]
    },
    {
        nome: "Moderno e Elegante",
        cores: [
            { hex: "#495340", nome: "verde escuro - cor principal" },
            { hex: "#ecd9c4", nome: "bege claro - cor de fundo" },
            { hex: "#7a8d73", nome: "verde acinzentado" },
            { hex: "#b6c1ae", nome: "verde claro" },
            { hex: "#f0d5c8", nome: "pálido rosado" }
        ]
    },
    {
        nome: "Clássico e Sofisticado",
        cores: [
            { hex: "#495340", nome: "verde escuro - cor principal" },
            { hex: "#ecd9c4", nome: "bege claro - cor de fundo" },
            { hex: "#7d785c", nome: "bege escuro" },
            { hex: "#9dab76", nome: "verde suave" },
            { hex: "#f4e1d7", nome: "off-white rosado" }
        ]
    }
];

// Função para exibir as paletas no console
function exibirPaletas() {
    paletasDeCores.forEach((paleta, index) => {
        console.log(`\n${index + 1}. ${paleta.nome}:`);
        paleta.cores.forEach((cor, corIndex) => {
            console.log(`   ${corIndex + 1}. ${cor.hex} - ${cor.nome}`);
        });
    });
}

// Função para obter uma paleta específica
function obterPaleta(nomePaleta) {
    return paletasDeCores.find(paleta =>
        paleta.nome.toLowerCase().includes(nomePaleta.toLowerCase())
    );
}

// Função para obter todas as cores de uma paleta
function obterCoresDaPaleta(nomePaleta) {
    const paleta = obterPaleta(nomePaleta);
    return paleta ? paleta.cores : [];
}

// Exportar o array para uso em outros arquivos
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        paletasDeCores,
        exibirPaletas,
        obterPaleta,
        obterCoresDaPaleta
    };
}