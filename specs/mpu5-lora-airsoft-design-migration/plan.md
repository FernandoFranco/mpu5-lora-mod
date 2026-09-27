# Arquitetura: Migração de 6 Seções do Artefato de Design para React+MUI

## Decisões de Design

### 1. Componentes Base Reutilizáveis

**Decisão:** Extrair 8 componentes base genéricos (`SectionContainer`, `SectionTitle`, `FeatureGrid`, etc.) para não duplicar padrões entre as 6 seções.

**Rationale:**

- Cada seção do artefato segue um padrão similar (título + layout grid + conteúdo)
- Componentes base garantem consistência visual e spacing
- Fácil para manutenção futura (ajustar cor/font em um lugar)
- Reutilizáveis em futuras seções

### 2. Canvas 3D: @react-three/fiber + STLLoader

**Decisão:** Usar `@react-three/fiber` + `three-stdlib` `STLLoader` em vez de `react-stl-viewer` ou `three-stl-viewer`.

**Rationale:**

- `react-stl-viewer` só carrega um STL por vez
- Precisamos renderizar múltiplos STLs do mesmo grupo montados juntos na mesma cena
- `@react-three/fiber` dá controle total sobre luzes, câmera, e múltiplos meshes
- `STLLoader` integrado em `three-stdlib` (já na dependência `three`)
- Rotação automática lenta + controles orbit (mouse + touch) via lógica manual

### 3. Posicionamento de Peças: "As Positioned" do Fusion 360

**Decisão:** **Não aplicar transformações** nos STLs carregados — depender que o usuário exporte "as positioned" (assembly já montado) do Fusion 360.

**Rationale:**

- Evita lógica complexa de posicionamento manual no código
- Usuário modela no Fusion com assembly montado, exports mantém essa posição
- Todos os STLs de um grupo compartilham mesmo sistema de coordenadas
- Carregados sem transformação extra → encaixam automaticamente

**Aviso:** Documentar explicitamente que STLs devem ser exportados "as positioned" (não centralizado na origem).

### 4. Dados em JSON Genérico

**Decisão:** `src/data/stlGroups.js` com array de grupos, cada grupo com array de peças. Usuário adiciona novos grupos/peças editando só esse arquivo.

**Rationale:**

- Separação conteúdo vs. componentes
- Não precisa tocar em React para adicionar novas peças
- Escalável (n grupos × m peças)
- Specs placeholder (PETG, 0,2mm, 20%, Não, 1×) claramente ajustáveis

### 5. Ícones: SVG Inline + useIconSize Hook

**Decisão:** Manter padrão existente — 12 novos ícones com `useIconSize()`, paths extraídos do artefato.

**Rationale:**

- Consistente com 20 ícones existentes (Location, Chat, Shield, etc.)
- SVG inline permite coloring dinâmico via `useTheme()`
- Sem dependência de icon library (control total)

### 6. Grid 12 Colunas (não Flexbox)

**Decisão:** Usar `gridTemplateColumns: {xs: '1fr', md: 'repeat(12, 1fr)'}` para layouts assimétricos (`TwoColumnSection`, `FilesSection`, `AssemblySection`).

**Rationale:**

- Artefato usa grid 12 colunas com spans assimétricos
- Mais control que flexbox para alinhamento fino
- Collapse para 1 coluna em mobile é natural com grid

### 7. Placeholders Wireframe para STLs Ausentes

**Decisão:** Se `.stl` não carrega → renderizar wireframe simples (caixa) no lugar, com legenda "peças aguardando arquivos".

**Rationale:**

- Nenhum `.stl` real existe ainda (nem em `.tmp/STLs`, nem em `public/`)
- Não quebra a página → melhor UX
- Usuário vê estrutura do viewer pronta
- Wireframe substitui STL assim que arquivo existir

### 8. Responsividade: Mobile-First

**Decisão:** Todos os grids colapsam para `{xs: '1fr'}` em mobile (breakpoint `xs`), expandem em `md` (desktop).

**Rationale:**

- Landing page elegante exige ordem correta em mobile
- Navbar drawer mobile com novos links
- Tipografia escalada (44px → 32px título)

## Estrutura de Componentes

