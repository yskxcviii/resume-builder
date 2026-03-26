import Image from 'next/image'
import { Button } from 'primereact/button'

export const Home = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        gap: '1rem',
      }}
    >
      <Image src="/logo.png" alt="Resume Builder" width={200} height={200} />
      <span>🚧 Under construction... 🚧</span>
      <div style={{ display: 'flex', gap: '0.75rem' }}>
        <Button label="Mira Button" icon="pi pi-check" />
        <Button label="Secondary" severity="secondary" outlined />
      </div>
    </div>
  )
}

export default Home
