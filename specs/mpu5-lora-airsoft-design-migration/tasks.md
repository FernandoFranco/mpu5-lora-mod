# Tasks: Migração de 6 Seções do Artefato de Design para React+MUI

## Task 1: Estrutura de Dados & Pastas

**Satisfies:** AC-1.1, AC-1.2, AC-1.3, AC-1.4

- [ ] Criar `src/data/stlGroups.js` com array de 2 grupos (LoRa Case: 8 peças, Battery Case: 5 peças)
  ```js
  export const stlGroups = [
    {
      id: 'lora-case',
      name: 'LoRa Case',
      description: '...',
      parts: [
        {
          id: 'lora-case',
          name: 'LoRa Case',
          file: '/models/stl/lora-case/lora-case.stl',
          mat: 'PETG',
          layer: '0,2 mm',
          infill: '20%',
          support: 'Não',
          qty: 1,
        },
        // ... 7 mais
      ],
    },
    {
      id: 'battery-case',
      name: 'Battery Case',
      description: '...',
      parts: [
        // ... 5 peças
      ],
    },
  ]
  ```
- [ ] Criar pasta `public/models/stl/lora-case/` (vazia, pronta para 8 .stl files)
- [ ] Criar pasta `public/models/stl/battery-case/` (vazia, pronta para 5 .stl files)
- [ ] Copiar STLs exportados de `.tmp/STLs/` para as pastas corretas (nomes conforme tabela em plan.md)

---

## Task 2: Ícones Novos (12)

**Satisfies:** AC-2.1, AC-2.2, AC-2.3

Criar 12 ícones em `src/icons/` (cada arquivo ~30-50 linhas):

- [ ] `MeshChat.jsx` — chat bubble, para AboutSection
- [ ] `MapPin.jsx` — location pin, para AboutSection
- [ ] `WifiOff.jsx` — wifi com risca, para AboutSection
- [ ] `Lock.jsx` — cadeado, para AboutSection
- [ ] `RadioDevice.jsx` — radioactive symbol, para AboutSection
- [ ] `Remix.jsx` — seta circulante (remix/fork), para AboutSection
- [ ] `Phone.jsx` — celular, para HowItWorksSection
- [ ] `RotateLeft.jsx` — seta girar esquerda, para FilesSection viewer
- [ ] `RotateRight.jsx` — seta girar direita, para FilesSection viewer
- [ ] `ChevronRight.jsx` — seta direita, para PartsList
- [ ] `Warning.jsx` — triângulo com !, para AssemblySection callout
- [ ] `InfoCircle.jsx` — i em círculo, para FAQ ou callouts

**Pattern (todos seguem):**

```jsx
import { useIconSize } from './useIconSize' // hook já existe
import { useTheme } from '@mui/material'

export function NameIcon() {
  const size = useIconSize()
  const { palette } = useTheme()

  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={palette.text.primary}>
      {/* paths diretos do artefato */}
    </svg>
  )
}
```

---

## Task 3: Componentes Base (Parte 1)

**Satisfies:** AC-3.1, AC-3.2, AC-3.3, AC-3.4, AC-3.5

Criar pasta `src/components/base/` com 5 componentes:

