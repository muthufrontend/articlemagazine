
const ArticleBody = (props) => {
    return(   
        <>
                {props.articleContent.map((data) => (
                    <div className='article__body' dangerouslySetInnerHTML={{__html:data.body}}/>
                ))}
        </>
           
    )
}

export default ArticleBody;