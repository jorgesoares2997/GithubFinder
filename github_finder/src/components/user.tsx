import { UserProps } from "../types/user";
import { MdLocationPin } from "react-icons/md";
import { Link } from "react-router-dom";
import classes from "./user.module.css"

const User = ({login,avatar_url, location, followers, following}: UserProps) => {
    return (
        <div className={classes.user}>
       <img src={avatar_url} alt={login} />
       <h2>{login}</h2>
       {location && (
        <p className={location}>
            <MdLocationPin/>
        <span>{location}</span>
        </p>
       )}
       <div className={classes.stats}>
        <p>Seguidores:</p>
        <p className={classes.number}>{followers}</p>
       </div>
       <div className={classes.stats}>
        <p>Seguindo:</p>
        <p className={classes.number}>{following}</p>
       </div>
       <Link to={`https://github.com/${login}?tab=repositories`}>Ver melhores projetos</Link>
        
        </div>
    )
}

export default User