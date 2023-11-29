import Hero from "./Hero";
import Categories from "./Categories/Categories";

const Home = () => {
    return (
        <div className="flex flex-col">
            <Hero />
            <Categories />
        </div>
    )
}

export default Home
