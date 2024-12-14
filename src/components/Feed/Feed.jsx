import React, { useEffect, useState } from 'react'
import './Feed.css'
import { value_converter } from '../../data'

import thumbnail1 from '../../assets/thumbnail1.png'
import thumbnail2 from '../../assets/thumbnail2.png'
import thumbnail3 from '../../assets/thumbnail3.png'
import thumbnail4 from '../../assets/thumbnail4.png'
import thumbnail5 from '../../assets/thumbnail5.png'
import thumbnail6 from '../../assets/thumbnail6.png'
import thumbnail7 from '../../assets/thumbnail7.png'
import thumbnail8 from '../../assets/thumbnail8.png'
import { API_key } from '../../data'
import { Link  } from 'react-router-dom'
import moment from 'moment'





function Feed({ category }) {
    const [data, setData] = useState([]);

    const fetchData = async () => {
        try {
            const videoList_URL = `https://www.googleapis.com/youtube/v3/videos?part=snippet,statistics&chart=mostPopular&maxResults=50&regionCode=US&videoCategoryId=${category}&key=${API_key}`;
            const response = await fetch(videoList_URL);
            const result = await response.json();
            setData(result.items || []); // Fallback to an empty array if items is undefined
        } catch (error) {
            console.error('Error fetching video data:', error);
        }
    };

    useEffect(() => {
        fetchData();
    }, [category]);

    return (
        <div className="feed">
            {data.map((item, index) => {
                const { snippet, statistics } = item;
                return (
                    <Link to={`video/${snippet?.categoryId}/${item.id}`} className="card" key={index}>
                        <img src={snippet?.thumbnails?.medium?.url || thumbnail1} alt={snippet?.title || 'Thumbnail'} />
                        <h2>{snippet?.title || 'No Title Available'}</h2>
                        <h3>{snippet?.channelTitle || 'Unknown Channel'}</h3>
                        <p>
                            {statistics?.viewCount ? `${value_converter(statistics.viewCount)} views` : 'No views available'} 
                            &bull; {moment(snippet?.publishedAt).fromNow()}
                        </p>
                    </Link>
                );
            })}
        </div>
    );
}

export default Feed;
