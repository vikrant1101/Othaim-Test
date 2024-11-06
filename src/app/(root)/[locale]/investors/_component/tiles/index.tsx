import React from 'react'
import Styles from './index.module.scss';
const Tiles = ({ tilesData }: any) => {
    return (
        <>
            {tilesData &&
                tilesData?.map(
                    ({ title, content }: any, idx: number) => (
                        <div className='columnMd6 columnLg3' key={idx}>
                            <div className={Styles.tilesTop}>
                                {title && <p>{title}</p>}
                                {content && <h6>{content}</h6>}
                            </div>
                        </div>
                    )
                )}

            {/* <div className='columnMd6 columnLg3'>
                <div className={Styles.tilesTop}>
                    <p>Listing Date</p>
                    <h6>2008/07/14</h6>
                </div>
            </div>
            <div className='columnMd6 columnLg3'>
                <div className={Styles.tilesTop}>
                    <p>Financial Year End</p>
                    <h6>12/31</h6>
                </div>
            </div>
            <div className='columnMd6 columnLg3'>
                <div className={Styles.tilesTop}>
                    <p>External Auditors</p>
                    <h6>EY (Ernst & Young)</h6>
                </div>
            </div> */}
        </>

    )
}

export default Tiles