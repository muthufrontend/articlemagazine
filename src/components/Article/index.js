import articleJson from '../../data/article-2403311.json';
import ArticlesTitle from '../ArticleTitle';
import ArticlesBanner from '../ArticleBanner';
import './article.scss';
import Author from '../Author';
import ArticleBody from '../ArticleBody';
import Relatedtopics from '../RelatedTopics';
import SubscribeBy from '../SubscribeBy';
import WhatsappBanner from '../WhatsappBanner';
import { Col, Row } from 'react-bootstrap';
import Sidebar from '../SideBar';

const Articles = () => {
    return(
        <>
            {articleJson.map((data) => (
                <Row className='article__block'>
                    <ArticlesTitle heading={data.title}/>
                    <div className='article__region'>
                    <Col md={8} className='layout__region--first'>
                        <ArticlesBanner banners={data.image.media_image} imageCaptiop={data.image.image_byline_and_source.byline[0]}/>
                    </Col>
                    <Col md={4} className='layout__region--second'>
                        
                        {data.byline_detail.map( author => {
                            return(
                               <Author authoricon={author.hero_media.thumbnail} authorName={author.title} autherLink={author.url} publishDate={author.created} UpdateDate={author.updated} />
                            )
                         }) }
                    </Col>
                    </div>

                    <Col md={8} className='layout__region layout__region--first'>
                    <ArticleBody articleContent={data.content}/>
                    <Relatedtopics Relatedtopicsdata={data.topics} />
                    <Row className='enquiry__info'>
                        <Col md={5}>
                            <SubscribeBy SubscribeBydata={data.content} />
                        </Col>
                        <Col md={5}>
                            <WhatsappBanner WhatsappBannerdata={data.components} />
                        </Col>
                    </Row>
                    </Col>
                    <Col md={4} className='layout__region layout__region--second'>
                         <Sidebar/>
                    </Col>
                </Row>
            ))}
        </>
    )
}

export default Articles;