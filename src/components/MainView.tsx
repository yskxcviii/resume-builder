import { memo } from 'react'
import { Card } from 'primereact/card'
import { Splitter, SplitterPanel } from 'primereact/splitter'
import { THEME } from '@/constants'

export const MainView = memo(() => {
  const styles: ResumeBuilder.ComponentStyles<'splitter' | 'splitterPanelContent'> = {
    splitter: {
      width: '100%',
      height: '100%',
      backgroundColor: THEME.color.background,
      borderWidth: '0',
    },
    splitterPanelContent: {
      width: '100%',
    },
  }

  const pt: ResumeBuilder.ComponentPt<{ name: 'splitter'; component: 'splitter' }> = {
    splitter: {
      gutter: {
        style: {
          width: `calc(${THEME.spacing.sm} - 0.25rem)`,
          marginLeft: '0.125rem',
          marginRight: '0.125rem',
        },
      },
    },
  }

  return (
    <Splitter pt={pt.splitter} style={styles.splitter}>
      <SplitterPanel>
        <Card style={styles.splitterPanelContent}>🚧 Under construction... 🚧</Card>
      </SplitterPanel>
      <SplitterPanel>
        <Card style={styles.splitterPanelContent}>🚧 Under construction... 🚧</Card>
      </SplitterPanel>
    </Splitter>
  )
})
