import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

export function App () {
    return (
        <section className='App'>
        <TwitterFollowCard userName="midudev" initialIsFollowing={true}  name="Miguel Ángel Durán" />
        <TwitterFollowCard userName="eduardsuarez"  name="Eduard Antonio Suárez" />
        <TwitterFollowCard userName="freddier" name="Fredy Vega" />
        </ section>
       
    )
}