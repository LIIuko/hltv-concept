import { render, screen } from '@testing-library/react';
import Home from './pages/Home/Home';
import '@testing-library/jest-dom'
import HeaderMatches from './components/HeaderMatches';
import News from './components/News';
import RecentNews from './components/RecentNews';
import TopTeams from './components/TopTeams';
import PlayerOfTheWeek from './components/PlayerOfTheWeek';
import Team from './components/Team';
import expect from "expect";
import {MemoryRouter} from "react-router-dom";


jest.mock('./components/HeaderMatches', () => () => <div>HeaderMatches</div>);
jest.mock('./components/News', () => () => <div>News</div>);
jest.mock('./components/RecentNews', () => () => <div>RecentNews</div>);
jest.mock('./components/TopTeams', () => () => <div>TopTeams</div>);
jest.mock('./components/PlayerOfTheWeek', () => () => <div>PlayerOfTheWeek</div>);
jest.mock('./components/Team', () => () => <div>Team</div>);

describe('Home Component', () => {
    const props = {
        recentNews: [{ title: 'News 1' }],
        topTeams: [{ name: 'Team Liquid' }],
        matches: [{ match: 'Match 1' }]
    };

    it('renders subcomponents correctly', () => {
        render(<MemoryRouter><Home {...props} /></MemoryRouter>);
        expect(screen.getByText('HeaderMatches')).toBeInTheDocument();
        expect(screen.getByText('News')).toBeInTheDocument();
        expect(screen.getByText('RecentNews')).toBeInTheDocument();
        expect(screen.getByText('TopTeams')).toBeInTheDocument();
        expect(screen.getByText('PlayerOfTheWeek')).toBeInTheDocument();
        expect(screen.getByText('Team')).toBeInTheDocument();
    });
});
