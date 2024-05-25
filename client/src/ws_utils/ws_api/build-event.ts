export const playStartEvent = (userNameInput: string) => {
    return JSON.stringify({event:"play-start", payload: {userName: userNameInput}});
}