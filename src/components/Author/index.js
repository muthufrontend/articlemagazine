

const Author = (props) => {
    return(
        <>       
           <section className='auther'>
            <div className='author-card'>
                <a href={props.autherLink}>
                    <picture>
                        <img src={props.authoricon}/>
                    </picture>
                    <h4>{props.authorName}</h4>
                </a>
             <div className='articleUpdates'>
                <p><i>Published: </i>{props.publishDate}</p>
                <p><i>Updated: </i>{props.UpdateDate}</p>
             </div>
            </div>
           </section>
        </>
    )
}

export default Author;