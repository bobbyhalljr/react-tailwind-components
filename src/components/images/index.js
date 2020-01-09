import React from 'react';
import stockPhoto from '../../images/stock.jpg';

export const ImgXsRound = () => {
    return (
        <img className='rounded-full w-8 h-8 object-cover shadow-lg' src={stockPhoto} alt='random person' />
    )
}

export const ImgSmRound = () => {
    return (
        <img className='rounded-full w-16 h-16 object-cover shadow-lg' src={stockPhoto} alt='random person' />
    )
}

export const ImgMdRound = () => {
    return (
        <img className='rounded-full w-32 h-32 object-cover shadow-lg' src={stockPhoto} alt='random person' />
    )
}

export const ImgLgRound =() => {
    return (
        <img className='rounded-full w-64 h-64 object-cover shadow-lg' src={stockPhoto} alt='random person' />
    )
}

export const ImgXsSquare = () => {
    return (
        <img className='rounded-lg w-8 h-8 object-cover shadow-lg' src={stockPhoto} alt='random person' />
    )
}

export const ImgSmSquare = () => {
    return (
        <img className='rounded-lg w-16 h-16 object-cover shadow-lg' src={stockPhoto} alt='random person' />
    )
}

export const ImgMdSquare = () => {
    return (
        <img className='rounded-lg w-32 h-32 object-cover shadow-lg' src={stockPhoto} alt='random person' />
    )
}

export const ImgLgSquare = () => {
    return (
        <img className='rounded-lg w-64 h-64 object-cover shadow-lg' src={stockPhoto} alt='random person' />
    )
}
