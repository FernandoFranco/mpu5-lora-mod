import { FC } from 'react'
import {
  Box,
  Chip,
  Grid,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material'
import { useTheme } from '@mui/material'
import { ExternalLink, SectionContainer, SectionTitle, StepList } from '@/components/base'
import { externalLinks } from '@/data'
import { Warning } from '@/icons'
import type { Step } from '@/types'

export const AssemblySection: FC = () => {
  const theme = useTheme()
  const isDark = theme.palette.mode === 'dark'
  const codeBg = isDark ? '#0A0C09' : '#f5f5f5'

  const bomItems = [
    { id: 'mpu5', part: 'Réplica MPU5', qty: '1×' },
    {
      id: 'placa',
      part: (
        <>
          Placa LoRa compatível com{' '}
          <ExternalLink href={externalLinks.meshtastic}>Meshtastic</ExternalLink>
        </>
      ),
      qty: '1×',
    },
    { id: 'antena', part: 'Antena 915 MHz SMA', qty: '1×' },
    { id: 'pigtail', part: 'Pigtail IPEX → SMA fêmea', qty: '1×' },
    { id: 'bateria', part: 'Bateria Li-Po [capacidade]', qty: '1×' },
    { id: 'parafusos', part: 'Parafusos M2 × [6] mm', qty: '[4]×' },
    { id: 'gps', part: 'Módulo GPS (opcional)', qty: '1×' },
  ]

  const tools = [
    'Impressora 3D',
    'Micro-retífica',
    'Ferro de solda',
    'Paquímetro',
    'Lixas 220/400',
    'Cabo USB-C',
  ]

  const cutAlert = (
    <Box
      sx={{
        mt: 2,
        display: 'flex',
        gap: 1.5,
        padding: 2,
        backgroundColor: isDark ? '#2A1B0E' : 'rgba(255,138,51,0.08)',
        borderRadius: '12px',
        fontSize: '14px',
        lineHeight: 1.55,
      }}
    >
      <Box sx={{ color: 'primary.main', flexShrink: 0, mt: 0.25 }}>
        <Warning size="sm" />
      </Box>
      <Typography sx={{ fontSize: '14px', lineHeight: 1.55 }}>
        Use óculos de proteção e máscara. Corte devagar: o plástico da réplica derrete com rotação
        alta.
      </Typography>
    </Box>
  )

  const cutsList = (
    <Box sx={{ mt: 2, display: 'flex', flexDirection: 'column', gap: 1.5, fontSize: '14px' }}>
      {[
        { letter: 'A', title: 'Furo da antena', desc: 'Ø [x] mm no topo, para o conector SMA.' },
        {
          letter: 'B',
          title: 'Janela do display',
          desc: '[xx × yy] mm, alinhada à moldura OLED.',
        },
        {
          letter: 'C',
          title: 'Passagem USB-C',
          desc: '[xx × yy] mm na base, para carregar sem abrir.',
        },
      ].map(cut => (
        <Box key={cut.letter} sx={{ display: 'flex', gap: 1.5 }}>
          <Typography
            component="b"
            sx={{ fontFamily: 'IBM Plex Mono, monospace', color: 'primary.main', fontWeight: 700 }}
          >
            {cut.letter}
          </Typography>
          <Typography sx={{ fontSize: '14px', lineHeight: 1.5 }}>
            <Typography component="b" sx={{ fontWeight: 600 }}>
              {cut.title}
            </Typography>
            <br />
            <Typography component="span" sx={{ color: 'text.secondary' }}>
              {cut.desc}
            </Typography>
          </Typography>
        </Box>
      ))}
    </Box>
  )

  const flashBlock = (
    <Box
      sx={{
        mt: 2,
        backgroundColor: codeBg,
        border: '1px solid',
        borderColor: 'divider',
        borderRadius: '12px',
        padding: '18px 20px',
        fontFamily: 'IBM Plex Mono, monospace',
        fontSize: '13px',
        lineHeight: 1.9,
        color: 'text.secondary',
      }}
    >
      <div>
        <span style={{ opacity: 0.5 }}>1</span>&nbsp;&nbsp;Acesse{' '}
        <span style={{ color: '#8FD65A' }}>flasher.meshtastic.org</span> no Chrome
      </div>
      <div>
        <span style={{ opacity: 0.5 }}>2</span>&nbsp;&nbsp;Dispositivo:{' '}
        <span style={{ color: theme.palette.text.primary }}>escolha o modelo da sua placa</span> ·
        versão estável
      </div>
      <div>
        <span style={{ opacity: 0.5 }}>3</span>&nbsp;&nbsp;Conecte via USB-C e clique em{' '}
        <span style={{ color: theme.palette.text.primary }}>Flash</span>
      </div>
      <div>
        <span style={{ opacity: 0.5 }}>4</span>&nbsp;&nbsp;No app, defina a região:{' '}
        <span style={{ color: theme.palette.primary.main }}>[REGIÃO]</span>
      </div>
    </Box>
  )

  const flashAlert = (
    <Box
      sx={{
        mt: 2,
        display: 'flex',
        gap: 1.5,
        padding: 2,
        backgroundColor: isDark ? '#182114' : 'rgba(143,214,90,0.12)',
        borderRadius: '12px',
      }}
    >
      <Box sx={{ color: '#8FD65A', flexShrink: 0, mt: 0.25 }}>
        <Warning size="sm" />
      </Box>
      <Typography sx={{ fontSize: '14px', lineHeight: 1.55 }}>
        Nunca ligue a placa sem antena conectada: isso pode danificar o rádio LoRa.
      </Typography>
    </Box>
  )

  const steps: Step[] = [
    {
      number: 1,
      title: 'Imprima as peças',
      description:
        'Use as configurações indicadas em cada arquivo. PETG é o mínimo recomendado: PLA deforma dentro de um colete no sol.',
    },
    {
      number: 2,
      title: 'Desmonte a réplica',
      description:
        'Remova os parafusos da tampa traseira e retire enchimentos internos. Guarde os parafusos originais: alguns serão reaproveitados.',
    },
    {
      number: 3,
      title: 'Faça os cortes na carcaça',
      description:
        'Marque com o gabarito impresso e corte com disco fino na micro-retífica. Finalize com lixa para as peças encaixarem sem folga.',
      highlight: true,
      content: (
        <>
          {cutsList}
          {cutAlert}
        </>
      ),
    },
    {
      number: 4,
      title: (
        <>
          Grave o <ExternalLink href={externalLinks.meshtastic}>Meshtastic</ExternalLink> na placa
        </>
      ),
      description: 'Sem instalar nada: use o flasher oficial pelo navegador, antes de montar.',
      highlight: true,
      content: (
        <>
          {flashBlock}
          {flashAlert}
        </>
      ),
    },
    {
      number: 5,
      title: 'Monte a eletrônica no suporte',
      description:
        'Parafuse a placa no suporte interno, conecte o pigtail IPEX nela e a bateria no conector JST. Passe o SMA pela base da antena.',
    },
    {
      number: 6,
      title: 'Feche a carcaça',
      description:
        'Encaixe a moldura OLED na janela, posicione o extensor do botão e trave a tampa traseira. Por último, prenda o clip MOLLE.',
    },
    {
      number: 7,
      title: 'Pareie e teste com o time',
      description: (
        <>
          Pareie pelo app{' '}
          <ExternalLink href={externalLinks.meshtasticDownloads}>Meshtastic</ExternalLink>, crie o
          canal do squad e compartilhe o QR do canal com os colegas. Mande a primeira mensagem.
        </>
      ),
      highlight: true,
    },
  ]

  return (
    <SectionContainer id="montagem" alt>
      <SectionTitle
        label="05 — CORTES E MONTAGEM"
        title="Do zero ao primeiro “recebido” em uma tarde."
        description="Sete etapas, sem necessidade de programar. Só é preciso solda básica e uma micro-retífica."
        maxWidth="700px"
      />

      <Grid container spacing={3}>
        {/* Sidebar BOM */}
        <Grid size={{ xs: 12, md: 4 }}>
          <Box
            sx={{
              backgroundColor: 'background.default',
              border: '1px solid',
              borderColor: 'divider',
              borderRadius: '16px',
              padding: 3,
              mb: 2.5,
            }}
          >
            <Typography
              sx={{
                fontFamily: 'Chakra Petch, sans-serif',
                fontWeight: 600,
                fontSize: '20px',
                mb: 2,
              }}
            >
              Lista de materiais
            </Typography>
            <TableContainer>
              <Table size="small">
                <TableHead sx={{ display: 'none' }}>
                  <TableRow>
                    <TableCell>Peça</TableCell>
                    <TableCell align="right">Qtd.</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {bomItems.map(item => (
                    <TableRow key={item.id}>
                      <TableCell sx={{ border: 0, fontSize: '14px', pl: 0 }}>{item.part}</TableCell>
                      <TableCell
                        align="right"
                        sx={{
                          border: 0,
                          fontSize: '14px',
                          fontFamily: 'IBM Plex Mono, monospace',
                          color: 'text.secondary',
                          pr: 0,
                        }}
                      >
                        {item.qty}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Box>

          <Box
            sx={{
              backgroundColor: 'background.default',
              border: '1px solid',
              borderColor: 'divider',
              borderRadius: '16px',
              padding: 3,
            }}
          >
            <Typography
              sx={{
                fontFamily: 'Chakra Petch, sans-serif',
                fontWeight: 600,
                fontSize: '20px',
                mb: 2,
              }}
            >
              Ferramentas
            </Typography>
            <Stack direction="row" spacing={1} sx={{ flexWrap: 'wrap', gap: 1 }}>
              {tools.map(tool => (
                <Chip key={tool} label={tool} variant="outlined" size="small" />
              ))}
            </Stack>
          </Box>
        </Grid>

        {/* StepList */}
        <Grid size={{ xs: 12, md: 7 }} offset={{ md: 1 }}>
          <StepList steps={steps} />
        </Grid>
      </Grid>
    </SectionContainer>
  )
}
