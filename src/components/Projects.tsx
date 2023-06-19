"use client"
import Image from 'next/image'
import React from 'react'

function Projects() {
  return (
    <div>
      <header className='text-[40px] font-bold flex flex-row justify-center items-center'>
        PROJECTS
      </header>
      <section className='projectList mx-w-[200px] m-auto pl-20 pr-20'>
        <div className='flex flex-row justify-center p-10'>
          <div className='basis-1/2 mt-10'>
            <p className='text-[40px] mb-10'>Jiph</p>
            <p className=''>A mobile and web application that helps ofws sending money to the philippines.
              It features money transaction such as cashin, cashout, remittance, and direct transfer.
            </p>
            <div className='mt-10'>
              Technology Used: <br /><br />
              <ul className='flex flex-row gap-5 list-none'>
                <li className='language'>ReactJs</li>
                <li className='language'>React Native</li>
                <li className='language'>Laravel</li>
                <li className='language'>MySQl</li>
                <li className='language'>Redis</li>
                <li className='language'>SQS</li>
                <li className='language'>S3</li>
              </ul>
            </div>
          </div>
          <div className='basis-1/2'>
            <Image
              src={'/payhiram.png'}
              height={800}
              width={800}
              alt='Jiph'
            />
          </div>
        </div>

        <div className='flex flex-row justify-center p-10'>
          <div className='basis-1/2'>
            <Image
              src={'/fitin.png'}
              height={800}
              width={800}
              alt='Jiph'
            />
          </div>
          <div className='basis-1/2 mt-10'>
            <p className='text-[40px] mb-10'>Fitin</p>
            <p className=''>A mobile and web application that helps people choose the kinds of clothes they want to wear in their everyday basis. 
            Through the use of 3d models, users can now see what it will look like when being fit. It also allows them to buy their chosen pair of clothes the receive them as fast as possible. 
            </p>
            <div className='mt-10'>
              Technology Used: <br /><br />
              <ul className='flex flex-row gap-5 list-none'>
                <li className='language'>NextJs</li>
                <li className='language'>Tailwind</li>
                <li className='language'>React Native</li>
                <li className='language'>Laravel</li>
                <li className='language'>MySQl</li>
                <li className='language'>Redis</li>
                <li className='language'>S3</li>
              </ul>
            </div>
          </div>
        </div>

        <div className='flex flex-row justify-center p-10'>
          <div className='basis-1/2 mt-10'>
            <p className='text-[40px] mb-10'>Agricord</p>
            <p className=''>A mobile and web application that helps allows merchants to scan there products through the use of NFCs and RPAN.
            It is an end-to-end platform for stock management and tracking of agrichemicals through the supply chain- from factory to farm to field.
            Whether you are a chemical manufacturer, a distribution partner or a farm business- Agricord helps create smart products by employing the knowledge of the supply chain.
            </p>
            <div className='mt-10'>
              Technology Used: <br /><br />
              <ul className='flex flex-row gap-5 list-none'>
                <li className='language'>VueJs</li>
                <li className='language'>React Native</li>
                <li className='language'>Laravel</li>
                <li className='language'>MySQl</li>
              </ul>
            </div>
          </div>
          <div className='basis-1/2'>
            <Image
              src={'/traceag.png'}
              height={800}
              width={800}
              alt='Jiph'
            />
          </div>
        </div>

        <div className='flex flex-row justify-center p-10'>
          <div className='basis-1/2'>
            <Image
              src={'/mezzo.png'}
              height={800}
              width={800}
              alt='Jiph'
            />
          </div>
          <div className='basis-1/2 mt-10'>
            <p className='text-[40px] mb-10'>Mezzo</p>
            <p className=''>A booking platform for mezzohotel that allows the customers to book rooms them ahead of time. 
            </p>
            <div className='mt-10'>
              Technology Used: <br /><br />
              <ul className='flex flex-row gap-5 list-none'>
                <li className='language'>VueJs</li>
                <li className='language'>Laravel</li>
                <li className='language'>MySQl</li>
                <li className='language'>S3</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Projects