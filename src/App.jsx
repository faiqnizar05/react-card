import { useState } from 'react'
import './App.css'
import { Card } from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="App">
            <Card
            imgSrc="https://images.tokopedia.net/img/cache/200-square/VqbcmM/2022/7/2/7ab96674-9602-4126-a552-ac8a385d39e4.jpg"
            imgAlt="Card-Image"
            title="Iphone app 13"
            description="Jakarta-Bandung "
            buttonText="Buy Now"
            harga="Rp. 16.000.000"
            />
      </div>
    </>
  )
}

export default App
