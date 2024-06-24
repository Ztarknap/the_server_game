export const playStartEvent = (userNameInput: string) => {
    return JSON.stringify({event:"play-start", payload: {userName: userNameInput}});
}

export const loginEvent = (name: string) => {
    return JSON.stringify({event:"login", payload: {userName: name}});
}

export const inviteEvent = (opponentId: string) => {
    return JSON.stringify({event: "invite", payload: { opponentId: opponentId}});
}

export const refreshPlayersEvent = (id: string) => {
    return JSON.stringify({event:"refreshInvite", payload: {id: id}})
}