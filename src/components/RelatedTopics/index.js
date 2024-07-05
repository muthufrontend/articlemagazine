
const Relatedtopics = (props) => {
    return(
        <div className='related__topics'>  
        <h2>Related Topics</h2>
            {props.Relatedtopicsdata.map((data) => ( 
                <a href={data.link}>{data.name}</a>
            ))}
        </div>
    )
}

export default Relatedtopics;