import { render, screen } from '@testing-library/react';
import TopTeams from './components/TopTeams';
import expect from "expect";
import '@testing-library/jest-dom'

describe('TopTeams Component', () => {
    it('renders top teams correctly', () => {
        const teams = [
            { team: 'Team A', image: '/path/to/teamA.jpg', country: '/path/to/countryA.jpg', points: 100 }
        ];
        render(<TopTeams topTeams={teams} />);
        expect(screen.getByText('Team A')).toBeInTheDocument();
        expect(screen.getByText('100 Points')).toBeInTheDocument();
    });
});
