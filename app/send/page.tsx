import React from 'react'
import { PrismaClient } from '@prisma/client'
import { Match } from '@/types/AllType';

const prisma = new PrismaClient;



const page = async () => {

    try {
        await prisma.$connect
        const res = await fetch(`https://script.google.com/macros/s/${process.env.GOOGLE_SHEET_SECRET}/exec`, { cache: 'no-cache' });
        const jsonData = await res.json()
        const mainData = jsonData.data.output


        if (mainData) {
            const created = await prisma.match.create({
                data: {
                    fixture_id: 1137628,
                    fixture_referee: "64635",
                    fixture_timezone: "UTC",
                    fixture_date: "2023-12-13T22:00:00+00:00",
                    fixture_timestamp: 1702504800,
                    fixture_periods_first: "",
                    fixture_periods_second: "",
                    league_id: 267,
                    fixture_venue_city: "Iquique",
                    fixture_status_long: "Not Started",
                    fixture_status_short: "NS",
                    fixture_status_elapsed: "",
                    response_league_name: "Copa Chile",
                    league_country: "Chile",
                    response_league_logo: "https://media-4.api-sports.io/football/leagues/267.png",
                    league_flag: "https://media-4.api-sports.io/flags/cl.svg",
                    league_season: 2023,
                    league_round: "Finals",
                    teams_home_id: 2336,
                    teams_home_name: "Magallanes",
                    teams_home_logo: "https://media-4.api-sports.io/football/teams/2336.png",
                    teams_home_winner: "",
                    teams_away_name: "Colo Colo",
                    teams_away_logo: "https://media-4.api-sports.io/football/teams/2315.png",
                    teams_away_winner: "",
                    goals_home: "",
                    goals_away: "",
                    score_halftime_home: "",
                    score_halftime_away: ""
                },
            })
            // for (let index = 0; index < mainData.length; index++) {
            //     const element = mainData[index];
            //     console.log(element.ixture_timestamp);


            //     console.log('successfull!');

            // }
        }

        console.log("connected");


    } catch (error) {
        console.log(error);

    }

    return (
        <>
            <main className='min-h-screen'>
                {/* {
                    data.map((e: any) => {
                        return (
                            <>
                                <h1>{e.id}</h1>
                            </>
                        )
                    })
                } */}
            </main>
        </>
    )
}

export default page