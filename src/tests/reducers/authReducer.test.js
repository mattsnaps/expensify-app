import authReducer from "../../reducers/authReducer";


test('authReducer Login Success', () => {
    const action = {
        type: 'LOGIN',
        uid: 'Boop'
    };
    const state = authReducer({uid: undefined}, action);
    expect(state.uid).toEqual(action.uid);
});

test('authReducer Logout Success', () => {
    const action = {
      type: 'LOGOUT'
    };
    const oldState = {uid: 'Booper'};
    const newState = authReducer(oldState, action);
    expect(newState).toEqual({});
});


