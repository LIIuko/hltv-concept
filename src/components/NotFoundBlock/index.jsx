import React from "react";
import styles from "./NotFoundBlock.module.scss";
import NotFound from "../../assets/images/NotFound.png";

const NotFoundBlock = () => (
    <div className={styles.root}>
        <img src={NotFound} alt="Not found" />
        <h2>
            The requested URL doesn't exist anymore or has been lost in the
            process of our redesign. Please recheck the URL and try again.
        </h2>
        <p className={styles.description}>
            If the URL still doesn't work, and you feel we should know about it,
            let us know in the bugs & improvement forum and we will take a look
            at it.
        </p>
    </div>
);

export default NotFoundBlock;
