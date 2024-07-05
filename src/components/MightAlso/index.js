import sidebarJson from '../../data/sidebar.json';

const Mightalso = () => {
    return(
        <>
         
            {sidebarJson.items.map((data) => ( 
                <div className='mightWidgetBlock'> 
                    <div className='mightWidgetBlock__thumnail'>
                        <a href={data.url}><img src={data.thumbnail}/></a>
                    </div>
                    <div className='mightWidgetBlock__content'>
                        <a href={data.url}>{data.title}</a>
                    </div>
                </div>
            ))}
        </>
    )
}

export default Mightalso;