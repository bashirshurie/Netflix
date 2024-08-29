import axios from 'axios';
import React, { useEffect, useState, rowRef, useRef } from 'react'
import { FiChevronLeft,  FiChevronRight } from "react-icons/fi";
import BASE_IMAGE_URL from '../../constants';

const Row = ({title, url}) => {

    const [movies, setMovies] = useState([]);
    const [isIscroll, setIsIscroll] = useState(false);
    const rowRef = useRef();

    useEffect( () => {

        const fetchMovies = async() => {
            const {data} = await axios.get(url);

            setMovies(data.results);
        };

        fetchMovies();
        
    }, []);

    const handleScroll = (direction) => {
        setIsIscroll(true);

        if(rowRef.current){
            const { clientWidth, scrollLeft} = rowRef.current;
            const scrollTo = direction == "left" ? scrollLeft - clientWidth : scrollLeft + clientWidth;

            rowRef.current.scrollTo({left : scrollTo, behavior : "smooth"});
        }
    }

  return (
    <div className='h-40'>
        <h1 className='text-lg font-semibold'>{title}</h1>
        <div className='group relative md:ml-2'>
            <FiChevronLeft 
            onClick={() => handleScroll("left")}
            className={`${!isIscroll && "hidden"} absolute top-0 bottom-0 left-2 z-40 m-auto h-9 w-9 cursor-pointer opacity-0 hover:scale-125 group-hover:opacity-100`}/>

            <div 
            ref={rowRef}
            className='flex items-center scrollbar-hide space-x-0.5 overflow-x-scroll md:space-x-2.5 md:p-2'>               
                {movies && movies.map( (movie) => (
                    <div className='relative h-28 min-w-[180px] md:min-w-[260px] cursor-pointer md:h-36 md:hover:scale-105'>
                        <img src={
                            BASE_IMAGE_URL + movie.backdrop_path || movie.poster_path
                        } 
                        alt=''
                        className='rounded-sm object-cover'/>
                    </div>
                ))}
            </div>

            <FiChevronRight 
            onClick={() => handleScroll("Right")}
            className='absolute top-0 bottom-0 right-2 z-40 m-auto h-9 w-9 cursor-pointer opacity-0 hover:scale-125 group-hover:opacity-100'/>
        </div>
    </div>
  )
}

export default Row