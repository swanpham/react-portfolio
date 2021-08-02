import Project from "../Project";

function Work() {
  const projects = [
    { 
      title: 'Random-eyes', 
      url: 'https://randomeyes.herokuapp.com/', 
      image: 'Capture.JPG', 
      description: 'Randomeyes is a contemporary MERN application that blends aspects of e-commerce sites like Amazon with dating apps like Bumble. Users “swipe” through high-quality products that are sure to amaze', 
      github: 'https://github.com/Brentsa/random-eyes', 
    },
    { 
      title: 'The Tech Blog', 
      url: 'https://swan-tech-blog.herokuapp.com/', 
      image: 'AdobeStock_435383639-min.jpg@360.jpg', 
      description: 'AS A developer who writes about tech. I WANT a CMS-style blog site SO THAT I can publish articles, blog posts, and my thoughts and opinions', 
      github: 'https://github.com/swanpham/the-tech-blog', 
    },
    { 
      title: 'Budget Tracker', 
      url: 'https://swan-budget.herokuapp.com/', 
      image: 'AdobeStock_219251301-min.jpg@360.jpg', 
      description: 'AS AN avid traveler I WANT to be able to track my withdrawals and deposits with or without a data/internet connection SO THAT my account balance is accurate when I am traveling', 
      github: 'https://github.com/swanpham/budget-tracker', 
    },
    
    { 
      title: 'Password-generator', 
      url: 'https://swanpham.github.io/password-generator/', 
      image: 'AdobeStock_330629156-min.jpg@360.jpg', 
      description: 'AS AN employee with access to sensitive data, I WANT to randomly generate a password that meets certain criteria SO THAT I can create a strong password that provides greater security', 
      github: 'https://github.com/swanpham/password-generator', 
    },  
    { 
      title: 'Note Taker', 
      url: 'https://swan-note-taker.herokuapp.com/', 
      image: 'AdobeStock_361043370-min.jpg@360.jpg', 
      description: 'AS A small business owner I WANT to be able to write and save notes SO THAT I can organize my thoughts and keep track of tasks I need to complete', 
      github: 'https://github.com/swanpham/note-taker', 
    },
    // { 
    //   title: 'Code Quiz', 
    //   url: 'https://swanpham.github.io/quizchallenge/', 
    //   image: 'AdobeStock_146861973-min.jpg@360.jpg', 
    //   description: 'AS A coding bootcamp student, I WANT to take a timed quiz on JavaScript fundamentals that stores high scores SO THAT I can gauge my progress compared to my peers', 
    //   github: 'https://github.com/swanpham/quizchallenge', 
    // },
    
    { 
      title: 'Weather Dashboard', 
      url: 'https://swanpham.github.io/weather-forecast/', 
      image: 'AdobeStock_222621601-min.jpg@360.jpg', 
      description: 'AS A traveler I WANT to see the weather outlook for multiple cities SO THAT I can plan a trip accordingly', 
      github: 'https://github.com/swanpham/weather-forecast', 
    },  
  ]
    return (
      <main>
        <h2>My Work</h2>     
        <div className="projects-wrap">
          { projects.map( ( project ) => (
            <Project title={ project.title} description={ project.description } url={ project.url } image={ project.image } github={ project.github } key={ project.title }/>
          ) ) }  
        </div>
      </main>
    );
}
  
export default Work;