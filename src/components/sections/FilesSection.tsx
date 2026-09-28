import { FC, useState } from 'react'
import { Box, Button, ButtonGroup, Grid, Typography } from '@mui/material'
import { PartsList, SectionContainer, SectionTitle } from '@/components/base'
import { stlGroups } from '@/data'
// import { STLGroupViewer } from '@/components/base'

export const FilesSection: FC = () => {
  const [selectedGroupId, setSelectedGroupId] = useState('heltec-v4')
  const [selectedPartId, setSelectedPartId] = useState<string | null>(null)

  const selectedGroup = stlGroups.find(g => g.id === selectedGroupId)

  // Se nenhuma parte selecionada, selecionar a primeira
  const partToHighlight = selectedPartId || selectedGroup?.parts?.[0]?.id

  return (
    <SectionContainer id="arquivos">
      <SectionTitle
        label="04 — ARQUIVOS"
        title="Todas as peças, prontas para fatiar."
        description="Escolha um grupo de peças e baixe o arquivo, peça por peça ou o pacote completo. Preenchimento, suporte e paredes de cada peça aparecem ao selecionar — são as únicas recomendações de impressão deste projeto; impressora, filamento e demais configurações ficam por sua conta."
        maxWidth="640px"
      />

      {/* Header com botões */}
      <Box sx={{ mb: 4, display: 'flex', justifyContent: 'flex-end', gap: 1.5 }}>
        <Button
          variant="contained"
          sx={{ borderRadius: '10px', fontWeight: 600, backgroundColor: 'primary.main' }}
        >
          Baixar tudo (.zip)
        </Button>
      </Box>

      {/* Seletor de grupos */}
      <Box sx={{ mb: 4 }}>
        <ButtonGroup
          variant="outlined"
          fullWidth
          sx={{ '& .MuiButtonGroup-grouped': { borderRadius: '10px' } }}
        >
          {stlGroups.map(group => (
            <Button
              key={group.id}
              onClick={() => {
                setSelectedGroupId(group.id)
                setSelectedPartId(null)
              }}
              variant={selectedGroupId === group.id ? 'contained' : 'outlined'}
              sx={{ flex: 1 }}
            >
              {group.name}
            </Button>
          ))}
        </ButtonGroup>
      </Box>

      {/* Grid 12 colunas: Viewer + PartsList */}
      {selectedGroup && (
        <Grid container spacing={3}>
          {/* STLGroupViewer - 7/12 */}
          <Grid size={{ xs: 12, md: 7 }}>
            <Box
              sx={{
                width: '100%',
                height: 500,
                backgroundColor: 'background.paper',
                borderRadius: '20px',
                border: '1px solid',
                borderColor: 'divider',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Typography sx={{ color: 'text.secondary' }}>
                STL Viewer (dependência não instalada)
              </Typography>
            </Box>
          </Grid>

          {/* PartsList - 5/12 */}
          <Grid size={{ xs: 12, md: 5 }}>
            <PartsList
              parts={selectedGroup.parts}
              selectedId={partToHighlight}
              onSelect={setSelectedPartId}
            />
          </Grid>
        </Grid>
      )}
    </SectionContainer>
  )
}
