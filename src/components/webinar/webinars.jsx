
const Webinars = () => {
    let webinars = [
        {
            id: "1",
            image: "assets/images/webinar-digital-marketing.jpg",
            title: "Mastering Digital Marketing in 2025",
            date: "Tuesday, June 10, 2025 07:00PM – 08:00PM (GMT+5)",
            detail:
                "Join our expert-led webinar to explore the latest trends in digital marketing, including AI-driven campaigns, SEO strategies, and social media optimization. Perfect for business owners and marketing professionals looking to level up in 2025.",
        },
        {
            id: "2",
            image: "assets/images/webinar-cybersecurity.jpg",
            title: "Cybersecurity Essentials for Small Businesses",
            date: "Monday, June 9, 2025 - Wednesday, June 11, 2025",
            detail:
                "This 3-day webinar series focuses on building robust cybersecurity practices. Learn to protect your digital assets, prevent breaches, and create secure systems — all tailored for small business environments.",
        },
        {
            id: "3",
            image: "assets/images/webinar-ai.jpg",
            title: "AI & Machine Learning for Beginners",
            date: "Wednesday, June 11, 2025 05:00PM – 06:30PM (GMT+5)",
            detail:
                "Discover the fundamentals of Artificial Intelligence and Machine Learning in this beginner-friendly session. We’ll cover real-world applications, tools, and tips to help you start your journey into AI with confidence.",
        },
        {
            id: "4",
            image: "assets/images/webinar-remote-teams.jpg",
            title: "Managing Remote Teams Effectively",
            date: "Thursday, June 12, 2025 06:00PM – 07:00PM (GMT+5)",
            detail:
                "Learn best practices for leading remote teams, improving productivity, communication, and team culture. This webinar is ideal for managers adapting to hybrid or remote work environments in 2025.",
        },
        {
            id: "5",
            image: "/assets/images/webinar-finance.jpg",
            title: "Personal Finance Strategies for Young Professionals",
            date: "Friday, June 13, 2025 07:30PM – 08:30PM (GMT+5)",
            detail:
                "Gain expert tips on budgeting, saving, investing, and financial planning tailored for millennials and Gen Z professionals. Build a secure future with actionable advice from finance experts.",
        },
        {
            id: "6",
            image: "/assets/images/webinar-productivity.jpg",
            title: "Boost Your Productivity with Smart Tools",
            date: "Saturday, June 14, 2025 10:00AM – 11:00AM (GMT+5)",
            detail:
                "This session introduces smart tools and techniques to maximize your daily output. Learn to automate tasks, manage time better, and stay focused in the digital age. ",
        },
    ];


    return (

        <div className="home_offer_wrap row p-5">
            <section class="home_offer" id="blogs">
                <h1 class="heading">
                    Upcoming Live  <span>Webinars</span>
                </h1>

                <div class="box-container">
                    {webinars?.map((item) => {
                        return (
                            <div class="box" key={item?.id}>
                                <div class="image">
                                    <img src={item?.image} alt={item?.title} />
                                </div>
                                <div className="box-content">
                                    <div class="content">
                                        <h3>{item?.title}</h3>
                                        <p>{item?.detail}</p>
                                        <span className="mb-4">{item.date}</span>
                                    </div>
                                    <div className="btn btn-primary register-btn">
                                        Register Now
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </section>
        </div>
    );
};

export default Webinars;
