import React from 'react'
import Navbar from '../Navbar/Navbar'
import { Footer } from '../Footer/Footer'

const Privacy = () => {
    return (
        <div>
            <Navbar />
            <div
          className='terms-div'>
                <h1
                style={{
                marginTop:'4em',
                fontWeight: 'bolder'
                }}>Passcoder Privacy Policy</h1>
           <p
           className='terms-p'>
              Passcoder Limited has adopted standard privacy protection mechanisms for its users. We are
committed to the informed collection of personal information for legitimate and lawful purposes
and use. Passcoder Limited commits to processing data lawfully, fairly, in a transparent manner
and in accordance with the relevant data protection regulations. Personal information collected
will be processed based on the consent provided, for the performance of a contract or to enter
into the contract or in relation to the intended use, and in furtherance of Passcoder’s legitimate
business interest or in compliance with a mandatory legal obligation.


           </p>
           <p> Please read the following to learn more about our privacy policy.
    </p>
    <br />
    <br />
           <h3>PERSONAL INFORMATION</h3>
           <br />
           <li>Our site’s registration form requires you to give us contact information like your name
and email address.</li>
<li>
We collect personal information from our customers on a voluntary basis. Personal
information may include name, title, company, address, phone number, email address,
and only strictly relevant data.
</li>
<li>
We collect and use personal information for business purposes in order to:
</li>

           <li className='terms-p'
           style={{
            marginLeft:'1em'
           }}>
            *Evaluate general customer demands/request in a bid to improve service delivery
           </li>

           <li className='terms-p'
           style={{
            marginLeft:'1em'
           }}>
          *Collate your feedback or to contact you in relation to those services offered by us. </li>

           <li className='terms-p'
           style={{
            marginLeft:'1em'
           }}>
        *Carry out our obligations pursuant to the terms of service.   </li>

           <li className='terms-p'
           style={{
            marginLeft:'1em'
           }}>
         *Anticipate and resolve problems with any goods or services supplied to you.
           </li>


           <li className='terms-p'
           style={{
            marginLeft:'1em'
           }}>
        *Create products or services that may meet your special needs.
         </li>


         <li className='terms-p'
           style={{
            marginLeft:'1em'
           }}>
     *Process and respond to requests, improve our operations, and communicate with our
customers about our products, services and business    </li>




           <h3>DISCLOSURE</h3>
           <p className='terms-p'>
           Passcoder may share personal information with partners or agents involved in the delivery and
optimization of its products, services, and business operations. We do not sell or disclose
information that individually identifies you outside of Passcoder and its affiliate companies.
Your personal information may only be shared with a relevant 3 rd party in the following
circumstance:
    
           </p>

           <li className='terms-p'
           style={{
            marginLeft:'1em'
           }}>
       You have given express or implied consent    </li>


           <li className='terms-p'
           style={{
            marginLeft:'1em'
           }}>
      Performance of a requested service is hinged on disclosure   </li>


           <li className='terms-p'
           style={{
            marginLeft:'1em'
           }}>
          To conform with any legal obligation or upon request from regulatory or security
governmental agencies for investigation.  </li>


           <li className='terms-p'
           style={{
            marginLeft:'1em'
           }}>
        It is necessary to protect the interests of Passcoder, its affiliates, or its members,
constituents or of other persons..  </li>
           <p className='terms-p'>
           To ensure that personal data is not kept for longer than necessary, Passcoder Limited shall put in
place a policy on data retention, archiving and destruction for each location in which personal
data is processed.
    
    
           </p>
           <h3>SECURITY</h3>
           <p className='terms-p'>
           In line with the provisions of the Nigerian Data Protection Regulation 2019, Passcoder Limited
is committed to implementing data security measures and standard procedures appropriate to the
degree of sensitivity of the personal data in order to protect against malicious intrusion, loss,
alteration or disclosure to non-authorized third parties, for the purpose of securing personal
information. In the event that, despite the security measures we implement to protect
information, it is accessed by unauthorized third parties, Passcoder shall report the breach to the
relevant agency as appropriate.
We periodically update our privacy policy. Such updates shall become effective immediately
upon publication of the revised Privacy Policy. If we change the way we use or disclose
information that identifies you in a way that is materially different from what was stated in our
privacy policy at the time the information was collected, you will be given an opportunity to
update your choices about the new use or disclosure.
           </p>
           <h3>LEGAL JURISDICTION</h3>
           <p className='terms-p'>
           This Privacy and Data Protection Policy shall be governed and construed in accordance with the
relevant laws of the Federal Republic of Nigeria and the Nigerian Courts shall have exclusive
jurisdiction on all matters related thereto.
           </p>
    
          
      
            </div>
            <div>
    
            </div>
        
        
            <Footer />
        </div>
      )
}

export default Privacy