import { render, screen } from '@testing-library/react';
import RecentNews from './components/RecentNews';
import expect from "expect";
import '@testing-library/jest-dom'

describe('RecentNews Component', () => {
    it('renders news items correctly', () => {
        const news = [
            { title: 'News 1', image: '/path/to/news1.jpg', link: 'http://linkto.news1.com' }
        ];
        render(<RecentNews recentNews={news} />);
        expect(screen.getByText('NEWS 1')).toBeInTheDocument();
        expect(screen.getByRole('img', { name: 'News image' })).toHaveAttribute('src', '/path/to/news1.jpg');
    });
});
