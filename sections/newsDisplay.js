import NewsCard from './newsCard';

const NewsDisplay = ({ contents }) => {
  let news = [],
    pastNews = [];

  contents &&
    contents.map((item) => {
      if (
        new Date(item.published_date) <
        new Date(new Date().getTime() + -1 * 24 * 60 * 60 * 1000)
      )
        pastNews.push(item);
      else news.push(item);
    });

  news.sort((a, b) => new Date(a.published_date) - new Date(b.published_date));
  pastNews.sort(
    (a, b) => new Date(b.published_date) - new Date(a.published_date)
  );

  pastNews = pastNews.slice(0, 3);

  return (
    <div className='container px-2 md:px-5 xl:px-64 xxl:px-68 -mt-24'>
      <div className='bg-bgColor w-full rounded-md px-6 py-12 shadow-xs'>
        {news.length > 0 ? (
          news &&
          news.map((item, index) => (
            <div
              className={`${index === item.length - 1 ? 'mb-0' : 'mb-5'}`}
              key={index}
            >
              <NewsCard news={item} />
            </div>
          ))
        ) : (
          <div
            className='w-full bg-white rounded-sm px-3 py-5 flex justify-center items-center'
            style={{ minHeight: '200px' }}
          >
            <p className='body-text text-center'>
              {' '}
              No events happening soon.
            </p>
          </div>
        )}

        {pastNews.length > 0 ? (
          <>
            <h5 className='text-center font-bodyFont uppercase text-base text-lightColor mt-8 mb-6'>
              Past Announcements
            </h5>
            {pastNews &&
              pastNews.map((item, index) => (
                <div
                  className={`${index === item.length - 1 ? 'mb-0' : 'mb-5'}`}
                  key={index}
                >
                  <NewsCard news={item} />
                </div>
              ))}
          </>
        ) : null}
      </div>
    </div>
  );
};

export default NewsDisplay;
