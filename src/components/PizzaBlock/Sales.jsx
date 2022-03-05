import React from 'react'
import toy11 from '../../assets/img/toy1.png'
import toy22 from '../../assets/img/toy2.png'

const Sales = () => {
  return (
    <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap'}}>
        <img src="https://toys.com.ua/themes/flat/i/carousel/ru/169.jpg" alt=""  style={{marginRight: 100, marginBottom: 100,marginTop:40}}/>
        <img src="https://toys.com.ua/themes/flat/i/carousel/ru/168.jpg" alt=""  style = {{marginBottom: 100,marginTop:40}}/>

        <img src={toy11} alt=""  style={{marginRight: 100, marginBottom: 100,marginTop:40}}/>
        <img src={toy22} alt=""  style = {{marginBottom: 100,marginTop:40}}/>

        </div>

  )
}

export default Sales