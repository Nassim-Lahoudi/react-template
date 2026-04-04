import { Link } from 'react-router-dom'
import './global.css'

function NotFound() {
    return (
        <div className="page">
            <div className="page-content not-found">
                <h1>404</h1>
                <p>Diese Seite existiert nicht.</p>
                <Link to="/">Zurück zur Startseite</Link>
            </div>
        </div>
    )
}

export default NotFound
