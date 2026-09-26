const sizes = {
  xs: { width: 16, height: 16 },
  sm: { width: 20, height: 20 },
  md: { width: 24, height: 24 },
  lg: { width: 32, height: 32 },
  xl: { width: 40, height: 40 },
}

export function useIconSize(size = 'md', width, height) {
  if (width && height) {
    return { width, height }
  }
  return sizes[size] || sizes.md
}
