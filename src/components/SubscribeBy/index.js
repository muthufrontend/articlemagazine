
const SubscribeBy = (props) => {
    return(
        <>  
            {props.SubscribeBydata.map((data) => ( 
                <> 
                    {data.label =='Subscribe' &&
                        <div className='subsribeBy'>
                            <div className='subsribeBy__header'>
                                <h4>{data.title}</h4>
                            </div>
                            <div className='subsribeBy__body'>
                                <div className='subsribeBy__block'>
                                    <div className='subsribeBy__title' dangerouslySetInnerHTML={{__html:data.body}}></div>
                                    <div className='subsribeBy__banner'>
                                        <img src={data.newsletter_image}/>
                                    </div>
                                </div>
                                <input placeholder={data.placeholder} type="text" id="edit-email" name="email" value="" size="60" maxlength="128" class="form-text form-item__textfield"/>
                                <input type="submit" id="edit-submit" name="op" value={data.label} class="button js-form-submit form-submit form-item__textfield"/>
                                <p className='subsribeBy__description'>{data.sub_description}</p>
                            </div>
                        </div>
                    }
                </>
            ))}
        </>
    )
}

export default SubscribeBy;