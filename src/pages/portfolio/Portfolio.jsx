import { useState } from 'react'
import Form from "../../components/form/Form";
import './portfolio.css'
import {portfolioData} from './portfolioData.js'

export default function Portfolio() {
    const [type, setType] = useState('all')
    const [portfolioLength, setPortfolioLength] = useState(8)
    const [openPopup, setopenPopup] = useState({projectId: null, opened: false})
    const [moved, setMoved] = useState(0)
    const [loadingImg, setLoadingImg] = useState(false)

    function togglePopup(projectId) {
        if(projectId >= 21 && projectId <=28)return
        setopenPopup(prev=>{return {projectId:projectId, opened: !prev.opened}})
    }

    function moveLeft() {
        const countImgs = portfolioData[openPopup.projectId-1].imgs.length - 1
        setMoved(prev=>{
            if(moved===0)return countImgs
            else return prev-1
        })
    }

    function moveRight() {
        const countImgs = portfolioData[openPopup.projectId-1].imgs.length - 1
        if(moved===countImgs)setMoved(-1)
        setMoved(prev=>prev+1)
    }

    function close(id) {
        togglePopup(id)
        setMoved(0)
    }

    const loadMore = () =>{
        setLoadingImg(true)
        setTimeout(() => {
            setLoadingImg(false)
            setPortfolioLength(prev=>{
                if(prev===portfolioData.length){return prev}//if the prev is equal to the length of the data, this stops from trying to load more
                else return prev+4
            })
        }, 500);
    }

  return (
    <div className='portfolio'>
        <div className="container">

            <div style={{opacity: openPopup.opened? '0':'1'}} className="portfolioTitleDiv">
                <h1>Portfolio</h1>
                <p>Our projects tell you who we are and how we work.</p>
            </div>

            <div className='filterProject'>
                <span  onClick={()=>setType('all')} className={type==='all'? 'active' : ''} >All</span>
                <span onClick={()=>setType('interrior')} className={type==='interrior'? 'active' : ''} >Interrior Design</span>
                <span onClick={()=>setType('branding')} className={type==='branding'? 'active' : ''} >Branding</span>
                <span onClick={()=>setType('web')} className={type==='web'? 'active' : ''} >Web Development</span>
            </div>

            <div className="projects">
                {
                    portfolioData.map((project)=>{
                        //if the type is not 'all' and also the project's type is not matching with the selected type return hidden div
                        if(type !== 'all' && type !== project.type)return (<div  key={project.id} className='hiddenDiv'></div>);

                        //returning 'nothing' for the projects that are above length
                        if(type === 'all' && project.id > portfolioLength)return (<div  key={project.id} className='hiddenDiv'></div>);
                        //returning the jsx with the data
                        
                        return (
                            <div key={project.id}  className='project'>
                                <div style={{transform: project.id!==openPopup.projectId && openPopup.opened? 'scale(0)':'scale(1)'}} className={project.id===openPopup.projectId && openPopup.opened? 'openGallary': 'gallary'} >
                                    <i onClick={()=>{close(project.id)}} className="CloseProjectIcon fa-solid fa-xmark"></i>
                                    <i onClick={()=>{moveLeft()}} className="fa-solid fa-chevron-left"></i>
                                    <i onClick={()=>{moveRight()}} className="fa-solid fa-chevron-right"></i>
                
                                    <div className='co'>
                                        <div style={openPopup.opened? {transform: `translateX(${-moved*100}%)`}: {transform: `translateX(0)`}} className="scrollParent">
                                            <img onClick={()=>{togglePopup(project.id)}} className='projectImg1' src={project.imgs[0].img1} alt="" />
                                            <img className='hiddenImage' src={project.imgs[1]?.img2} alt="" />
                                            <img className='hiddenImage' src={project.imgs[2]?.img3} alt="" />
                                            <img className='hiddenImage' src={project.imgs[3]?.img4} alt="" />
                                            <img className='hiddenImage' src={project.imgs[4]?.img5} alt="" />
                                            <img className='hiddenImage' src={project.imgs[5]?.img6} alt="" />
                                            <img className='hiddenImage' src={project.imgs[6]?.img7} alt="" />
                                            <img className='hiddenImage' src={project.imgs[7]?.img8} alt="" />
                                            <img className='hiddenImage' src={project.imgs[8]?.img9} alt="" />
                                            <img className='hiddenImage' src={project.imgs[9]?.img10} alt="" />
                                            <img className='hiddenImage' src={project.imgs[10]?.img11} alt="" />
                                            <img className='hiddenImage' src={project.imgs[11]?.img12} alt="" />
                                            <img className='hiddenImage' src={project.imgs[12]?.img13} alt="" />
                                        </div>
                                    </div>
                                </div>
                                <p style={{transform: openPopup.opened? 'scale(0)':'scale(1)'}} className='projectTextDetail' ><b>{project.title}</b> {project.description}</p>
                            </div>
                        )
                    })
                }

            </div>

            <div style={{display: portfolioLength === portfolioData.length? 'none': 'flex'}} onClick={loadMore} className='loadMore'>
                <i style={{display: loadingImg? 'none': 'block'}} className="loadMoreIcon fa-solid fa-circle-plus"></i>
                <p style={{display: loadingImg? 'none': 'block'}} >See other projects</p>
                <img style={{display: loadingImg? 'block': 'none'}} src="assets/spinner.gif" alt="loading..." />
            </div>
            
        </div>
        
        {/* including the form component */}
        <Form/>
    </div>
  )
}