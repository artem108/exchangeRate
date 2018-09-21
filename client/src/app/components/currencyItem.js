import React from 'react'

const CurrencyItem = ({ item }) => {
  return (
    <section className="container">
      <section className="upper-row">
        <div className="coin-name">
            {item.name}
          </div>
          <div className="coin-symbol">
            ({item.symbol})
          </div>
          <div className="separator">
            {item.price_usd}
          </div>
        </section>
        <section className="statistic-container">
          <div className={item.percent_change_24h < 0 ? 'percent-minus' : 'percent-plus'}>
            24h: {item.percent_change_24h} %
          </div>
          <div className={item.percent_change_7d < 0 ? 'percent-minus' : 'percent-plus'}>
            7d: {item.percent_change_7d} %
        </div>
      </section>
    </section>
  )
}

export default CurrencyItem
