import resume from '../../assets/pdf/Document1.pdf'
import { GrDocumentDownload } from 'react-icons/gr'


function Resume() {
    return (

      <main >
        <nav>
          
            <ul className="resume-form">
              <h2 className="contact-resume">CONTACT</h2>             
                            
              <h3 >
                Phone: <a href="tel://9056141008" >905 614 1008</a>
              </h3>
              <h3>
                Email: <a href="mailto://swan@nailsrus.ca">swan@nailsrus.ca</a>
              </h3>
              <h3>
                Linkedin:<a href="https://www.linkedin.com/in/swan-pham-9428aa206/">linkedin</a>
                                
              </h3>
              <h3>
                Github:<a href="https://github.com/swanpham/portfolio">github</a>                                
              </h3>   

              <h2 className="contact-resume">SKILLS</h2> 
              <h3>SAGE Accpac</h3>
              <h3>Financial Accounting</h3>
              <h3>Payroll Managerment</h3>
              <h3>Account Managerment</h3>
              <h3>Financial Statements and Bookkeeping</h3>
                 
              <h2 className="contact-resume">EDUCATION</h2>
              <h3>Business Managerment Bachelor Degree</h3>
              <h3>Accounting Managerment Bachelor Degree</h3>

              <h2 className="contact-resume">WORK EXPERIENCE</h2>
              <h3 className="work-experience">I work as an experienced professional over 10 years in Sage ERP Accpac. A very self-motivated, hard-working, and ready to take on any challenge. Have great communication skills and enjoy helping others in any way possible</h3>

            
            </ul>
            <div className="resume-link">
              <a  href={ resume } download><GrDocumentDownload />Download PDF</a>
            </div>
          </nav>        
        </main >
    );
  }
  
  export default Resume;