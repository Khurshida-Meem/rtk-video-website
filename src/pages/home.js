import React from 'react';
import Navbar from '../components/navbar';
import Tags from '../components/tags';
import Pagination from '../components/ui';
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