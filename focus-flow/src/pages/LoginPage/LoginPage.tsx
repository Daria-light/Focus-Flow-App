import React, { useEffect, useLayoutEffect, useRef } from 'react'
import './LoginPage.css'
import gsap from 'gsap'
import SplitText from 'gsap/src/SplitText'
import { ScrollTrigger } from 'gsap/all'
import beachBg from '../../assets/img/secondBg.jpg'

function LoginPage() {
  const cub1 = useRef<HTMLElement>(null)
  const cub2 = useRef<HTMLDivElement>(null)
  const cub3 = useRef<HTMLDivElement>(null)

  const tl = gsap.timeline()
  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    const text1Split = new SplitText('#text1', { type: 'chars, word' })
    const text2Split = new SplitText('#text2', { type: 'chars, word' })
    const descriptionSplit = new SplitText('#description1', {
      type: 'chars, words',
    })
    const aboutSplit = new SplitText('#about', { type: 'chars, word' })
    const panelDescription = new SplitText('#panelDescription', {
      type: 'chars, words',
    })
    const endText = new SplitText('#endText', {
      type: 'chars, words',
    })
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
    const finalChar = 'O'

    panelDescription.words.forEach((word, i) => {
      gsap.fromTo(
        word,
        { color: 'rgba(140,94,145,0.2)' },
        {
          color: '#8c5e91',
          scrollTrigger: {
            trigger: '#panelDescription',
            start: () => `top+=${i * 5}% 70%`,
            end: () => `bottom+=${(i + 1) * 10}% 80%`,
            scrub: true,
          },
        },
      )
    })

    const ctx = gsap.context(() => {
      tl.from(text1Split.chars, {
        yPercent: 100,
        opacity: 0,
        duration: 1.8,
        ease: 'expo.out',
        stagger: { amount: 1, from: 'end' },
      })
        .from(
          text2Split.chars,
          {
            xPercent: 100,
            opacity: 0,
            duration: 1.5,
            ease: 'power.out',
            stagger: { amount: 1, from: 'start' },
          },
          '-=2',
        )
        .fromTo(
          aboutSplit,
          { color: '#8c5e9133', scale: 0.4 },
          {
            duration: 1,
            ease: 'power1.out',
            background: '#8c5e91',
            color: 'wheat',
            scrollTrigger: {
              trigger: '#about',
              start: '-700% top',
              end: 'bottom bottom',
              scrub: true,
            },
          },
        )
        .from(
          descriptionSplit.words,
          {
            yPercent: 100,
            opacity: 0,
            duration: 1.5,
            ease: 'power1.out',
            stagger: { amount: 0.8, from: 'edges' },
          },
          '-=2',
        )
        .fromTo(
          endText.chars,
          {
            yPercent: -700,
            color: 'transparent',
          },
          {
            yPercent: 0,
            color: 'wheat',
            duration: 2,
            ease: 'power1.out',
            yoyo: true,
            stagger: { amount: 0.8, from: 'start' },
            scrollTrigger: {
              markers: true,
              trigger: '#endText',
              start: '-1100% top',
              end: 'bottom bottom',
            },
          },
        )
        .from('#emailInput', { opacity: 0 })
    })

    return () => ctx.revert()
  }, [])
  return (
    <div className="login">
      <div className="hiContainer">
        <div className="loginMenu">
          <div className="loginMenuItem itemBurger">
            <button className="menuBurger">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                <path
                  fill="wheat"
                  d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z"
                />
              </svg>
            </button>
          </div>
        </div>
        <div className="contentWrapper">
          <p className="text1" id="text">
            <span id="text1">Hello</span> <span id="text2">friends!</span>
          </p>
          <p className="descrition1" id="description1">
            It is my first big pet-project. I hope that you will appreciate it
          </p>
        </div>
      </div>
      <div className="mainContainer">
        <div className="mainContainerTexts">
          <p id="about">ABOUT</p>
        </div>
        <div className="mainContainerPanel">
          <img src={beachBg} className="containerPhoto" alt="beach" />
          <p className="containerPanelDescription" id="panelDescription">
            Это - TodoFlow! Это твой персональный планировщик дел с
            мотивационными подсказками. Добавляйте задачи, отмечайте прогресс и
            вдохновляйтесь каждый день. Регистрация займёт всего пару секунд —
            начните делать больше с удовольствием!
          </p>
        </div>
      </div>
      <div className="endContainer">
        <p className="endText" id="endText">
          Если ты хочешь присоедениться, авторизируйся
        </p>
        <input placeholder="email" id="emailInput"></input>
      </div>

      {/* <div className="cub1">
        <span ref={cub1} className="tipacub">
          LOXX
        </span>
      </div> */}
      {/* <div className="cub2" ref={cub2}></div> */}
      {/* <div className="cub2 cub20"></div>
      <div className="cub2 cub21"></div>
      <div className="cub2 cub22"></div>
      <div className="cub2 cub23"></div> */}
    </div>
  )
}

export default LoginPage
//     tl.to('.cub2', {
//   y: 200,
//   duration: 1,
//   borderRadius: '100%',
//   rotation: 360,
//   ease: 'back.inOut',
//   stagger: { amount: 1.5, grid: [3, 2], axis: 'y', from: 'edges' },
// })

//     .to(cub3.current, {
//   x: 1900,
//   duration: 2,
//   rotation: 360,
//   scrollTrigger: {
//     trigger: cub3.current,
//     start: 'bottom, bottom',
//     markers: true,
//     end: 'top, 20%',
//     scrub: true,
//   },
// })

// aboutSplit.chars.forEach((char, i) => {
//   const finalChar = char.textContent || ''

//   gsap.fromTo(
//     char,
//     { opacity: 0, yPercent: 100 },
//     {
//       opacity: 1,
//       yPercent: 0,
//       duration: 1,
//       delay: i * 0.8,
//       scrollTrigger: {
//         trigger: '#about',
//         start: 'top 80%',
//       },
//       onUpdate: () => {
//         char.textContent = chars[Math.floor(Math.random() * chars.length)]
//       },
//       onComplete: () => {
//         char.textContent = finalChar
//       },
//     },
//   )
// })
