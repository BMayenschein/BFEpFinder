import Result from './Result'

const Results = ({ results, onClick, classText, text, show }) => {
  return (
    <>
      {results.map((result, index) => (
        <Result key={index} title={result.title} vidID={result.video_id} startAt={result.startAt} 
        onClick={onClick} classText={classText} text={text} show={show}/>
      ))}
    </>
  )
}

export default Results