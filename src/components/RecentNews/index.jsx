import React from 'react';
import styles from './RecentNews.module.scss'

const RecentNews = () => {
    return (
        <>
            <div className={styles.recent__news}>
                <div className={styles.image__block}>
                    <img src="https://img-cdn.hltv.org/gallerypicture/hfp1hIlCGw0nNLiBTFO39a.jpg?auto=compress&fm=avif&ixlib=java-2.1.0&m=%2Fm.png&mw=213&mx=39&my=947&q=75&w=1600&s=f17e23b77876608ff98605dff0d046c2"
                         alt="News image"
                    />
                </div>
                <div className={styles.text__block}>
                    <h4>STAT CHECK: ASTRALIS' CONTROVERSIAL BIG-MONEY BID TO RETURN TO THE TOP</h4>
                    <p>17 hours ago</p>
                </div>
            </div>
        </>
    );
}

export default RecentNews;