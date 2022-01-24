import main from '../styles/main.module.scss'
import Header from './Header'
import Gradient from './Gradient'

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <main className={main.main}>
        <Gradient />
        {children}
      </main>
    </>
  )
}
