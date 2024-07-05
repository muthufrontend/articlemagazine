
const ArticlesBanner = (props) => {
    return(
        <div className='article__banner'> 
        <picture>   
            <img src={props.banners} />
            <span class="image__byline-source">
                {props.imageCaptiop}
            </span>
        </picture>   
        
        </div>
    )
}

export default ArticlesBanner;