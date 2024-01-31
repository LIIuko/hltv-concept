import styles from './News.module.scss'

const News = () => {
    return (
        <>
            <div className={styles.newsCard}>
                <img
                    src="https://img-cdn.hltv.org/gallerypicture/Rov7sawOVYYJrHYwtTIZno.png?auto=compress&fm=avif&ixlib=java-2.1.0&q=75&w=1600&s=c9f995568c594448d92ed00cfd5fdd85"
                    alt="News image"
                />
                <p>18/12/2023 02:03 PM</p>
                <h3>OFFICIAL: SH1RO JOINS SPIRIT </h3>
            </div>
        </>
    );
}

export default News;