```
src/
├── components/
│   ├── AboutSection.jsx          [REESCRITO]
│   ├── HeroSection.jsx            [ATUALIZAR links âncora]
│   ├── HowItWorksSection.jsx      [NOVO]
│   ├── FilesSection.jsx           [NOVO, substitui STLGrid]
│   ├── AssemblySection.jsx        [NOVO, substitui InstructionsSection]
│   ├── SupportSection.jsx         [NOVO, substitui ContributionSection]
│   ├── FAQSection.jsx             [NOVO]
│   ├── Navbar.jsx                 [ATUALIZAR links]
│   ├── Footer.jsx
│   │
│   ├── base/                      [NOVO FOLDER]
│   │   ├── SectionContainer.jsx
│   │   ├── SectionTitle.jsx
│   │   ├── FeatureCard.jsx        [ATUALIZAR visual existente]
│   │   ├── FeatureGrid.jsx
│   │   ├── TwoColumnSection.jsx
│   │   ├── StepList.jsx
│   │   ├── STLGroupViewer.jsx     [Canvas 3D, useSTL hook]
│   │   └── PartsList.jsx
│   │
│   └── [Remover: STLGrid, STLCard, InstructionsSection, StepAccordion, ContributionSection, ContributionCard]
│
├── icons/                         [NOVO: 12 ícones]
│   ├── MeshChat.jsx
│   ├── MapPin.jsx
│   ├── WifiOff.jsx
│   ├── Lock.jsx
│   ├── RadioDevice.jsx
│   ├── Remix.jsx
│   ├── Phone.jsx
│   ├── RotateLeft.jsx
│   ├── RotateRight.jsx
│   ├── ChevronRight.jsx
│   ├── Warning.jsx
│   └── InfoCircle.jsx
│
├── data/                          [NOVO FOLDER]
│   └── stlGroups.js               [13 peças × 2 grupos]
│
└── pages/
    └── Home.jsx                   [ATUALIZAR: remover imports antigos, adicionar 6 seções novas]

public/
├── models/stl/                    [NOVO]
│   ├── lora-case/                 [8 .stl files]
│   └── battery-case/              [5 .stl files]
└── images/
```

## Dependências

Todas já instaladas:

- `react` 19.2.8
- `@mui/material` 9.4.0
- `@emotion/react`, `@emotion/styled` (peers do MUI)
- `@react-three/fiber` 9.8.1
- `three` 0.186.1
- `three-stdlib` 2.36.1

## Riscos & Mitigações

### Risk 1: STLs grandes causam lag

**Mitigation:** `Suspense` + lazy loading, renderizar apenas STL ativo (não todos os grupos de uma vez).

### Risk 2: Touch gestures em mobile (viewer 3D)

**Mitigation:** `OrbitControls` do `@react-three/fiber` já suporta touch nativamente; testar em `xs` viewport.

### Risk 3: Placeholder wireframe confunde usuário

**Mitigation:** Legenda clara acima do viewer: "Peças aguardando arquivos STL". Wireframe desaparece automaticamente quando real carrega.

### Risk 4: STLs posicionados incorretamente se exportados sem "as positioned"

**Mitigation:** Documentar explicitamente no final do projeto (AC-13). Avisar que isso depende de como Fusion 360 exporta.

### Risk 5: Grid 12 colunas quebra em alguns mobile pequenos

**Mitigation:** Testar em iPhone SE (375px), Pixel 4a (412px); ajustar breakpoints se necessário.

## Rationale de Arquitetura

A escolha de componentes base separados (pasta `base/`) permite que:

1. **Seções sejam composições limpas** — `AboutSection` = `<SectionContainer><SectionTitle><TwoColumnSection>...` sem lógica visual própria
2. **Mudanças de design sejam localizadas** — ajustar padding de `SectionContainer` afeta todas as 6 seções
3. **Novos dev rapidamente entendam o padrão** — componentes base deixam explícito o "vocab" do design
4. **Reutilização futura seja natural** — próximas seções reusam componentes base

Grid 12 colunas (em vez de flexbox) porque:

- Artefato foi desenhado com grid em mente
- Spans assimétricos (5+6, 4+7) são elegantes em grid
- Mobile collapse (`1fr`) é automático

Canvas 3D sem transformações porque:

- Simplifica enormemente a lógica
- Delega responsabilidade ao usuário exportar corretamente
- Documenta uma constraint clara (no spec final)
