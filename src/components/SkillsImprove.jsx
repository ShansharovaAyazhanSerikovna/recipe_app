import React from 'react'

function SkillsImprove() {

    const list = [
        "Learn new recepies",
        "Experiment with food",
        "Write your own recepies",
        "Know nutrition facts",
        "Get cooking tips",
        "Get ranked"
    ]


  return (
     <div className='section improve-skills'>
        <div className='col img'>
            <img src='/img/gallery/img_10.jpg'/>
        </div>
        <div className='col typography'>
            <h1 className='title'>Improve Your Culinary Skills</h1>
            {list.map((item, index)=>(
                <p className='skill-item' key={index}>{item}</p>
            ))}
            <button className='btn'>signup now</button>
        </div>
       
    </div>
  )
}

export default SkillsImprove