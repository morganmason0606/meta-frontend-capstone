import GreekSalad from '../../../assets/food/greek-salad.webp';
import Bruschetta from '../../../assets/food/bruschetta.jpeg';
import LemonDessert from '../../../assets/food/lemon-dessert.webp';
import SpecialCard from './CardInfo/SpecialCard';

export default function Specials() {
    return (
        <section className="specials">
            <article className="specials-topbar">
                <h1>This weeks specials</h1>
                <a className="action-button" href={require('../../../assets/menu.webp')} target="_blank" rel="noreferrer">Online Menu</a>
            </article>

            <section className="specials-cards">
                <SpecialCard image={Bruschetta}name="Bruschetta" price="$15.99" description="bread topped with tomato, prosciutto, and cheese an ddrizzled with
                 salt and olive oil."/>
                <SpecialCard image={GreekSalad} name="Greek Salad" price="$9.99" description="Greek Salad,with tomato, lettuce, cheese, olives and dressed with salt, hot pepper, and olive oil."/>
                <SpecialCard image={LemonDessert} name="Lemon Dessert" price="$8.99" description="Lemon bread coated in sugar"/>
            </section>

        </section>
    );
}