import { render, screen } from '@testing-library/react';
import ForgotPassword from '../Component/ForgotPassword';

describe('ForgotPassword', () => {
  test('renders ForgotPassword component', () => {
    render(<ForgotPassword/>);
  });

  test('SecurityQue should be in document',() =>{
    const component =render(<ForgotPassword/>)
    const input =component.getByText("SecurityQue");
    expect(input).toBeInTheDocument();
}); 
    test('SecurityAns should be in document',() =>{
    const component =render(<ForgotPassword/>)
    const input =component.getByText("SecurityAns");
    expect(input).toBeInTheDocument();
}); 
test('Email id should be in document',() =>{
    const component =render(<ForgotPassword/>)
    const input =component.getByText("Email ID");
    expect(input).toBeInTheDocument();
});

test('User Type should be in document',() =>{
  const component =render(<ForgotPassword/>)
  const input =component.getByText("User Type");
  expect(input).toBeInTheDocument();
});
test('Password should be in document',() =>{
    const component =render(<ForgotPassword/>)
    const input =component.getByText("Password");
    expect(input).toBeInTheDocument();
}); 
    test('reTypePassword should be in document',() =>{
    const component =render(<ForgotPassword/>)
    const input =component.getByText("reTypePassword");
    expect(input).toBeInTheDocument();
}); 
});