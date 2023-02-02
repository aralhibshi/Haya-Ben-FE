import React from 'react'

export default function Home() {
  return (
    <div className='orderNowDiv'>
        <div className='flex justify-center items-center home1BG h-full w-full'>
          <h1 className='text-9xl text-slate-100 text-center homeHeader1'>Quality Bento on the Go!</h1>
        </div>

        <div className='flex flex-row justify-evenly items-center bg-orange-100 bg-opacity-80 aboutDiv'>
          <div className='drop-shadow-2xl'>
            <img src="/images/about.webp" alt="About Image" className='aboutImg rounded-3xl'/>
          </div>

          <div className='flex flex-col justify-center text-center aboutText'>
            <h1 className='text-5xl drop-shadow-2xl'>About Us</h1>
            <p className='text-2xl drop-shadow-2xl'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum eum dicta maiores facere ratione amet ipsum sequi qui aspernatur nesciunt?</p>
          </div>
        </div>

        <img src="/images/marble-texture1.jpg" alt="" className='textureBG'/>

        <div className='flex flex-row items-center justify-center home2BG'>
          <div className='z-10'>
            <a href='/menu' className='text-7xl orderButton drop-shadow-xl p-5 border-8 hover:cursor-pointer'>Order Now!</a>
          </div> 

          <div className='flex flex-col justify-center items-center orderNow'>
            <img src="/images/bento-food-2-crop.png" alt="Bento Food" className='z-10 drop-shadow-2xl bentoImg1'/>
            <img src="/images/bento-food-1-crop.png" alt="Bento Food" className='z-10 drop-shadow-2xl bentoImg2'/>
          </div>
        </div>
    </div>
  )
}
