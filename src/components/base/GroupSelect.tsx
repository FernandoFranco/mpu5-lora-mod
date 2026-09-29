import { FC, useRef, useState } from 'react'
import { Box, ButtonBase, Menu, MenuItem, Typography } from '@mui/material'
import { CheckIcon, ChevronRight } from '@/icons'
import type { GroupSelectProps } from '@/types'

const monoLabel = {
  fontFamily: 'IBM Plex Mono, monospace',
  fontSize: '11px',
  letterSpacing: '0.1em',
  textTransform: 'uppercase',
} as const

const countLabel = (count: number) => `${count} ${count === 1 ? 'peça' : 'peças'}`

export const GroupSelect: FC<GroupSelectProps> = ({ groups, selectedId, onSelect }) => {
  const anchorRef = useRef<HTMLButtonElement>(null)
  const [open, setOpen] = useState(false)
  const selected = groups.find(g => g.id === selectedId) ?? groups[0]

  return (
    <>
      <ButtonBase
        ref={anchorRef}
        onClick={() => setOpen(true)}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label={`Grupo de peças: ${selected.name}`}
        sx={{
          width: '100%',
          justifyContent: 'space-between',
          textAlign: 'left',
          gap: 2,
          p: 2,
          borderRadius: '14px',
          border: '1px solid',
          borderColor: open ? 'primary.main' : 'divider',
          backgroundColor: 'background.paper',
          transition: 'border-color 0.2s',
          '&:hover, &:focus-visible': { borderColor: 'primary.main' },
        }}
      >
        <Box>
          <Typography sx={{ ...monoLabel, color: 'text.secondary' }}>Grupo</Typography>
          <Typography
            sx={{ fontFamily: 'Chakra Petch, sans-serif', fontWeight: 700, fontSize: '17px' }}
          >
            {selected.name}
          </Typography>
          <Typography sx={{ fontSize: '12px', color: 'text.secondary' }}>
            {countLabel(selected.parts.length)}
          </Typography>
        </Box>
        <Box
          sx={{
            color: 'primary.main',
            display: 'flex',
            transform: open ? 'rotate(-90deg)' : 'rotate(90deg)',
            transition: 'transform 0.2s',
          }}
        >
          <ChevronRight size="sm" />
        </Box>
      </ButtonBase>

      <Menu
        anchorEl={anchorRef.current}
        open={open}
        onClose={() => setOpen(false)}
        slotProps={{
          paper: {
            sx: {
              mt: 1,
              width: anchorRef.current?.offsetWidth,
              borderRadius: '14px',
              border: '1px solid',
              borderColor: 'divider',
              backgroundImage: 'none',
              backgroundColor: 'background.paper',
            },
          },
          list: { role: 'listbox', sx: { p: 1 } },
        }}
      >
        {groups.map(group => {
          const isSelected = group.id === selectedId
          return (
            <MenuItem
              key={group.id}
              role="option"
              selected={isSelected}
              onClick={() => {
                onSelect(group.id)
                setOpen(false)
              }}
              sx={{
                borderRadius: '10px',
                justifyContent: 'space-between',
                gap: 2,
                py: 1.25,
                '&.Mui-selected': { backgroundColor: 'rgba(255,138,51,0.12)' },
              }}
            >
              <Box>
                <Typography
                  sx={{ fontWeight: 600, color: isSelected ? 'primary.main' : 'inherit' }}
                >
                  {group.name}
                </Typography>
                <Typography sx={{ fontSize: '12px', color: 'text.secondary' }}>
                  {countLabel(group.parts.length)}
                </Typography>
              </Box>
              {isSelected && <CheckIcon size="sm" color="#FF8A33" />}
            </MenuItem>
          )
        })}
      </Menu>
    </>
  )
}
