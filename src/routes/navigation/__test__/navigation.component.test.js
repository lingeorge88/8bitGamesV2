import { screen, fireEvent } from "@testing-library/react";
import * as reactRedux from 'react-redux';
import Navigation from "../navigation.component";
import { renderWithProviders } from "../../../utils/test/test.utils";
import { signOutStart } from "../../../store/user/user.action";

jest.mock('react-redux', () => ({
    ...jest.requireActual('react-redux'),
    useDispatch: jest.fn(),
  }));
  
describe('Navigation tests', ()=> {
    afterEach(() => {
        jest.clearAllMocks();
    });
    test('It should render a Sign in link and not Sign Out link if there is no currentUser', ()=> {
        renderWithProviders(<Navigation />,{
            preloadedState: {
                user: {
                    currentUser: null,
                },
            },
        });

        const signInLinkElement = screen.getByText(/sign in/i);
        expect(signInLinkElement).toBeInTheDocument();
        const signOutLinkElement = screen.queryByText(/sign out/i);
        expect(signOutLinkElement).toBeNull();
    });

    test('It should render a Sign out link and not Sign In link if there is a currentUser', ()=> {
        renderWithProviders(<Navigation/>, {
            preloadedState: {
                user: {
                    currentUser: {}
                }
            }
        });
        const signInLinkElement = screen.queryByText(/sign in/i);
        expect(signInLinkElement).toBeNull();
        const signOutLinkElement = screen.getByText(/sign out/i);
        expect(signOutLinkElement).toBeInTheDocument();
    });

    test('It should not render a cart dropdown if isCartOpen is false', ()=> {
        renderWithProviders(<Navigation/>, {
            preloadedState: {
                cart: {
                    isCartOpen: false,
                    cartItems: []
                }
            }
        });
        const dropDownMenu = screen.queryByText(/Your cart is empty/i);
        expect(dropDownMenu).toBeNull();
    });

    test('It should render a cart dropdown if isCartOpen is true', ()=> {
        renderWithProviders(<Navigation/>, {
            preloadedState: {
                cart: {
                    isCartOpen: true,
                    cartItems: []
                }
            }
        });
        const dropDownTextElemenmt = screen.getByText(/Your cart is empty/i);
        expect(dropDownTextElemenmt).toBeInTheDocument();
    });

    

    test('It should dispatch signOutStart action when clicking on the Sign Out link', async()=> {
        const mockDispatch = jest.fn();
        reactRedux.useDispatch.mockReturnValue(mockDispatch);

        renderWithProviders(<Navigation/>, {
            preloadedState: {
                user: {
                    currentUser: {}
                }
            }
        });

        const signOutElement = screen.getByText(/sign out/i);
        expect(signOutElement).toBeInTheDocument();
        await fireEvent.click(signOutElement);

        expect(mockDispatch).toHaveBeenCalled();
        expect(mockDispatch).toHaveBeenCalledWith(signOutStart());
    })
})