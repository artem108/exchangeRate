import React, { Component } from 'react'
import { connect } from 'react-redux'
import CurrencyItem from '../components/currencyItem'
import { getCryptoData } from '../modules/index'

class ListsCurr extends Component {

  componentDidMount() {
    const { dispatch } = this.props
    dispatch(getCryptoData())
  }

  render() {
    const { data, load, err } = this.props

    return (
        <section className="container-list">
          {
            data.map((item, key) =>
              <CurrencyItem item={item} key={key}/>
            )
          }
          {
            load && 'Loading...'
          }
          {
            err && <h2 className="err">{ err }</h2>
          }
        </section>
      )
    }
}

const mapStateToProps = state => {
  return {
    data: state.main.data,
    load: state.main.load,
    err: state.main.err
  }
}

export default connect(mapStateToProps)(ListsCurr)
