import { fireEvent, getByLabelText, render, screen } from '@testing-library/react';
import DeleteUser from '../Component/DeleteUser';

describe('DeleteUser', () => {
    test('renders DeleteUser component', () => {
      render(<DeleteUser/>);
    });
    test('Email id should be in document',() =>{
        const component =render(<DeleteUser/>)
        const input =component.getByText("Email");
        expect(input).toBeInTheDocument();
    });

    test('User Type should be in document',() =>{
      const component =render(<DeleteUser/>)
      const input =component.getByText("User Type");
      expect(input).toBeInTheDocument();
  });
});