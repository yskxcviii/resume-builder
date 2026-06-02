'use client'

import { THEME } from '@/constants'
import { PrimeReactProvider, PrimeReactPTOptions } from 'primereact/api'
import type { ReactNode } from 'react'

type Props = {
  children: ReactNode
}

const pt: PrimeReactPTOptions = {
  button: {
    root: {
      className: 'p-button-sm',
    },
  },
  card: {
    body: {
      style: {
        padding: '0.75rem',
        // backgroundColor: THEME.color.background,
      },
    },
    content: {
      style: {
        padding: '0',
      },
    },
  },
  accordiontab: {
    headerAction: {
      style: {
        padding: '0.75rem',
        backgroundColor: 'var(--surface-section)',
      },
    },
    content: {
      style: {
        backgroundColor: 'var(--surface-section)',
      },
    },
  },
  tooltip: {
    root: {
      style: {
        padding: '0',
      },
    },
    text: {
      style: {
        padding: THEME.spacing.xs,
        fontSize: '0.75rem',
      },
    },
    arrow: {
      style: {
        display: 'none',
      },
    },
  },
  message: {
    root: {
      style: {
        padding: THEME.spacing.xs,
      },
    },
    text: {
      style: {
        padding: THEME.spacing.xs,
        fontSize: '0.75rem',
      },
    },
  },
}

export function Providers({ children }: Props) {
  return <PrimeReactProvider value={{ pt }}>{children}</PrimeReactProvider>
}
