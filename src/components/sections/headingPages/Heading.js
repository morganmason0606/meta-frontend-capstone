import {Link} from 'react-router-dom';
export default function Heading() {
    return (
        <header>
            <article className="call-to-action">
                <section className="hero-text">
                    <h1>Little Lemon</h1>
                    <h2>New York</h2>
                    <p className="subsection">We are a small, family owned restaurant, located New York, New York.</p>
                    <br></br>
                    <Link className="action-button" to="/reservations">Reserve a table</Link>
                </section>

                <section className="hero-image">
                    <img src={require('../../../assets/food/food1.png')} alt="Little Lemon restaurant cuisine"></img>
                </section>
            </article>
      </header>
    );
}