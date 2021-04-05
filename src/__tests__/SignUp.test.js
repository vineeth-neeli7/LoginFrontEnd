import { fireEvent, getByLabelText, render, screen } from '@testing-library/react';
import SignUp from '../Component/SignUp';

describe('SignUp', () => {
    test('renders Signup component', () => {
      render(<SignUp/>);
    });
  
    test('Email id should be in document',() =>{
        const component =render(<SignUp/>)
        const input =component.getByText("Email");
        expect(input).toBeInTheDocument();
    });

    test('User Type should be in document',() =>{
      const component =render(<SignUp/>)
      const input =component.getByText("User Type");
      expect(input).toBeInTheDocument();
  });
    test('First name should be in document',() =>{
    const component =render(<SignUp/>)
    const input =component.getByText("FirstName");
    expect(input).toBeInTheDocument();
});
     test('Last name should be in document',() =>{
    const component =render(<SignUp/>)
    const input =component.getByText("LastName");
    expect(input).toBeInTheDocument();
});
    test('DOB should be in document',() =>{
    const component =render(<SignUp/>)
    const input =component.getByText("DateOfBirth");
    expect(input).toBeInTheDocument();
});
    test('PhoneNumber should be in document',() =>{
    const component =render(<SignUp/>)
    const input =component.getByText("PhoneNumber");
    expect(input).toBeInTheDocument();
});

  test('Password should be in document',() =>{
    const component =render(<SignUp/>)
    const input =component.getByText("Password");
    expect(input).toBeInTheDocument();
}); 
    test('reTypePassword should be in document',() =>{
    const component =render(<SignUp/>)
    const input =component.getByText("reTypePassword");
    expect(input).toBeInTheDocument();
}); 
    test('SecurityQue should be in document',() =>{
    const component =render(<SignUp/>)
    const input =component.getByText("SecurityQue");
    expect(input).toBeInTheDocument();
}); 
    test('SecurityAns should be in document',() =>{
    const component =render(<SignUp/>)
    const input =component.getByText("SecurityAns");
    expect(input).toBeInTheDocument();
}); 

  }); 