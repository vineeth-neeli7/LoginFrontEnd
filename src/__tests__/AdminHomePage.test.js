import { fireEvent, getByLabelText, render, screen } from '@testing-library/react';
import AdminHomePage from '../Component/AdminHomePage';

describe('AdminHomePage', () => {
    test('renders AdminHomePage component', () => {
      render(<AdminHomePage/>);
    });
});