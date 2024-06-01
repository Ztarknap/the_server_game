export const playStartEvent = (userNameInput: string) => {
    return JSON.stringify({event:"play-start", payload: {userName: userNameInput}});
}

export const loginEvent = (name: string) => {
    return JSON.stringify({event:"login", payload: {userName: name}});
}