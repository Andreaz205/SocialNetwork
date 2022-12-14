import React, {useState} from 'react'
import cn from "classnames"
import styles from './Paginator.module.css'

let Paginator =({totalItemsCount, pageSize, currentPage, onPageChanged}) => {
    let pagesCount = Math.ceil(totalItemsCount/pageSize)

    let pages = []

    for (let i =1; i <= pagesCount; i++) {
        pages.push(i)
    }

    let portionCount = Math.ceil(pagesCount/pageSize)

    let [portionNumber, setPortionNumber] = useState(1)

    let leftPortionPageNumber = (portionNumber -1) * pageSize + 1;

    let rightPortionPageNumber = portionNumber* pageSize

    // console.log(totalItemsCount, pageSize, currentPage)

    return (
        <div className={cn(styles.paginator)}>
            {portionNumber > 1 && <button onClick={() => {setPortionNumber(portionNumber - 1)}}>Prev</button>}
            {pages
                .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
                .map(p => {
                    return <span
                        className={cn({[styles.selectedPage]: currentPage === p}, styles.pageNumber)}
                        key={p}
                        onClick={() => {
                            onPageChanged(p)
                            console.log(p)
                        }}
                    >
                       {p}
                    </span>
                })}
            {portionCount > portionNumber && <button onClick={() => {setPortionNumber(portionNumber + 1)}}>Next</button>}

        </div>
    )
}

export default Paginator