import './CardSkletonLoadin.css';
import React from 'react'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

function CardSkletonLoadin() {
    return (
        <div className='card-skleton-container'>
            <SkeletonTheme baseColor="#f2f2f2" highlightColor="#bfbfbf">
                <Skeleton className='skleton-card' width={192} height={288} />
                <Skeleton className='skleton-card' width={192} height={288} />
                <Skeleton className='skleton-card' width={192} height={288} />
                <Skeleton className='skleton-card' width={192} height={288} />
                <Skeleton className='skleton-card' width={192} height={288} />
                <Skeleton className='skleton-card' width={192} height={288} />
                <Skeleton className='skleton-card' width={192} height={288} />
                <Skeleton className='skleton-card' width={192} height={288} />
                <Skeleton className='skleton-card' width={192} height={288} />
                <Skeleton className='skleton-card' width={192} height={288} />
                <Skeleton className='skleton-card' width={192} height={288} />
                <Skeleton className='skleton-card' width={192} height={288} />
            </SkeletonTheme>
        </div>
    )
}

export default CardSkletonLoadin