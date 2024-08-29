import { Modal } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useRecoilState } from 'recoil'
import { modalState, movieState } from '../atom/atom'
import ReactPlayer from 'react-player'
import { FaPause, FaPlay, FaPlus } from 'react-icons/fa'
import { FiVolume2, FiVolumeX } from 'react-icons/fi'
import { RiThumbUpFill } from 'react-icons/ri'
import axios from 'axios'

const MovieModal = () => {

    const [showModal, setShowModal] = useRecoilState(modalState);
    const [movie, setMovie] = useRecoilState(movieState);
    const [key, setKey] = useState("");
    const [isPlaying, setIsPlaying] = useState(true);
    const [isMuted, setIsMuted] = useState(false);
    const [genres, setgenres] = useState([false]);

    const handleClose = () => {
        setShowModal(false);
        setMovie(null);
    };

    useEffect(() => {
      const fetchTrailers = async () => {
        const { data } = await axios.get(
          `https://api.themoviedb.org/3/${
            movie?.media_type === "tv" ? "tv" : "movie"
          }/${movie?.id}?api_key=${
            import.meta.env.VITE_API_KEY
          }&language=en-US&append_to_response=videos`
        );
        setgenres(data?.genres)
        setKey(data?.videos.results[0].key)

      };

      fetchTrailers()
    }, [movie]);

  return <Modal className='fixed !top-7 left-0 right-0 z-50 mx-auto w-[50%] max-w-3xl rounded-md'
  open={showModal}
  onClose={handleClose}
  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description">
    <>
    <div className='relative pt-[46.24%]'>
      <ReactPlayer 
      width="100%"
      height="100%"
      style={{ position: "absolute", top: 0, left: 0}}
      url={`https://www.youtube.com/watch?v=${key}`} 
      playing={isPlaying}
      muted={isMuted}
      />

      <div className='absolute bottom-10 flex w-full items-center justify-between px-10'>
        <div className='flex space-x-2'>
          <button className='px-8 flex items-center gap-x-2 rounded text-black 
          bg-white hover:bg-[#e6e6e6] text-xl font-bold transition cursor-pointer'>
            {" "}

            {isPlaying ? (
              <FaPause onClick={() => setIsPlaying(false)} 
              className='w-5 h-5'/>
            ) : (
              <FaPlay onClick={() => setIsPlaying(true)} 
              className='w-5 h-5'
              />
            )}
          </button>

          <button 
          className='flex h-11 w-11 items-center justify-center rounded-full border-2 
          border-[gray] bg-[#2a2a2a]/60 transition hover:border-white hover:bg-white/10 cursor-pointer'>
            {" "}
            <FaPlus className='w-5 h-5'/>
          </button>
          <button className='cursor-pointer'>
          <RiThumbUpFill className='w-8 h-8'/>
          </button>
        </div>
        <div>
          {isMuted ? (
            <FiVolumeX 
            onClick={ () => setIsMuted(false)} 
            className='h-9 w-9 cursor-pointer'/>
          ) : (
            <FiVolume2 
            onClick={ () => setIsMuted(true)} 
            className='h-9 w-9 cursor-pointer'/>
          )}
        </div>
      </div>
    </div>

    <div className='flex flex-col space-y-6 rounded-b-md bg-[#181818] px-10 py-8'>
      <div className='space-y-6 text-lg'>
        <div className='flex items-center space-x-2'>
          <p className='font-semibold text-green-400'>{movie?.vote_average * 10} % match</p>
          <p className='font-light'>{movie?.release_date || movie?.first_air_date}</p>
          <div className='text-xs flex h-4 items-center justify-center rounded 
          border border-white/40 px-1.5'>
            HD
          </div>
        </div>
      </div>
      <div className='flex flex-col gap-x-10 gap-y-4 font-light'>
        <p className='w-5/6'>{movie?.overview}</p>
        <div className='flex flex-col space-y-3 text-sm'>
          <span className="text-gray-400"> Genres :</span>
          {genres.map((genre) => genre.name).join(", ")}
        </div>
        <div>
          <span className="text-gray-400">Original Language : </span>
          {movie?.original_language}
        </div>
        <div>
          <span className="text-gray-400">Total Vote : </span>
          {movie?.vote_count}
        </div>
      </div>
    </div>
   
  </>
</Modal>
  
}

export default MovieModal