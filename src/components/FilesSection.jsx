import { Box, Button, ButtonGroup, Grid, Typography } from '@mui/material'
import { useState } from 'react'
import { SectionContainer } from './base/SectionContainer'
import { SectionTitle } from './base/SectionTitle'
// import { STLGroupViewer } from './base/STLGroupViewer'
import { PartsList } from './base/PartsList'
import { stlGroups } from '../data/stlGroups'

export function FilesSection() {
  const [selectedGroupId, setSelectedGroupId] = useState('heltec-v4')
  const [selectedPartId, setSelectedPartId] = useState(null)

  const selectedGroup = stlGroups.find(g => g.id === selectedGroupId)
  const selectedPart = selectedGroup?.parts?.find(p => p.id === selectedPartId)

  // Se nenhuma parte selecionada, selecionar a primeira
  const partToHighlight = selectedPartId || selectedGroup?.parts?.[0]?.id

  return (
    <SectionContainer id="arquivos">
      <SectionTitle
        label="ARQUIVOS"
        title="Modelos 3D para Impressão"
        description="Explore os componentes STL do MPU5"
      />

      {/* Header com botões */}
      <Box sx={{ mb: 4, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Typography sx={{ fontSize: '16px', color: 'text.secondary' }}>
          Selecione um grupo para visualizar
        </Typography>
        <Box sx={{ gap: 2, display: 'flex' }}>
          <Button variant="outlined" size="small">
            Fonte CAD
          </Button>
          <Button variant="outlined" size="small">
            Baixar tudo
          </Button>
        </Box>
      </Box>

      {/* Seletor de grupos */}
      <Box sx={{ mb: 4 }}>
        <ButtonGroup variant="outlined" fullWidth>
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
          <Grid item xs={12} md={7}>
            <Box
              sx={{
                width: '100%',
                height: 500,
                backgroundColor: '#f5f5f5',
                borderRadius: 2,
                border: '1px solid #ddd',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Typography>STL Viewer (dependência não instalada)</Typography>
            </Box>
          </Grid>

          {/* PartsList - 5/12 */}
          <Grid item xs={12} md={5}>
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
