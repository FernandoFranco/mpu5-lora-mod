# Feature: Migração de 6 Seções do Artefato de Design para React+MUI

## Visão Geral

Migrar fielmente 6 seções do artefato de design (`claude.ai/artifact/F3n6sGfi6sWCEDW7YmuyQs`) para componentes React+MUI produção-ready, extraindo componentes base reutilizáveis, criando um visualizador 3D para 13 peças STL organizadas em 2 grupos (LoRa Case, Battery Case), e atualizando o layout responsivo da landing page.

## Acceptance Criteria

### AC-1: Estrutura Base & Dados

- AC-1.1: Criar `src/data/stlGroups.js` com array genérico contendo 2 grupos (LoRa Case: 8 peças, Battery Case: 5 peças)
- AC-1.2: Criar pasta `public/models/stl/lora-case/` e `public/models/stl/battery-case/` para recepcionar STLs
- AC-1.3: Copiar STLs exportados de `.tmp/STLs/` para as pastas corretas respeitando estrutura
- AC-1.4: Specs (material/camada/preenchimento/suporte) devem usar placeholders ajustáveis em `stlGroups.js`

### AC-2: Ícones Novos (~12)

- AC-2.1: Criar 12 ícones novos em `src/icons/` seguindo padrão `useIconSize` (MeshChat, MapPin, WifiOff, Lock, RadioDevice, Remix, Phone, RotateLeft, RotateRight, ChevronRight, Warning, InfoCircle)
- AC-2.2: Cada ícone deve extrair paths SVG diretamente do artefato de design
- AC-2.3: Compatível com modo dark/light (cores via `useTheme()`)

### AC-3: Componentes Base (8 novos)

- AC-3.1: `SectionContainer.jsx` — layout com bordas/fundos alternados, ID âncora, padding responsivo
- AC-3.2: `SectionTitle.jsx` — label (IBM Plex Mono 13px), título (Chakra Petch 700 ~44px desktop/32px mobile), descrição (body 17px)
- AC-3.3: `FeatureGrid.jsx` — grid 3 ou 6 colunas (colapsando pra 1 em xs), renderiza `FeatureCard`
- AC-3.4: `TwoColumnSection.jsx` — grid 12 colunas assimétrico com spans dinâmicos (leftSpan=5, rightSpan=6 default)
- AC-3.5: `StepList.jsx` — timeline numerada com círculo + linha vertical, step com `highlight` preenchido
- AC-3.6: `STLGroupViewer.jsx` — canvas @react-three/fiber com STLLoader, múltiplos meshes por peça, sem transformações (depende export "as positioned")
- AC-3.7: `PartsList.jsx` — lista de peças com botão por peça, seleção destaca no viewer, painel specs
- AC-3.8: `FeatureCard.jsx` (atualizar) — padding 28px, border 1px, borderRadius 16px, ícone em box 44×44

### AC-4: AboutSection (Reescrita)

- AC-4.1: Usar `TwoColumnSection` (5/12 título+parágrafo | 6/12 grid)
- AC-4.2: `FeatureGrid` com 6 cards do artefato (Chat mesh, Posição, Zero infra, Canais criptografados, Visual preservado, Aberto/remixável)
- AC-4.3: Requer 6 ícones novos (MeshChat, MapPin, WifiOff, Lock, RadioDevice, Remix)
- AC-4.4: ID âncora: `#sobre`

### AC-5: HowItWorksSection (Nova)

- AC-5.1: `SectionTitle` + diagrama fluxo (celular → Bluetooth → MPU5 Mesh → LoRa mesh → time)
- AC-5.2: 4 caixas flex com labels "BLUETOOTH"/"LoRa MESH" (linhas tracejadas/onduladas, sem lib diagrama)
- AC-5.3: Grid 3 colunas com textos A/B/C do fluxo
- AC-5.4: ID âncora: `#como-funciona`

### AC-6: FilesSection (Nova, Substitui STLGrid)

