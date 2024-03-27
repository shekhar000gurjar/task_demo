import React from 'react'
import article1 from "../images/article.svg"
import article2 from "../images/article (1).svg"
import article3 from "../images/article (2).svg"


const GridEight = () => {
  return (
    <>
   
<section className="mb-16 md:mb-32 bg-black text-white">
  <h2 className="pt-20 text-center text-3xl font-bold "> 
  How   <span className='text-[#F86642]'>Accessible </span> UX Design Is Changing The 
    <br />
      <span className='text-[#F86642]'>Businesses </span> For The Better
  </h2>
{/* 
<section className='lg:px-28'>
  <div className="sm:flex items-center sm:space-x-8 lg:mt-20 bg-yellow-500">
    <div data-aos="fade-right" className="sm:w-full md:w-1/2 relative bg-black text-white">
      <h1 className="font-semibold text-2xl relative z-50 text-darken lg:pr-10">
        Everything you can do in a physical classroom,{" "}
        <span className="text-yellow-500">you can do with Skilline</span>
      </h1>
      <p className="py-5 lg:pr-32">
        Skilline’s school management software helps traditional and online schools
        manage scheduling, attendance, payments and virtual classrooms all in one
        secure cloud-based system.
      </p>
      <a href="#" className="underline">
        Learn More
      </a>
    </div>
    <div data-aos="fade-left" className="sm:w-full md:w-1/2 relative mt-10 sm:mt-0">
      <img className="object-cover w-full h-auto" src={Group_386} alt="" />
    </div>
  </div>
  </section> */}


  <section  className='pl-20 pr-20'>
      <img className="object-cover h-full w-full  p-10" src={article1} alt="" />
    </section>
    <section  className='pl-20 pr-20'>
      <img className="object-cover h-full w-full  p-10" src={article2} alt="" />
    </section>
    <section  className='pl-20 pr-20'>
      <img className="object-cover h-full w-full  p-10" src={article3} alt="" />
    </section>
  
</section>    </>
  )
}

export default GridEight