- [ ] **`SectionContainer.jsx`**
  - Props: `{children, id, alt?, borderTop?, borderBottom?, py?}`
  - `alt` aplica fundo alternado (#121510 dark)
  - Borders cor divisor (#1F241C dark)
  - `Container maxWidth="lg"` com `px: {xs: 3, md: 5}`

- [ ] **`SectionTitle.jsx`**
  - Props: `{label, title, description?, maxWidth?}`
  - Label: IBM Plex Mono 13px, letterSpacing 0.12em, primary.main
  - Title: Chakra Petch 700, 44px desktop / 32px mobile
  - Description: body 17px/1.7, text.secondary

- [ ] **`FeatureGrid.jsx`**
  - Props: `{features: [{icon, title, description}], columns}`
  - CSS grid `repeat(columns, 1fr)` colapsando pra 1 col em `xs`
  - Renderiza `FeatureCard` por feature

- [ ] **`TwoColumnSection.jsx`**
  - Props: `{left, right, leftSpan=5, rightSpan=6, gap=3, reverseOnMobile?}`
  - Grid 12 colunas: `gridTemplateColumns: {xs: '1fr', md: 'repeat(12, 1fr)'}`
  - Left `gridColumn: {xs: 'span 12', md: 'span N'}` (N = leftSpan)
  - Right similar com rightSpan

- [ ] **`StepList.jsx`**
  - Props: `{steps: [{number, title, description, highlight?, content?}]}`
  - Círculo numerado + linha vertical (`border-left`)
  - Highlight: círculo preenchido primary.main
  - Content: ReactNode opcional (para diagramas/código etapa 3 e 4)

---

## Task 4: Componentes Base (Parte 2)

**Satisfies:** AC-3.6, AC-3.7, AC-3.8

Criar em `src/components/base/`:

- [ ] **`STLGroupViewer.jsx`** — Canvas 3D
  - Props: `{parts: [{id, name, file}], highlightPartId?}`
  - Usa `@react-three/fiber` `<Canvas>` com luzes + câmera
  - Hook `useSTL(url)` com cache simples (`Map`)
  - STLLoader carrega cada `.stl`, **sem transformação extra** (depende export "as positioned")
  - `useFrame` rotação automática lenta + pause manual
  - Quando `highlightPartId` → demais peças com opacidade reduzida
  - Se `.stl` não carrega → wireframe caixa + legenda "peças aguardando arquivos"

- [ ] **`PartsList.jsx`**
  - Props: `{parts, selectedId, onSelect}`
  - Botão por peça: número, nome, arquivo, chevron
  - Seleção destaca peça no `STLGroupViewer`
  - Painel specs abaixo: material/camada/preenchimento/suporte/qty

- [ ] **`FeatureCard.jsx`** (atualizar existente)
  - Padding 28px, fundo background.paper, border 1px solid divisor
  - BorderRadius 16px
  - Ícone em box 44×44 com borderRadius 10px, fundo laranja-escuro translúcido (#2A1B0E dark)
  - Título Chakra Petch 600 21px, descrição 15px text.secondary

---

## Task 5: AboutSection (Reescrita)

**Satisfies:** AC-4.1, AC-4.2, AC-4.3, AC-4.4

- [ ] Reescrever `src/components/AboutSection.jsx`
  - `<SectionContainer id="sobre">`
    - `<SectionTitle label="SOBRE" title="..." description="..."/>`
    - `<TwoColumnSection` left=parágrafo, right=`<FeatureGrid features={[6 cards]} columns={3}/>`
  - 6 cards: Chat mesh (MeshChat icon), Posição (MapPin), Zero infra (WifiOff), Canais criptografados (Lock), Visual preservado (RadioDevice), Aberto/remixável (Remix)
  - Props `{icon, title, description}` para cada card

---

## Task 6: HowItWorksSection (Nova)

**Satisfies:** AC-5.1, AC-5.2, AC-5.3, AC-5.4

- [ ] Criar `src/components/HowItWorksSection.jsx`
  - `<SectionContainer id="como-funciona">`
    - `<SectionTitle ... />`
    - Diagrama fluxo: 4 caixas (celular, Bluetooth, MPU5 Mesh, LoRa mesh, time) com linhas tracejadas/onduladas entre
    - Grid 3 colunas com textos A/B/C do fluxo
    - Sem lib diagrama (CSS puro + SVG simples)

---

## Task 7: FilesSection (Nova)

**Satisfies:** AC-6.1, AC-6.2, AC-6.3, AC-6.4, AC-6.5

- [ ] Criar `src/components/FilesSection.jsx`
  - Header: title, botões "Fonte CAD" (link), "Baixar tudo" (link ou handler)
  - Seletor 2 grupos: abas ou botões "LoRa Case" / "Battery Case" (usar `stlGroups` de `src/data/`)
  - Grid 12 colunas:
    - `<STLGroupViewer parts={groupAtual.parts}/>` → 7/12
    - `<PartsList parts={groupAtual.parts} selectedId onSelect/>` → 5/12, scroll interno
  - ID âncora: `#arquivos`
  - Placeholders wireframe quando STL não existe

---

## Task 8: AssemblySection (Nova)

**Satisfies:** AC-7.1, AC-7.2, AC-7.3, AC-7.4, AC-7.5

- [ ] Criar `src/components/AssemblySection.jsx`
  - Grid 12 colunas:
    - Sidebar sticky 4/12: BOM (tabela), chips ferramentas, botão PDF
    - `<StepList/>` 7/12 com 7 etapas:
      1. Imprimir
      2. Desmontar
      3. Cortar [highlight=true, content=diagrama SVG + callout aviso segurança]
      4. Flashear Meshtastic [highlight=true, content=bloco código + callout]
      5. Montar eletrônica
      6. Fechar carcaça
      7. Parear e testar [ícone check]
  - Etapa 3: `<Warning/>` icon callout "Use EPI, ferramentas cortantes"
  - Etapa 4: bloco código com `<code>` tag
  - ID âncora: `#montagem`

---

## Task 9: SupportSection (Nova)

**Satisfies:** AC-8.1, AC-8.2, AC-8.3, AC-8.4

- [ ] Criar `src/components/SupportSection.jsx`
  - Grid 3 colunas:
    - **Card Pix:** QR placeholder, botão "Copiar chave" com `navigator.clipboard.writeText()`, estado "Copiado ✓" via `useState`
    - **Card GitHub Sponsors:** tiers list
    - **Card Contribua sem gastar:** lista com setas `→`
  - Borda destacada no card Pix
  - ID âncora: `#apoie`

---

## Task 10: FAQSection (Nova)

**Satisfies:** AC-9.1, AC-9.2, AC-9.3, AC-9.4, AC-9.5

- [ ] Criar `src/components/FAQSection.jsx`
  - `<TwoColumnSection` left=title 4/12, right=accordion 7/12
  - Use `@mui/material/Accordion` (já dependência MUI)
    - Remover `disableGutters`
    - Customizar border/ícone via `sx` → traço fino `border-bottom`
  - 4 perguntas do artefato (content vem do plano do design)
  - Expand/collapse funcionando
  - ID âncora: `#faq`

---

## Task 11: Integração & Atualização

**Satisfies:** AC-10.1, AC-10.2, AC-10.3

- [ ] Atualizar `src/pages/Home.jsx`
  - Remover imports: `STLGrid`, `InstructionsSection`, `ContributionSection`
  - Manter: `AboutSection` (novo), `HeroSection`, `Navbar`, `Footer`
  - Adicionar imports + composição em ordem:
    1. `HeroSection`
    2. `AboutSection`
    3. `HowItWorksSection`
    4. `FilesSection`
    5. `AssemblySection`
    6. `SupportSection`
    7. `FAQSection`
    8. `Footer`

- [ ] Atualizar `src/components/Navbar.jsx`
  - Links âncora com novos IDs: `#sobre`, `#como-funciona`, `#arquivos`, `#montagem`, `#apoie`, `#faq`
  - Offset para navbar fixa (scroll)

- [ ] Atualizar `src/components/HeroSection.jsx`
  - Botões CTA: "Ver STLs" → `#arquivos`, "Como Contribuir" → `#apoie`

---

## Task 12: Limpeza & Remoção

**Satisfies:** AC-10.4, AC-10.5

- [ ] Verificar com `grep -r "STLGrid\|STLCard\|InstructionsSection\|StepAccordion\|ContributionSection\|ContributionCard" src/` que nenhum arquivo importa os removidos

- [ ] Remover 6 componentes:
  - `src/components/STLGrid.jsx`
  - `src/components/STLCard.jsx`
  - `src/components/InstructionsSection.jsx`
  - `src/components/StepAccordion.jsx`
  - `src/components/ContributionSection.jsx`
  - `src/components/ContributionCard.jsx`

---

## Task 13: Responsividade & Tema

**Satisfies:** AC-11.1, AC-11.2, AC-11.3, AC-11.4

- [ ] Testar `yarn dev` em breakpoints:
  - `xs` (375px mobile): todos grids 1 coluna, drawer Navbar, tipografia escalada
  - `md` (≥960px): grids 12 colunas, spans assimétricos, navbar desktop
  - Trocar tema dark/light (toggle Navbar) → cores ajustam em todos componentes

- [ ] Verificar tipografia:
  - Títulos seção: 44px desktop, 32px mobile
  - Labels: 13px consistente
  - Body: 17px/1.7

---

## Task 14: Validação Final

**Satisfies:** AC-12.1, AC-12.2, AC-12.3, AC-12.4, AC-12.5, AC-12.6

- [ ] `yarn dev` → sem erros, navegação suave por todas seções
- [ ] **FilesSection:**
  - [ ] Trocar grupos (LoRa Case ↔ Battery Case)
  - [ ] Clicar peça na lista → destaca no viewer, atualiza specs
  - [ ] Girar viewer (mouse/touch)
  - [ ] Pausar/retomar rotação automática
  - [ ] Placeholders wireframe aparecem (STLs ainda não existem)
- [ ] **SupportSection:**
  - [ ] Botão "Copiar" Pix funciona
  - [ ] Feedback visual "Copiado ✓"
- [ ] **FAQSection:**
  - [ ] Clicar pergunta → expande
  - [ ] Clicar novamente → colapsa
- [ ] `yarn lint` → sem erros oxlint
- [ ] `yarn format:check` → sem erros prettier
- [ ] Abrir DevTools → **sem erros console** (dark e light)

---

## Task 15: Documentação & Avisos

**Satisfies:** AC-13.1, AC-13.2, AC-13.3

- [ ] Escrever no README ou em comentário final do projeto:
  - "⚠️ STLs exportados no Fusion 360 devem usar opção 'as positioned' (assembly já montado), não centralizado na origem. Caso contrário, peças não encaixarão corretamente."
  - "📁 Colocar os 13 .stl files em: `public/models/stl/lora-case/` e `public/models/stl/battery-case/` com nomes listados em `src/data/stlGroups.js`"
  - "⚙️ Specs (PETG, 0,2mm, 20%, etc.) são placeholders. Ajustar em `src/data/stlGroups.js` conforme suas peças reais."

---

## Fluxo de Execução Recomendado

1. **Task 1** → dados e pastas prontas
2. **Task 2** → ícones (independente)
3. **Tasks 3-4** → componentes base (independente)
4. **Tasks 5-10** → seções (dependem de componentes base)
5. **Task 11** → integração em `Home.jsx`
6. **Task 12** → limpeza (depois que integração pronta)
7. **Task 13-14** → responsividade e validação
8. **Task 15** → documentação final
