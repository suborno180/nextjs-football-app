import { generateUniqueNumber } from "@/helper/functions";
import { PrismaClient } from "@prisma/client";
import Image from "next/image";

const prisma = new PrismaClient()
export default async function Home() {
//   prisma.$connect
//   const apiresponse = await fetch('https://script.google.com/macros/s/AKfycbzfIt7RlOUeOOVhB8LfP5aQjR1EcyVk1Ojnc4Uo06jwecu5VP0Rwc8pGHRnobidY8EV/exec')
//   const apijsonData = await apiresponse.json();
//   const apiData = apijsonData.data.output;



//   const allData = await prisma.match.findMany({
//     skip: 5,
//     take: 10,
//   })
//   for (let index = 0; index < apiData.length; index++) {
//     const item = apiData[index + 1];


//     try {

      // console.log(item.ixture_timestamp);


      // const data = await prisma.match.create({
      //   data: {
      //     fixture_date: item.fixture_date,
      //     fixture_id: item.fixture_id,
      //     fixture_periods_first: item.fixture_periods_first,
      //     fixture_periods_second: item.ixture_periods_second,
      //     fixture_referee: item.fixture_referee,
      //     fixture_status_elapsed: item.fixture_status_elapsed,
      //     fixture_status_long: item.fixture_status_long,
      //     fixture_status_short: item.fixture_status_short,
      //     fixture_timestamp: item.ixture_timestamp,
      //     fixture_timezone: item.fixture_timezone,
      //     fixture_venue_city: item.fixture_venue_city,
      //     goals_away: item.goals_away,
      //     goals_home: item.goals_home,
      //     league_country: item.league_country,
      //     league_flag: item.league_flag,
      //     league_id: item.league_id,
      //     league_round: item.league_round,
      //     league_season: item.league_season,
      //     response_league_logo: item.respons_league_logo,
      //     response_league_name: item.esponse_league_name,
      //     score_halftime_away: item.score_halftime_away,
      //     score_halftime_home: item.score_halftime_home,
      //     slug: generateUniqueNumber(),
      //     teams_away_logo: item.teams_away_logo,
      //     teams_away_name: item.teams_home_name,
      //     teams_away_winner: item.teams_away_winner,
      //     teams_home_id: item.teams_home_id,
      //     teams_home_logo: item.teams_home_logo,
      //     teams_home_name: item.teams_home_name,
      //     teams_home_winner: item.teams_home_winner
      //   }
      // })
      // console.log('created successfully:', data);

//     } catch (error) {

//     }


//   }

  return (
    <>
      {/* {
        allData?.map((e: any, i: any) => {
          return (
            <h1>{e.id}</h1>
          )
        })
      } */}
    </>
  );
}
