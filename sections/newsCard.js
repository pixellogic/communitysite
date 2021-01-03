import { dateFormatter, truncate } from '../utils';

const NewsCard = ({ news }) => {
  const [fullContent, setFullContent] = React.useState(false);

  return (
    <div className='w-full bg-white rounded-sm px-3 py-5'>
      <p className='font-bodyFont text-sm text-lightColor'>
        {dateFormatter(news.published_date)}, {news.author}
      </p>
      <h4 className='title-text mt-0 mb-2'>{news.title}</h4>
      <div
        className='body-text'
        dangerouslySetInnerHTML={{
          __html: news.content.length < 300 ?  news.content : !fullContent ? truncate(news.content) : news.content,
        }}
      ></div>
      <p
        className='body-text mt-2 text-primaryColor hover:text-primaryHovered cursor-pointer'
        onClick={() => setFullContent(!fullContent)}
      >
        {news.content.length < 300 ? null : !fullContent ? 'Read More' : 'Read Less'}
      </p>
    </div>
  );
};

export default NewsCard;
