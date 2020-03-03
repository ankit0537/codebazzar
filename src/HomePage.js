import React from 'react';
import './style.scss';
// import CategoryContainerComponent from '../category-container/CategoryContainerComponent';

const HomePage = () => (
    <div className='homepage'>
        <div className='categories-container'>
            <div className='category-item'>
                <div className='content-holder'>
                    <h1 className='title'>java full stack</h1>
                    <span className='subtitle'>know more</span>
                </div>
            </div>
            <div className='category-item'>
                <div className='content-holder'>
                    <h1 className='title'>data science</h1>
                    <span className='subtitle'>know more</span>
                </div>
            </div>

            <div className='category-item'>
                <div className='content-holder'>
                    <h1 className='title'>python full stack</h1>
                    <span className='subtitle'>know more</span>
                </div>
            </div>

            <div className='category-item'>
                <div className='content-holder'>
                    <h1 className='title'> java script full stack</h1>
                    <span className='subtitle'>know more</span>
                </div>
            </div>
        </div>
    </div>
    
)
export default HomePage;