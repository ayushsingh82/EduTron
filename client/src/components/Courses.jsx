import React, { useEffect, useRef, useState } from 'react';

function Courses() {
    const [videoDetails, setVideoDetails] = useState({});
    const [watchProgress, setWatchProgress] = useState({}); // Track watch progress
    const courseLinks = [
        { id: 1, name: 'Course 1', url: 'https://www.youtube.com/embed/mNlHazLKwj8', thumbnail: 'https://example.com/thumbnail1.jpg', videoId: 'mNlHazLKwj8' },

    ];

    const playersRef = useRef({});

    useEffect(() => {
        // Load YouTube Iframe API
        const tag = document.createElement('script');
        tag.src = "https://www.youtube.com/iframe_api";
        const firstScriptTag = document.getElementsByTagName('script')[0];
        firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

        // Callback function when API is ready
        window.onYouTubeIframeAPIReady = () => {
            courseLinks.forEach(course => {
                playersRef.current[course.id] = new window.YT.Player(`player-${course.id}`, {
                    height: '360',
                    width: '640',
                    videoId: course.videoId,
                    events: {
                        'onReady': onPlayerReady,
                        'onStateChange': (event) => handlePlayerStateChange(event, course.id),
                    },
                });
            });
        };

        return () => {
            // Cleanup players on unmount
            Object.values(playersRef.current).forEach(player => player.destroy());
        };
    }, []);

    const onPlayerReady = (event) => {
        // Start tracking watch progress
        const player = event.target;
        const courseId = player.getIframe().id.split('-')[1]; // Extract course ID from iframe ID

        const interval = setInterval(() => {
            const currentTime = player.getCurrentTime();
            const duration = player.getDuration();

            // Update watch progress
            setWatchProgress(prev => ({
                ...prev,
                [courseId]: (currentTime / duration) * 100, // Percentage watched
            }));

            // Check if the video is completed
            if (currentTime >= duration) {
                clearInterval(interval);
                console.log(`Course ${courseId} completed! Mint NFT.`);
                // Call your minting function here
            }
        }, 1000); // Check every second

        // Clear interval on player destroy
        return () => clearInterval(interval);
    };

    const handlePlayerStateChange = (event, courseId) => {
        // Additional state change handling if needed
    };

    const fetchVideoDetails = async (videoId) => {
        const apiKey = 'AIzaSyBzRHfB10rRGFkfZxy0lkGwdfmFei6NSZA';
        try {
            const response = await fetch(`https://www.googleapis.com/youtube/v3/videos?id=${videoId}&key=${apiKey}&part=snippet`);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            if (data.items.length > 0) {
                setVideoDetails(prevDetails => ({
                    ...prevDetails,
                    [videoId]: data.items[0].snippet,
                }));
            } else {
                console.log(`No video found for ID: ${videoId}`);
            }
        } catch (error) {
            console.error('Error fetching video details:', error);
        }
    };

    useEffect(() => {
        courseLinks.forEach(course => {
            fetchVideoDetails(course.videoId);
        });
    }, []);

    return (
        <div className="courses-container">
            <h1 className="text-lg font-medium text-red-500 text-center py-[30px]">
                Available Courses
            </h1>
            <ul className="course-list">
                {courseLinks.map(course => (
                    <li key={course.id} className="course-item">
                        <div className="course-card">
                            <img src={course.thumbnail} alt={`${course.name} thumbnail`} className="course-thumbnail" />
                            <a href={course.url} target="_blank" rel="noopener noreferrer" className="course-name">
                                {course.name}
                            </a>
                            <div id={`player-${course.id}`} className="youtube-player"></div>
                            {videoDetails[course.videoId] && (
                                <p>{videoDetails[course.videoId].title}</p>
                            )}
                            <p>Watched: {watchProgress[course.id] ? watchProgress[course.id].toFixed(2) + '%' : '0%'}</p>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Courses;



