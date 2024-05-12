import { render, screen } from '@testing-library/react';
import HeaderMatches from './components/HeaderMatches';
import '@testing-library/jest-dom'
import expect from "expect";

describe('HeaderMatches Component', () => {
    it('renders matches correctly', () => {
        const matches = [
            {
                event: { name: 'Event 1', logo: '/path/to/logo1.jpg' },
                maps: 'map1',
                teams: [
                    { logo: '/path/to/team1.jpg' },
                    { logo: '/path/to/team2.jpg' }
                ]
            }
        ];
        render(<HeaderMatches matches={matches} />);
        expect(screen.getByText('Event 1')).toBeInTheDocument();
        expect(screen.getByText('MAP1')).toBeInTheDocument(); // Assuming uppercase transform
        expect(screen.getAllByRole('img')[0]).toHaveAttribute('src', '/path/to/logo1.jpg');
    });
});
