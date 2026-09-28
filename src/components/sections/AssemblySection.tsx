import { FC } from 'react'
import {
  Box,
  Grid,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Chip,
  Stack,
} from '@mui/material'
import { useTheme } from '@mui/material'
import { SectionContainer, SectionTitle, StepList } from '@/components/base'
import type { Step } from '@/types'

export const AssemblySection: FC = () => {
  const theme = useTheme()

  // BOM data
  const bomItems = [
    { part: 'Heltec V4', qty: 1, time: '2h' },
    { part: 'MPU5 Case', qty: 1, time: '4h' },
    { part: 'MPU5 Bottom', qty: 1, time: '3h' },
    { part: 'Guides & Mods', qty: 2, time: '1h' },
  ]

  // Ferramentas
  const tools = ['Tesoura', 'Faca X-Acto', 'Luvas', 'Óculos']

  // Steps
  const steps: Step[] = [
    {
      number: 1,
      title: 'Imprimir Peças',
      description: 'Imprima todas as peças STL conforme especificações (PETG, 0,2mm, 20%)',
      highlight: false,
    },
    {
      number: 2,
      title: 'Desmontar Componentes',
      description: 'Remova suportes e limpe as peças impressas',
      highlight: false,
    },
    {
      number: 3,
      title: 'Cortar Fibra Carbono',
      description: 'Corte a fibra de reforço com dimensões exatas',
      highlight: true,
      content: (
        <Box
          sx={{
            mt: 2,
            p: 2,
            backgroundColor: theme.palette.mode === 'dark' ? '#1a1a1a' : '#f5f5f5',
            borderRadius: 1,
          }}
        >
          <Box sx={{ display: 'flex', gap: 2, mb: 2 }}>
            <Box
              sx={{
                width: 32,
                height: 32,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: '50%',
                backgroundColor: '#ff6b6b',
              }}
            >
              <Typography sx={{ color: 'white', fontWeight: 'bold' }}>!</Typography>
            </Box>
            <Box>
              <Typography sx={{ fontWeight: 600, mb: 1 }}>Segurança Importante</Typography>
              <Typography sx={{ fontSize: '14px' }}>
                Use EPI: Óculos de proteção, luvas nitrílicas e máscara. Ferramentas cortantes podem
                causar ferimentos.
              </Typography>
            </Box>
          </Box>
        </Box>
      ),
    },
    {
      number: 4,
      title: 'Flashear Meshtastic',
      description: 'Programe o firmware Meshtastic no Heltec V4',
      highlight: true,
      content: (
        <Box
          sx={{
            mt: 2,
            p: 2,
            backgroundColor: theme.palette.mode === 'dark' ? '#1a1a1a' : '#f5f5f5',
            borderRadius: 1,
            fontFamily: 'monospace',
            fontSize: '12px',
          }}
        >
          <code>
            esptool.py write_flash -fm dio -ff 80m 0x0000 bootloader.bin
            <br />
            esptool.py write_flash -fm dio -ff 80m 0x1000 meshtastic-firmware.bin
          </code>
        </Box>
      ),
    },
    {
      number: 5,
      title: 'Montar Eletrônica',
      description: 'Solde componentes eletrônicos conforme diagrama de circuito',
      highlight: false,
    },
    {
      number: 6,
      title: 'Fechar Carcaça',
      description: 'Encaixe todas as peças e feche com parafusos',
      highlight: false,
    },
    {
      number: 7,
      title: 'Parear e Testar',
      description: 'Pareie com outros dispositivos e teste a comunicação mesh',
      highlight: false,
    },
  ]

  return (
    <SectionContainer id="montagem">
      <SectionTitle
        label="MONTAGEM"
        title="Guia Passo a Passo"
        description="Instruções completas para montar seu MPU5"
      />

      <Grid container spacing={3}>
        {/* Sidebar BOM - 4/12 */}
        <Grid size={{ xs: 12, md: 4 }}>
          {/* BOM Tabela */}
          <Typography sx={{ fontWeight: 600, mb: 2, fontSize: '16px' }}>
            BOM (Lista de Materiais)
          </Typography>
          <TableContainer>
            <Table size="small">
              <TableHead>
                <TableRow>
                  <TableCell sx={{ fontWeight: 600 }}>Peça</TableCell>
                  <TableCell align="center">Qty</TableCell>
                  <TableCell align="right">Tempo</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {bomItems.map((item, idx) => (
                  <TableRow key={idx}>
                    <TableCell>{item.part}</TableCell>
                    <TableCell align="center">{item.qty}</TableCell>
                    <TableCell align="right">{item.time}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>

          {/* Ferramentas */}
          <Typography sx={{ fontWeight: 600, mt: 3, mb: 2, fontSize: '16px' }}>
            Ferramentas
          </Typography>
          <Stack direction="row" spacing={1} sx={{ flexWrap: 'wrap', gap: 1 }}>
            {tools.map((tool, idx) => (
              <Chip key={idx} label={tool} variant="outlined" size="small" />
            ))}
          </Stack>
        </Grid>

        {/* StepList - 7/12 */}
        <Grid size={{ xs: 12, md: 7 }}>
          <StepList steps={steps} />
        </Grid>
      </Grid>
    </SectionContainer>
  )
}
