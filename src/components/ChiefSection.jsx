import React from 'react'
import ChiefCard from './ChiefCard'

export default function ChiefSection() {
    const chiefs = [
        {
            name: "Juan Carlos",
            img: "/img/top_chief/img_1.jpg",
            recipesCount: "10",
            cuisine: "Mexicans",
        },
         {
            name: "John Doe",
            img: "/img/top_chief/img_2.jpg",
            recipesCount: "1045",
            cuisine: "Italian",
        },
         {
            name: "Juan Carlos",
            img: "/img/top_chief/img_3.jpg",
            recipesCount: "108",
            cuisine: "Kazakh",
        },
         {
            name: "Juan Carlos",
            img: "/img/top_chief/img_4.jpg",
            recipesCount: "1780",
            cuisine: "Indian",
        },
         {
            name: "Juan Aybek",
            img: "/img/top_chief/img_5.jpg",
            recipesCount: "410",
            cuisine: "Mexicans",
        },
         {
            name: "Juan Carlos",
            img: "/img/top_chief/img_6.jpg",
            recipesCount: "140",
            cuisine: "American",
        }
    ]
  return (
    <div className='section chiefs'>
        <h1 className='title'>
            Our top Chiefs
        </h1>
        <div className='top-chiefs-container'>
            {chiefs.map((chief)=>(
               <ChiefCard  recipesCount = {chief.recipesCount} cuisine = {chief.cuisine} key = {chief.name} name = {chief.name} img = {chief.img}/>
            ))}
        
        </div>
    </div>
  )
}
