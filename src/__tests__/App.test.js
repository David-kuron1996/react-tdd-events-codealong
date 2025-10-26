import { render, screen } from "@testing-library/react";
import App from "../App";
import '@testing-library/jest-dom';

// Code tests here
test("renders Hello, World! heading", () => {
    render(<App />);
    const headingElement = screen.getByText(/Hello, World!/i);
    expect(headingElement).toBeInTheDocument();
});














