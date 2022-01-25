import React, { useRef, useState, useEffect } from 'react'
import useScrollListener from '../hooks/useScroll'

export default function Gradient() {
  const scroll = useScrollListener();
  const [navClassList, setNavClassList] = useState([]);

  useEffect(() => {
    const _classList = [];
    const innerHeight = window.innerHeight;
    const bodyHeight = document.getElementById('body').getBoundingClientRect();
    const bottomValue = bodyHeight - innerHeight;
    console.log(bottomValue)

    if (scroll.y === window.innerHeight)
      _classList.push(`${gradient.pushHeader}`);

    console.log(scroll.y)

    setNavClassList(_classList);
  }, [scroll.y]);

  return(
    <>
      <div className={`gradient ${navClassList.join(" ")}`}>
      </div>
    </>
  )
}
