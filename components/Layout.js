import main from '../styles/main.module.scss'
import Header from './Header'
import Gradient from './Gradient'
import Footer from './Footer'
import Contact from './Contact'

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <main className={main.main}>
        <Gradient />
        {children}
        <Contact />
      </main>
      <Footer />
    </>
  )
}
