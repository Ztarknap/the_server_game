import './player-list.styles.scss'

export const PlayerList = (user:any) => {

    return(
        <div className="player-list">
            {user.players.map((player:any) => {
                return(
                <div>
                    {player.user}
                </div>)
            })}
        </div>
    )
}