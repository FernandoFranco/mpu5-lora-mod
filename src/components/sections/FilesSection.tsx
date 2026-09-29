import { FC, useState } from 'react'
import { Grid, Stack } from '@mui/material'
import {
  GroupSelect,
  PartPreviewPanel,
  PartsList,
  SectionContainer,
  SectionTitle,
} from '@/components/base'
import { stlGroups } from '@/data'

export const FilesSection: FC = () => {
  const [selectedGroupId, setSelectedGroupId] = useState(stlGroups[0].id)
  const [selectedPartId, setSelectedPartId] = useState<string | null>(null)

  const selectedGroup = stlGroups.find(g => g.id === selectedGroupId) ?? stlGroups[0]
  const selectedIndex = Math.max(
    selectedGroup.parts.findIndex(p => p.id === selectedPartId),
    0
  )
  const selectedPart = selectedGroup.parts[selectedIndex]

  return (
    <SectionContainer id="arquivos">
      <SectionTitle
        label="04 — ARQUIVOS"
        title="Todas as peças, prontas para fatiar."
        description="Escolha o grupo, veja a peça em 3D e baixe o STL. Cada peça traz as recomendações de impressão do projeto: preenchimento, paredes e suporte. O restante fica por sua conta."
        maxWidth="640px"
      />

      <Grid container spacing={3}>
        <Grid size={{ xs: 12, md: 7 }}>
          <PartPreviewPanel
            part={selectedPart}
            index={selectedIndex}
            total={selectedGroup.parts.length}
          />
        </Grid>

        <Grid size={{ xs: 12, md: 5 }}>
          <Stack spacing={1.5}>
            <GroupSelect
              groups={stlGroups}
              selectedId={selectedGroup.id}
              onSelect={id => {
                setSelectedGroupId(id)
                setSelectedPartId(null)
              }}
            />
            <PartsList
              parts={selectedGroup.parts}
              selectedId={selectedPart.id}
              onSelect={setSelectedPartId}
            />
          </Stack>
        </Grid>
      </Grid>
    </SectionContainer>
  )
}
