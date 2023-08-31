import { render, screen } from '@testing-library/react';
import Button, { BUTTON_TYPE_CLASSES } from '../button.component';


describe('button tests', () => {
    test('should render the base button when nothing is passed', () => {
        render(<Button/>);  

        const buttonElement = screen.getByRole('button');
        console.log(buttonElement.outerHTML);

        expect(buttonElement).toHaveStyle('background-color: white');
    });

    test('should render Goolge button when passed google button type', ()=> {
        render(<Button buttonType={BUTTON_TYPE_CLASSES.google} />);
        const googleButtonElement = screen.getByRole('button');
        expect(googleButtonElement).toHaveStyle('background-color: #357AE8');
    });

    test('should render Inverted button when passing inverted button type', ()=> {
        render(<Button buttonType={BUTTON_TYPE_CLASSES.inverted}/>);
        const invertedButtonElement = screen.getByRole('button');
        expect(invertedButtonElement).toHaveStyle('background-color: black');
    });

    test('should be disabled if loading is true', ()=> {
        render(<Button isLoading={true}/>);
        const buttonElement = screen.getByRole('button');
        expect(buttonElement).toBeDisabled();
    })
});
