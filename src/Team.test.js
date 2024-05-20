import { render, screen } from '@testing-library/react';
import Team from './components/Team';
import PlayersList from './components/PlayersList';
import '@testing-library/jest-dom'
import expect from "expect";

jest.mock('./components/PlayersList', () => {
    return function DummyPlayersList() {
        return <div>PlayersList</div>;
    };
});

describe('Team Component', () => {
    it('renders team information correctly', () => {
        const teams = [
            { team: 'Team A', image: '/path/to/teamA.jpg', points: 200, players: [] }
        ];
        render(<Team teams={teams} />);
        expect(screen.getByText('#1')).toBeInTheDocument();
        expect(screen.getByText('Team A')).toBeInTheDocument();
        expect(screen.getByText('(200 points)')).toBeInTheDocument();
        expect(screen.getByText('PlayersList')).toBeInTheDocument();
    });
});
