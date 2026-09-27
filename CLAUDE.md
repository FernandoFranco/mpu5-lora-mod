# CLAUDE.md

Este arquivo fornece orientação para Claude Code (claude.ai/code) ao trabalhar com código neste repositório.

## Visão Geral do Projeto

MPU5 LoRa Mod é uma aplicação web React + Vite com componentes Material-UI e visualização 3D com Three.js. O projeto apresenta uma modificação de dispositivo LoRa com recursos incluindo visualização de arquivos STL em 3D, alternância de tema (claro/escuro) e design responsivo.

## Comandos Comuns

Todos os comandos usam **Yarn** (v4.18.1), nunca npm.

```bash
# Desenvolvimento
yarn dev          # Inicia servidor dev Vite (http://localhost:5173/)

# Build
yarn build        # Build para produção (saída em ./dist/)
yarn preview      # Prévia do build de produção localmente

# Qualidade de Código
yarn lint         # Executa oxlint (linter baseado em AST)
yarn format       # Formata código com Prettier
yarn format:check # Verifica formatação sem fazer alterações
```

## Arquitetura do Projeto

### Estrutura de Diretórios

```
src/
  ├── pages/              # Componentes de página (Home.jsx)
  ├── components/         # Componentes de features (seções, layouts)
  │   └── base/          # Componentes base reutilizáveis (STLGroupViewer, PartsList, FeatureCard, etc.)
  ├── icons/             # Componentes de ícones SVG customizados (todos com viewBox e props consistentes)
  ├── theme/             # Configuração de tema do Material-UI
  ├── hooks/             # Hooks React customizados
  ├── assets/            # Imagens e arquivos estáticos
  ├── App.jsx            # Componente raiz com alternância de tema
  └── main.jsx           # Ponto de entrada
```

### Componentes e Padrões Principais

**Sistema de Tema**: Usa `ThemeProvider` do Material-UI com temas claro/escuro. O tema persiste em `localStorage` com a chave `'theme'`. Cores:

- Primária: `#FF8A33` (laranja, consistente entre temas)
- Modo claro: fundo claro, texto escuro
- Modo escuro: fundo muito escuro (#0E110D), texto claro

**Visualizador 3D**: `STLGroupViewer.jsx` renderiza modelos STL 3D usando Three.js com:

- Cache de geometria para evitar recarregamento
- Controles de órbita interativos com auto-rotação
- Destaque de peças por ID
- Dimensionamento responsivo do canvas

**Ícones**: Todos os ícones em `/src/icons/` seguem um padrão consistente:

- Componentes SVG com atributo `viewBox`
- Props `width`, `height`, `fill` consistentes
- Named exports (ex: `export function StarIcon(props)`)

**Componentes Base**: Blocos de construção de UI reutilizáveis em `/src/components/base/`:

- `STLGroupViewer` — Componente de exibição de modelo 3D
- `PartsList` — Listagem de peças interativa com destaque
- `FeatureCard` — Componente de cartão para features
- `SectionContainer`, `SectionTitle`, `FeatureGrid` — Componentes de layout
- `TwoColumnSection`, `StepList` — Padrões de layout específicos

### Abordagem de Estilo

- **Material-UI (MUI)**: Framework de UI principal com hook `useTheme()` para acesso ao tema
- **CSS**: Estilos globais em `src/index.css`, estilos com escopo de componente via prop `sx` do MUI
- **Formatação**: Prettier com `printWidth: 100`, sem ponto-e-vírgula, aspas simples
- **Linting**: Oxlint para regras específicas de React (hooks, exports de componentes)

### Como as Páginas se Compõem

`Home.jsx` é uma pilha vertical de seções:

1. Navbar (com alternância de tema)
2. HeroSection
3. AboutSection
4. HowItWorksSection
5. FilesSection
6. AssemblySection
7. SupportSection
8. FAQSection
9. Footer

Cada seção é um componente separado, tipicamente importando componentes base de `/src/components/base/`.

## Build e Implantação

- **Vite Config**: Caminho base é `/mpu5/` para implantação no GitHub Pages
- **GitHub Pages**: Deploy automático em push para branches `main` ou `master`
- **Nota**: Fluxo de trabalho do GitHub Actions já foi corrigido para usar Yarn

## Padrões de Qualidade de Código

- **Regras Oxlint**: Regras de hooks React e exports de componentes são aplicadas
- **Prettier**: Largura de linha de 100 caracteres, sem ponto-e-vírgula
- **React**: Componentes funcionais com hooks; sem componentes de classe
- **Ordem de importações**: Sem ordem obrigatória; use agrupamento natural (React, packages, local)

## Notas para Futuras Alterações

1. **Somente Yarn**: Nunca use npm. Projeto é configurado para Yarn com node-modules linker.
2. **Atualizações de ícones**: Ao adicionar/modificar ícones, mantenha props e viewBox consistentes entre todos os ícones.
3. **Acesso ao tema**: Use hook `useTheme()` de `@mui/material` para acessar cores do tema atual.
4. **Uso de Three.js**: O padrão de cache do STLLoader previne recarregamento de geometria; não remova o Map `stlCache`.
5. **Componentes de seção**: Cada seção é independente; tente mantê-las auto-contidas para manutenibilidade.
6. **GitHub Actions**: Fluxo de deploy já utiliza Yarn (corrigido).
