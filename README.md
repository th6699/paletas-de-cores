# Paletas de Cores

Este projeto contém uma coleção de paletas de cores organizadas em um array JavaScript, com uma interface visual para visualização.

## Estrutura do Projeto

- `array.js` - Array JavaScript com as paletas de cores
- `index.html` - Interface visual para exibir as paletas
- `style.css` - Estilos CSS para a interface
- `README.md` - Documentação do projeto

## Paletas Disponíveis

1. **Terra e Pastel** - Tons terrosos e suaves
2. **Natureza e Calidez** - Cores naturais e aconchegantes
3. **Terrosos e Rústicos** - Paleta rústica e autêntica
4. **Moderno e Elegante** - Cores contemporâneas
5. **Clássico e Sofisticado** - Paleta tradicional e refinada

## Como Usar

### Visualização Web
1. Abra o arquivo `index.html` em um navegador
2. Visualize todas as paletas com suas cores
3. Passe o mouse sobre as cores para ver os detalhes

### Deploy no GitHub Pages
Para disponibilizar o site online:

1. **Crie um repositório no GitHub**
2. **Faça upload dos arquivos** ou use git:
   ```bash
   git init
   git add .
   git commit -m "Primeiro commit"
   git branch -M main
   git remote add origin https://github.com/seu-usuario/nome-do-repo.git
   git push -u origin main
   ```

3. **Ative o GitHub Pages**:
   - Vá em Settings > Pages
   - Source: Deploy from a branch
   - Branch: main (ou master)
   - Folder: / (root)
   - Clique em Save

4. **Aguarde alguns minutos** e o site estará disponível em:
   `https://seu-usuario.github.io/nome-do-repo`

**URL do site será algo como**: `https://arthu.github.io/paletas-de-cores`

### Uso Programático
```javascript
// Importar o array (se usando Node.js)
const { paletasDeCores, obterPaleta, obterCoresDaPaleta } = require('./array.js');

// Exibir todas as paletas no console
exibirPaletas();

// Obter uma paleta específica
const paletaTerra = obterPaleta('Terra');

// Obter cores de uma paleta
const coresTerra = obterCoresDaPaleta('Terra e Pastel');
```

## Estrutura do Array

Cada paleta contém:
- `nome`: Nome da paleta
- `cores`: Array de objetos com:
  - `hex`: Código hexadecimal da cor
  - `nome`: Descrição da cor

## Funções Disponíveis

- `exibirPaletas()` - Exibe todas as paletas no console
- `obterPaleta(nome)` - Retorna uma paleta específica
- `obterCoresDaPaleta(nome)` - Retorna as cores de uma paleta

## Características

- ✅ Array JavaScript válido
- ✅ Interface visual responsiva
- ✅ Animações suaves
- ✅ Design moderno e elegante
- ✅ Compatível com navegadores modernos
- ✅ Código bem documentado

## Tecnologias Utilizadas

- HTML5
- CSS3 (Grid, Flexbox, Animações)
- JavaScript (ES6+)
- Design responsivo 