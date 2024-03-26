'use client'
import React from "react"
import MyImage from "./IMG_1344.jpeg"


const DATA = [
  {
    id:0,
    title:'Cashier',
    subTitle:'June 2006 - December 2010',
    describtion:
    'Worked at 11-11 wich later became Kjarval. Did mostly cashier work but also alot of stocking shelves.Evantually I became a shift-manager with the resposibility of opening and closing the store.'
  },
  {
    id:1,
    title:'Food Industry',
    subTitle:'January 2011 - May 2012',
    describtion:'Worked at SS.First I was making the 1944 dinners but quickly took over the department of special foods.Where I made food for people with allergies or people in the hospital.',
  },
  {
    id:2,
    title:'CNC Milling Specialist',
    subTitle:'September 2012 - September 2022',
    describtion:'Worked at Össur HQ. I was a CNC operator mostly working on the milling machines.Later on I took on the resposibility to become the safety officer of the CNC department. And I did that job along with being a CNC operator.I left my job due to sudden illness.', 
  },
]


type ImageProps={
}

const Image = (props: ImageProps) => {
  return (
    <div className="flex justify-end">
      <img src={MyImage.src} alt="Picture" className="p-2 w-28 lg:w-40 h-28 lg:h-40 object-cover rounded-full overflow-hidden"/>
    </div>
  )
}

type HeaderProps={
 
}

const Header = (props: HeaderProps) => {
  return(
    <div>
      <Image/>
      <h1 className='pl-2 pt-2 text-2xl md:text-5xl font-bold font-cursive'>Svanhildur Ragna Guðmundsdóttir</h1>
      <p className="m-2 text-sm md:text-lg text-gray-500 font-cursive">Studying Programming at NTV skólinn and full time mom</p>
      <hr className='border-2 border-black'></hr>
    </div>
)}

type ContentProps = {
  data: typeof DATA
}

const Content = (props: ContentProps) => {
  return(
     <div>
      {props.data.map(item => (
        <>
        <div className='ml-2 text-lg md:text-4xl font-bold text-left mt-10' key={item.id}>{item.title}</div>
        <div className='ml-2  text-gray-500 font-semibold text-sm md:text-lg' key={item.id}>{item.subTitle}</div>
        <div className="ml-2 mr-2 mt-1 text-base md:text-2xl" key={item.id}>{item.describtion}</div>
        </>
      ))}
     </div>
)
}

export default function Home() {
  return (
    <div className="bg-amber-50 min-h-screen">
      <Header/>
      <Content data={DATA}/>
    </div>
  )
}
