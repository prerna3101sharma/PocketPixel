import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ProductListingComponent from './components/ProductListingComponent'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)
  const [searchText, setSearchText]=useState("");

  useEffect(()=>{
    console.log(searchText);
    
  }, [searchText])
  return (
    <div className='bg-[#333333] font-sans'>
      <Header searchText={searchText} setSearchText={setSearchText}/>

      <div className='max-w-7xl h-full flex mx-auto'>
        <ProductListingComponent searchText={searchText}/>
      </div>
      <Footer/>
    </div>

  )
}

export default App
