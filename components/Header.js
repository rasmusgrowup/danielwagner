import Link from 'next/link'
import React, { useRef, useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import header from '../styles/header.module.scss'
import { gsap } from 'gsap'
import useScrollListener from '../hooks/useScroll'

export default function Header() {
  const [animateIntro, setAnimateIntro] = useState(true);
  const headerRef = useRef(null);
  const router = useRouter();
  const scroll = useScrollListener();
  const [atTop, setAtTop] = useState(true);
  const [navClassList, setNavClassList] = useState([]);

  useEffect(() => {
    const _classList = [];

    if (scroll.y > 150 && scroll.y - scroll.lastY > 0)
      _classList.push(`${header.pushHeader}`);

    setNavClassList(_classList);
  }, [scroll.y, scroll.lastY]);

  useEffect (() => {
    if (window.sessionStorage.getItem("firstLoadDone") === null) {
      setAnimateIntro(true);
      window.sessionStorage.setItem("firstLoadDone", 1)
      gsap.from(headerRef.current, {
        duration: 2,
        opacity: 0,
        y: -50,
        ease: 'Power3.easeInOut',
      })
    } else {
      setAnimateIntro(false);
      gsap.set(headerRef.current, {
        opacity: 1,
        y: 0
      });
    }
  }, [])


  return (
    <>
      <header className={header.header} ref={headerRef}>
        <div className={`${header.headerInner} ${navClassList.join(" ")}`}>
          <div className={header.logo}><strong>Daniel Wagner</strong><span> — Paralympisk Atlet</span></div>
          <nav className={header.nav}>
            <ul>
              <li>
                <Link href='/'><a className={router.pathname == '/' ? `${header.active}` : ''}>Foredrag</a></Link>
              </li>
              <li>
                <Link href='/bio'><a className={router.pathname == '/bio' ? `${header.active}` : ''}>Bio</a></Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  )
}
