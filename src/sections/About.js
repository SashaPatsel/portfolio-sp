import React from "react"

const About = (props) => (
<section className="about" id="about">
        <h3 className="about__heading-main">About Me</h3>

        <img src="./assets/images/pro-portrait.jpg" className="about__portrait" />

        <div className="about__blrb">
          <p>
            I am a full-stack software engineer specializing in Javascript.
        </p>

          <p>
            I graduated from Clark University in 2017 with a Master's degree in Public Administration, where I led a team writing a comprehensive
            report documenting evidence-based solutions to Worcester, MA's opiod epidemic. The project was commisioned by Worcester
            County District Attorney Joe Early.
        </p>

          <p>
            Following my graduation, I began work in the California State Senate as a Field Representative, meeting with local leaders
            and constituents alike on behalf of Senator Bill Monning. Around the same time though, I began to teach myself to
            write code. To my surprise, I found that I loved it... So much so that I quickly realized I was working in the wrong
            industry. Shortly after, I left the State Senate and formalized my education in software engineering at UC Berkeley
            Extension, where I currently work.
        </p>

          <p>
            My experience at the UC Berkeley software engineering program was one of the best learning experiences of my life, so I was
            thrilled to be asked to join the teaching staff at the course's completion.
        </p>

          <p>
            Since joining the teaching staff, my responsibilites have expanded. I currently tutor in one-on-one sessions, lead breakouts
            on specific topics, guide students as they work through challenging engineering problems, advise on best-practices
            and develop&nbsp;
        <a href="https://github.com/SashaPatsel/coding-drills" target="_blank">orginal coding exercises</a> designed to enhance students abilities.
        </p>

          <p>
            As a software engineer, I like to think of myself as a Swiss Army Knife. My time teaching others to code has had an enormous
            impact on my own abilities, as I've found helping others learn concepts is often the best way to truly understand
            them. Having to constantly go back to review and teach different topics always keeps me on my toes. 
        </p>


          <p className="about__blrb--sig">- Sasha Patsel</p>



        </div>


        </section>
)

export default About;