import { Box, Button, Typography, Stack } from '@mui/material'
import { useTheme } from '@mui/material'
import ChevronRight from '../../icons/ChevronRight'

export function PartsList({ parts, selectedId, onSelect }) {
  const theme = useTheme()
  const selectedPart = parts.find(p => p.id === selectedId)

  return (
    <Box
      sx={{
        height: 500,
        display: 'flex',
        flexDirection: 'column',
        borderLeft: `1px solid ${theme.palette.mode === 'dark' ? '#333' : '#ddd'}`,
      }}
    >
      {/* Lista de partes (scrollável) */}
      <Box
        sx={{
          flex: 1,
          overflowY: 'auto',
          borderBottom: `1px solid ${theme.palette.mode === 'dark' ? '#333' : '#ddd'}`,
        }}
      >
        <Stack spacing={1} sx={{ p: 2 }}>
          {parts.map((part, idx) => (
            <Button
              key={part.id}
              onClick={() => onSelect(part.id)}
              sx={{
                justifyContent: 'flex-start',
                textAlign: 'left',
                padding: 2,
                borderRadius: 1,
                backgroundColor:
                  selectedId === part.id
                    ? theme.palette.mode === 'dark'
                      ? '#222'
                      : '#f0f0f0'
                    : 'transparent',
                color: 'text.primary',
                border: `1px solid ${
                  selectedId === part.id
                    ? theme.palette.primary.main
                    : theme.palette.mode === 'dark'
                      ? '#333'
                      : '#ddd'
                }`,
                '&:hover': {
                  backgroundColor: theme.palette.mode === 'dark' ? '#1a1a1a' : '#f9f9f9',
                },
              }}
            >
              <Box sx={{ flex: 1 }}>
                <Typography sx={{ fontWeight: 600, fontSize: '14px' }}>
                  {idx + 1}. {part.name}
                </Typography>
                <Typography sx={{ fontSize: '12px', color: 'text.secondary' }}>
                  {part.file}
                </Typography>
              </Box>
              <ChevronRight size="sm" />
            </Button>
          ))}
        </Stack>
      </Box>

      {/* Specs panel */}
      {selectedPart && (
        <Box sx={{ p: 2, backgroundColor: theme.palette.mode === 'dark' ? '#111' : '#f9f9f9' }}>
          <Typography sx={{ fontWeight: 600, mb: 1, fontSize: '14px' }}>Especificações</Typography>
          <Stack spacing={0.5} sx={{ fontSize: '12px' }}>
            <Typography>
              Material: <strong>{selectedPart.mat}</strong>
            </Typography>
            <Typography>
              Camada: <strong>{selectedPart.layer}</strong>
            </Typography>
            <Typography>
              Preenchimento: <strong>{selectedPart.infill}</strong>
            </Typography>
            <Typography>
              Suporte: <strong>{selectedPart.support}</strong>
            </Typography>
            <Typography>
              Quantidade: <strong>{selectedPart.qty}</strong>
            </Typography>
          </Stack>
        </Box>
      )}
    </Box>
  )
}
