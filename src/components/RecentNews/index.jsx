import React from 'react';
import styles from './RecentNews.module.scss'

const RecentNews = (props) => {
    const recentNews = props.recentNews
    return (
        <ul>
        {recentNews.map(({title, image, link}) => (
            <li key={title}>
                <a href={link} style={{textDecoration: 'none'}}>
                    <div className={styles.recent__news}>
                        <div className={styles.image__block}>
                            <img
                                src={image}
                                alt="News image"
                            />
                        </div>
                        <div className={styles.text__block}>
                            <h4>{title.toUpperCase()}</h4>
                            <p>4 hours ago</p>
                        </div>
                    </div>
                </a>
            </li>
            ))}
        </ul>
    );
}

export default RecentNews;