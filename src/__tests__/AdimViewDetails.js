import { fireEvent, getByLabelText, render, screen } from '@testing-library/react';
import AdminViewDetails from '../Component/AdminViewDetails';

describe('AdminViewDetails', () => {
    test('renders AdminViewDetails component', () => {
      render(<AdminViewDetails/>);
    });
});