import TestimonialCard from './CardInfo/TestimonialCard';
export default function Testimonials() {
    return (
        <section className="testimonials">
            <article className="testimonials-topbar">
                    <h1>Testimonials</h1>
            </article>


            <section className="testimonials-cards">
                <TestimonialCard name="Jon Doe" description="This is the best food that I've ever had!"/>
                <TestimonialCard name="Jane Doe" description="Great food, would eat here again."/>
                <TestimonialCard name="Jack Smith" description="Lovely little place."/>
                <TestimonialCard name="John Doe" description="This is the best food that I've ever had!"/>
                <TestimonialCard name="Jane Smith" description="A must do when in New York."/>
                <TestimonialCard name="Jacob Smith" description="Lovely little place."/>
                <TestimonialCard name="Jenny Smith" description="A must do when in New York."/>
                <TestimonialCard name="Joey Doe" description="Great food, would eat here again."/>


            </section>

        </section>
    );
}