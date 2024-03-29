export interface Match {
    id: string;
    slug: string;
    fixture_id?: number;
    fixture_referee?: string;
    fixture_timezone?: string;
    fixture_date: string;
    fixture_timestamp?: number;
    fixture_periods_first?: string;
    fixture_periods_second?: string;
    league_id?: number;
    fixture_venue_city?: string;
    fixture_status_long?: string;
    fixture_status_short?: string;
    fixture_status_elapsed?: string;
    response_league_name?: string;
    league_country?: string;
    response_league_logo?: string;
    league_flag?: string;
    league_season?: number;
    league_round?: string;
    teams_home_id?: number;
    teams_home_name?: string;
    teams_home_logo?: string;
    teams_home_winner?: string;
    teams_away_id?: number;
    teams_away_name?: string;
    teams_away_logo?: string;
    teams_away_winner?: string;
    goals_home?: string;
    goals_away?: string;
    score_halftime_home?: string;
    score_halftime_away?: string;
}