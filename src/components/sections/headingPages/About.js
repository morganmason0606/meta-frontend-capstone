import pic1 from '../../../assets/food/food3.jpeg'
import pic2 from '../../../assets/food/food2.jpeg'
export default function About() {
    return (
        <article className="about-us">
            <section className="hero-text">
                <h1>Little Lemon</h1>
                <h2>New York</h2>
                <p className="about-subtext">
                Little Lemon Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
            </section>

            <section className="double-image">
                <img className="about-1" src={pic1} alt="bowls of food"></img>
                <img className="about-2" src={pic2} alt="platter of food"></img>
            </section>
    </article>
    );
}