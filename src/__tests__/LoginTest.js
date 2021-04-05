import { fireEvent, getByLabelText, render, screen } from '@testing-library/react';
import Login from '../Component/Login';

describe('Login', () => {
    test('renders Login component', () => {
      render(<Login/>);
    });
  
    test('Email id should be in document',() =>{
        const component =render(<Login/>)
        const input =component.getByText("EmailId");
        expect(input).toBeInTheDocument();
    });

    test('User Type should be in document',() =>{
      const component =render(<Login/>)
      const input =component.getByText("User Type");
      expect(input).toBeInTheDocument();
  });
  test('Password should be in document',() =>{
    const component =render(<Login/>)
    const input =component.getByText("Password");
    expect(input).toBeInTheDocument();
}); 

  }); 