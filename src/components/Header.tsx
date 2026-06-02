'use client'

import { Card } from 'primereact/card'
import { Image } from 'primereact/image'
import { Button } from 'primereact/button'
import { HStack } from '@/components/layout/HStack'
import logo from '@/assets/logo.png'
import { THEME } from '@/constants'
import { useState } from 'react'

export const Header = () => {
  const [isSideBySide, setIsSideBySide] = useState(false)

  const styles: ResumeBuilder.ComponentStyles<'productName' | 'logo'> = {
    productName: {
      fontSize: '1.5rem',
      fontWeight: 'bold',
    },
    logo: {
      marginLeft: THEME.spacing.sm,
    },
  }

  const pt: ResumeBuilder.ComponentPt<{ name: 'root'; component: 'card' }> = {
    root: {
      root: {
        style: { width: '100%' },
      },
      body: {
        style: { padding: THEME.spacing.sm },
      },
    },
  }

  return (
    <Card pt={pt.root}>
      <HStack justify="space-between" items="center">
        <HStack items="center">
          <Image src={logo.src} alt="Resume Builder Logo" width="36px" height="36px" style={styles.logo} />
          <div style={styles.productName}>Resume Builder v1</div>
        </HStack>

        <HStack justify="end" items="center">
          <Button
            icon="codicon codicon-split-horizontal"
            outlined={isSideBySide}
            onClick={() => setIsSideBySide(!isSideBySide)}
          />
        </HStack>
      </HStack>
    </Card>
  )
}
