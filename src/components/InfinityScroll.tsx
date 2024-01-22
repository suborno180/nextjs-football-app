'use client';
import { MatchCardPropsType } from '@/Types/AllTypes';
import { PrismaClient } from '@prisma/client';
import React, { useState, useEffect } from 'react';

const prisma = new PrismaClient();

export const InfinityScroll = () => {
    const [matches, setMatches] = useState<MatchCardPropsType[]>([]);
    const [currentPage, setCurrentPage] = useState<number>(1);
    // console.log(matches);

    const handleScroll = () => {
        try {
            const windowHeight = window.innerHeight;
            const scrollHeight = document.documentElement.scrollHeight;
            const scrollTopHeight = document.documentElement.scrollTop;

            if (scrollTopHeight + windowHeight >= scrollHeight) {
                setCurrentPage((prevPage) => prevPage + 1);
            }
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`http://localhost:3000/api/matchs?items=1&page=${currentPage}`, {
                    method: 'POST',
                    cache: 'no-cache',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ APIKEY: `651635136549680645168406814634686`}),
                });
                
                console.log(`http://localhost:3000/api/matchs?items=1&page=${currentPage}`);
                
                const data = await response.json();
                console.log(data);
                // setMatches((prevMatches) => [...prevMatches, ...data.data]);
            } catch (error) {
                console.error(error);
            }
        };

        fetchData();
    }, [currentPage]);

    return (
        <>
            <div>
                <p>Current Page: {currentPage}</p>
                {/* Render your MatchCard components with the 'matches' state */}
            </div>
        </>
    );
};
