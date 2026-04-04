import { Link } from 'react-router-dom'
import './global.css'

function NotFound() {
    return (
        <div className="page not-found">
            <h1>404</h1>
            <p>Diese Seite existiert nicht.</p>
            <Link to="/">Zurück zur Startseite</Link>
        </div>
    )
}

export default NotFound
