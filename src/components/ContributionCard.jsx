import {
  Card,
  CardContent,
  Box,
  Typography,
  Button,
  useTheme,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@mui/material'
import CheckIcon from '@mui/icons-material/Check'

export default function ContributionCard({
  icon: IconComponent,
  title,
  description,
  buttonLabel,
  buttonHref,
  items,
}) {
  const theme = useTheme()
  return (
    <Card
      sx={{
        backgroundColor: theme.palette.background.paper,
        border: `1px solid ${theme.palette.mode === 'dark' ? '#333333' : '#EEEEEE'}`,
      }}
    >
      <CardContent>
        <Box
          sx={{
            color: theme.palette.primary.main,
            mb: 2,
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <IconComponent />
        </Box>
        <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1 }}>
          {title}
        </Typography>
        <Typography variant="body2" sx={{ color: theme.palette.text.secondary, mb: 2 }}>
          {description}
        </Typography>

        {items && (
          <List sx={{ mb: 2, '& .MuiListItem-root': { py: 0.5, px: 0 } }}>
            {items.map((item, idx) => (
              <ListItem key={idx} disablePadding sx={{ alignItems: 'flex-start' }}>
                <ListItemIcon sx={{ minWidth: 32, mt: 0.5, color: theme.palette.primary.main }}>
                  <CheckIcon fontSize="small" />
                </ListItemIcon>
                <ListItemText primary={item} primaryTypographyProps={{ variant: 'body2' }} />
              </ListItem>
            ))}
          </List>
        )}

        <Button
          variant="outlined"
          color="primary"
          href={buttonHref}
          target="_blank"
          rel="noopener"
          size="small"
          sx={{ textTransform: 'none' }}
        >
          {buttonLabel}
        </Button>
      </CardContent>
    </Card>
  )
}
