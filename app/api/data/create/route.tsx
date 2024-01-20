import { PrismaClient } from "@prisma/client"
import { NextResponse } from "next/server";

const prisma = new PrismaClient;
export const POST = async (req: Request, res: Response) => {

    const data = await req.json();

    await prisma.$connect();
    console.log(data);
    
    try {
        const created = await prisma.match.create({
            data: {
                fixture_id: data.fixture_id,
                fixture_referee: data.fixture_referee,
                fixture_timezone: data.fixture_timezone,
                fixture_date: data.fixture_date,
                fixture_timestamp: data.ixture_timestamp,
                fixture_periods_first: data.fixture_periods_first,
                fixture_periods_second: data.ixture_periods_second,
                league_id: data.league_id,
                fixture_venue_city: data.fixture_venue_city,
                fixture_status_long: data.fixture_status_long,
                fixture_status_short: data.fixture_status_short,
                fixture_status_elapsed: data.fixture_status_elapsed,
                response_league_name: data.esponse_league_name,
                league_country: data.league_country,
                response_league_logo: data.respons_league_logo,
                league_flag: data.league_flag,
                league_season: data.league_season,
                league_round: data.league_round,
                teams_home_id: data.teams_home_id,
                teams_home_name: data.teams_home_name,
                teams_home_logo: data.teams_home_logo,
                teams_home_winner: data.teams_home_winner,
                teams_away_name: data.teams_away_name,
                teams_away_logo: data.teams_away_logo,
                teams_away_winner: data.teams_away_winner,
                goals_home: data.goals_home,
                goals_away: data.goals_away,
                score_halftime_home: data.score_halftime_home,
                score_halftime_away: data.score_halftime_away
            },
        })

        return NextResponse.json({ data: created }, { status: 200 })
    } catch (error) {
        return NextResponse.json(error)
    }



} 