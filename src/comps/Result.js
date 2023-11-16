import {useState} from 'react'

const Result = ({ title, vidID, startAt, onClick, classText, text }) => {

    const [show, setShow] = useState(false);
    const handlePlayVideo = (e) => {
        setShow(!show)
      }

    let titleArr = title.split('|')
    let epName = titleArr[0]
    let epNum = titleArr[1]
    
    return (
        <div className="result self-center flex flex-col">
            <p className="text-center pb-4 font-mono font-semibold text-lg">{epNum} - {epName}</p>
            <div className="fakeThumbnail self-center" onClick={ e => {handlePlayVideo(e)}}>
                {!show ? <img className='thumbImg cursor-pointer hover:scale-105 mobile:h-64 mobile:w-96 h-80 w-norm' src={'https://img.youtube.com/vi/' + vidID + '/hqdefault.jpg'} alt='video thumbnail'></img> :
                <iframe className="mobile:h-64 mobile:w-96 h-80 w-norm"
                src={"https://www.youtube.com/embed/" + vidID + "?start=" + startAt + "&autoplay=1"} 
                title="YouTube video player" frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                allowFullScreen
                ></iframe>}
            </div>
            <div className="divider"></div> 
        </div>
    )
  }
  
  export default Result