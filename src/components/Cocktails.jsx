import React from 'react'
import { cocktailLists } from '../../constants'

const Conktails = () => {
  return (
    <section className="noisy"  id='cocktails'>
      <img src="/images/cocktail-left-leaf.png " alt="l-leaf" id='c-left-leaf' />
      <img src="/images/cocktail-right-leaf.png " alt="r-leaf" id='c-right-leaf' />

      <div className="list">
        <div className="popular">
          <h2 className="">Most Popular Cocktails:</h2>

          <ul className="">
            {cocktailLists.map((drink) => (
              <li className="" key={drink.name}>
                <div className="md:me-28">
                  <h3 className="">{drink.name}</h3>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Conktails