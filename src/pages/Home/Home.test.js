import { render, screen } from '@testing-library/react';
import Home from './Home';

test('renders particles', () => {
    render(<Home />);
    const particles = screen.getByTestId('particles');
    expect(particles).toBeInTheDocument();
});
