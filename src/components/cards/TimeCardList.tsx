'use client'
// Import the necessary components and types
import React, { useEffect, useState } from 'react';
import { MatchTimeCard } from './MatchTimeCard';
import { MatchCardPropsType } from '@/Types/AllTypes';
import CardSklitan from './CardSklitan';

// TimeCardList component
const TimeCardList = ({ apiKey, hosturl }: any) => {
    const [matches, setMatches] = useState<MatchCardPropsType[]>([]);
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [isLoading, setLoading] = useState<boolean>(true);
    const [isBottomLoading, setBottomLoading] = useState<boolean>(true);



    // Fetch data when the component mounts and on scroll
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`${hosturl}/api/matchs?items=15&page=${currentPage}`, {
                    method: 'POST',
                    // cache: 'no-cache',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ APIKEY: apiKey }),
                });

                const data = await response.json();
                setMatches((prevMatches) => [...prevMatches, ...data.data]);
                setLoading(false); // Set loading to false when data is fetched
                setBottomLoading(false);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, [currentPage]);

    // Add an event listener for scroll and clean up when the component unmounts
    useEffect(() => {
        const handleScroll = () => {
            const windowHeight = window.innerHeight;
            const scrollHeight = document.documentElement.scrollHeight;
            const scrollTopHeight = document.documentElement.scrollTop;

            if (scrollTopHeight + windowHeight >= scrollHeight) {
                setBottomLoading(true);
                setCurrentPage((prevPage) => prevPage + 1);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            {/* Map through the matches and render MatchTimeCard components */}
            {isLoading ? (
                <div className='flex flex-col gap-10'>
                    {[...Array(10)].map((_, index) => (
                        <CardSklitan key={index} />
                    ))}
                </div>
            ) : (
                <>
                    {matches.map((match) => (
                        <MatchTimeCard
                            key={match.id}
                            id={match.id}
                            fixture_date={match.fixture_date}
                            fixture_id={match.fixture_id}
                            league_country={match.league_country}
                            league_round={match.league_round}
                            teams_away_name={match.teams_away_name}
                            teams_home_name={match.teams_home_name}
                            slug={String(match.slug)}
                        />
                    ))}
                </>
            )}
            {isBottomLoading && (
                <div className='my-8 ml-3'>
                    <CardSklitan />
                </div>
            )}
        </>
    );
};

export default TimeCardList;