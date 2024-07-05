
const WhatsappBanner = (props) => {
    return(

        <div className='whatsapp__banner'>  
            {props.WhatsappBannerdata.map((data) => ( 
                <>
                    {data.id =='3346' &&
                        <a href={data.view_more_url}><img src={data.image} /></a>
                    }
                </>
            ))}
           
        </div>
    )
}

export default WhatsappBanner;