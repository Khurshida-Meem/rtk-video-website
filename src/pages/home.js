import React from 'react';
import Tags from '../components/tags';
import Pagination from '../components/ui/pagination';
import VideoGrid from '../components/video-grid';

const Home = () => {
    return (
        <>
            <Tags />
            <VideoGrid />
            <Pagination />
        </>
    );
};

export default Home;