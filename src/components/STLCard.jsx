import { Card, CardContent, CardMedia, Typography, Button, Box, useTheme } from '@mui/material'
import DownloadIcon from '../icons/Download'

export default function STLCard({ id, name, image, downloadUrl }) {
  const theme = useTheme()
  return (
    <Card sx={{ backgroundColor: theme.palette.background.paper }}>
      <CardMedia
        component="img"
        height={200}
        image={image}
        alt={name}
        sx={{ objectFit: 'cover' }}
      />
      <CardContent>
        <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1 }}>
          {name}
        </Typography>
        <Button
          variant="contained"
          color="primary"
          fullWidth
          startIcon={<DownloadIcon />}
          href={downloadUrl}
          download
        >
          Baixar STL
        </Button>
      </CardContent>
    </Card>
  )
}
