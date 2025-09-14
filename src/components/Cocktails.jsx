import React from 'react'
import { cocktailLists, mockTailLists } from '../../constants'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const Conktails = () => {
  
  useGSAP(() => {
    const parallaxTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: '#cocktails',
        start: 'top 30%',
        end: 'bottom 80%',
        scrub: true,
      }
    })

    parallaxTimeline.from('#c-left-leaf', {x: -200, y: 200})
    .from('#c-right-leaf', {x: 200, y: 50}  )
  })

  return (
    <section className="noisy"  id='cocktails'>
      <img src="/images/cocktail-left-leaf.png " alt="l-leaf" id='c-left-leaf' />
      <img src="/images/cocktail-right-leaf.png " alt="r-leaf" id='c-right-leaf' />

      <div className="list">
        <div className="popular md:ml-10">
          <h2 className="">Most Popular Cocktails:</h2>

          <ul className="">
            {cocktailLists.map((drink) => (
              <li className="" key={drink.name}>
                <div className="md:me-28">
                  <h3 className="">{drink.name}</h3>
                  <p>{drink.country} | {drink.detail}</p>
                </div>
                <span>- {drink.price}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="loved md:mr-10">
          <h2 className="">Most Popular Mocktails:</h2>

          <ul className="">
            {mockTailLists.map((drink) => (
              <li className="" key={drink.name}>
                <div className="md:me-28">
                  <h3 className="">{drink.name}</h3>
                  <p>{drink.country} | {drink.detail}</p>
                </div>
                <span>- {drink.price}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Conktails