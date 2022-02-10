import { login, logout } from "../../actions/auth";

test('Should generate login action object', () => {
    const action = login('Boop');
    expect(action).toEqual({type: 'LOGIN', uid: 'Boop'});
});


test('Should generate logout action object', () => {
    const action = logout();
    expect(action).toEqual({
        type: 'LOGOUT'
    });
});