- AC-6.1: Header com título + botões "Fonte CAD" / "Baixar tudo"
- AC-6.2: Seletor dos 2 grupos (abas ou botões "LoRa Case" / "Battery Case")
- AC-6.3: Grid 12 colunas: `STLGroupViewer` (7/12) + `PartsList` (5/12, scroll interno)
- AC-6.4: Placeholders wireframe quando STL não existe (com legenda "peças aguardando arquivos")
- AC-6.5: ID âncora: `#arquivos`

### AC-7: AssemblySection (Nova, Substitui InstructionsSection)

- AC-7.1: Grid 12 colunas: sidebar sticky 4/12 (BOM + chips ferramentas + botão PDF) + `StepList` 7/12
- AC-7.2: 7 etapas do artefato (imprimir, desmontar, cortar [destaque+diagrama SVG+callout], flashear [código+callout], montar eletrônica, fechar, parear/testar)
- AC-7.3: Etapa 3 (corte) com diagrama SVG + aviso segurança destacado
- AC-7.4: Etapa 4 (flashear) com bloco de código Meshtastic
- AC-7.5: ID âncora: `#montagem`

### AC-8: SupportSection (Nova, Substitui ContributionSection)

- AC-8.1: Grid 3 colunas: card Pix (QR placeholder + botão copiar), card GitHub Sponsors (tiers), card "Contribua sem gastar"
- AC-8.2: Botão copiar Pix com feedback visual (estado "Copiado ✓" via `useState`, usa `navigator.clipboard`)
- AC-8.3: QR placeholder (será substituído por chave Pix real do usuário)
- AC-8.4: ID âncora: `#apoie`

### AC-9: FAQSection (Nova)

- AC-9.1: `TwoColumnSection` (4/12 título | 7/12 accordion)
- AC-9.2: Usar `@mui/material/Accordion` (remover `disableGutters`, customizar border/ícone via `sx`)
- AC-9.3: 4 perguntas do artefato com traço fino `border-bottom`
- AC-9.4: Expandir/colapsar funcionando
- AC-9.5: ID âncora: `#faq`

### AC-10: Integração & Limpeza

- AC-10.1: Atualizar `Home.jsx` — remover imports antigos, adicionar 6 seções novas na ordem do artefato
- AC-10.2: Atualizar `Navbar.jsx` — links âncora para IDs portugueses (`#sobre`, `#como-funciona`, `#arquivos`, `#montagem`, `#apoie`, `#faq`)
- AC-10.3: Atualizar `HeroSection.jsx` — novos CTA links
- AC-10.4: Remover `STLGrid.jsx`, `STLCard.jsx`, `InstructionsSection.jsx`, `StepAccordion.jsx`, `ContributionSection.jsx`, `ContributionCard.jsx`
- AC-10.5: Verificar com `grep` que removidos não têm outros consumidores

### AC-11: Responsividade & Tema

- AC-11.1: Grid 12 colunas colapsa para 1 coluna em `xs` (mobile)
- AC-11.2: Todos os componentes respondem a `dark` e `light` (toggle Navbar)
- AC-11.3: Drawer mobile Navbar com novos links funcionando
- AC-11.4: Tipografia escalada (desktop 44px / mobile 32px para títulos de seção)

### AC-12: Validação Final

- AC-12.1: `yarn dev` sem erros, navegação por todas seções suave
- AC-12.2: FilesSection: trocar grupos, peças, girar viewer, pausar/retomar rotação automática
- AC-12.3: SupportSection: botão copiar Pix
- AC-12.4: FAQSection: expandir/colapsar funcionando
- AC-12.5: `yarn lint` e `yarn format:check` passando
- AC-12.6: Sem erros no console (dark/light)

### AC-13: Documentação & Avisos

- AC-13.1: Avisar ao usuário que STLs devem ser exportados "as positioned" do Fusion 360
- AC-13.2: Avisar localização correta dos arquivos: `public/models/stl/lora-case/` e `public/models/stl/battery-case/`
- AC-13.3: Avisar que specs são placeholders em `src/data/stlGroups.js` para ajustar

## Fora de Escopo

- Integração com Meshtastic real (código é placeholder)
- QR Code dinâmico com chave Pix real (placeholder visual)
- PDF de montagem (botão pronto, sem geração real)
- Internacionalização (i18n)
