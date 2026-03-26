import Image from 'next/image'

export const Home = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
      }}
    >
      <Image src="/logo.png" alt="Resume Builder" width={200} height={200} />
      <span>🚧 Under construction... 🚧</span>
    </div>
  )
}

export default Home
