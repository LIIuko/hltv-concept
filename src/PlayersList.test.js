import { render, screen } from '@testing-library/react';
import PlayersList from './components/PlayersList';
import expect from "expect";
import '@testing-library/jest-dom'

describe('PlayersList Component', () => {
    it('renders players correctly', () => {
        const players = [
            { image: '/path/to/player.jpg', country: { flag: '/path/to/flag.jpg', name: 'Country' }, nickname: 'Player1' }
        ];
        render(<PlayersList players={players} />);
        expect(screen.getByText('Player1')).toBeInTheDocument();
        expect(screen.getByRole('img', { name: 'Player1' })).toHaveAttribute('src', '/path/to/player.jpg');
    });
});
