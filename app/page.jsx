import Feed from "@components/Feed";

const Home = () => {
return (
    <section className="w-full flex-center flex-col">
        <h1 className="head_text text-center">
            Discover and Share
            <br className=" max-md:hidden"/>
            <span className="orange_gradient text-center"> AI-Powered Prompts</span>
        </h1>
        <p className="desc text-center">
            Prompto is an innovative AI-driven platform designed to help you explore, create, and share imaginative prompts with ease.
        </p>
        <Feed/>
    </section>
)
}

export default Home;