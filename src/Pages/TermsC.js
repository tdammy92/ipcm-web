import React from "react";
import { Container } from "@material-ui/core";
import directSig from "../assets/images/DirectorSig.png"
function TermsC() {
  return (
    <div className="base__page">
      <Container mx="auto">
        <div className="About__container">
          <div className="about__body">
            <h3 className="page__title">TERMS AND CONDITIONS OR REFUND POLICY</h3>

            <div className="Project__container">
              <div className="project__item">
                <p>
                Thank you for subscribing to our services on www.igpcm.com.ng or our social media handles operated by the Institute of Global Peace and Conflict Management.
                </p>

                <p>
                We offer full or partial refund on all purchases made via our website or social media handles. But under certain conditions, we encourage you to read through the conditions explained in more details below, in order to see the conditions that applies to your situation while following the right procedure.
                </p>

                <p>
                If you are unhappy with the service or product you purchased from us, please let's know. Our refund policy gives you 30 days to request for refund with the valid receipt of the service purchased.
                </p>

                <p>
                After the specified 30 Days, we will not offer you a refund or exchange. We encourage our clients to carry out adequate research on the service they want to purchase and try it within the stipulated period given after purchased. In situation whereby, you subscribed to a training program, it commencement was delayed beyond 30 days from the date you subscribed, adequate consideration will be given to affected persons as it regards refund.

                </p>

                <p>
                Note that, if you have subscribed to any of our training programs and you want to discontinue when the training has not started, you will get a full refund except the application fee.

                </p>
                <p>
                In a situation whereby the training has commenced, whether you participated or not, only 50% of the amount paid will be refunded, this excludes the application fee.
Refund that we require us to pay any charges, the client will shoulder the responsibility for the said charges.


                </p>


                <p>
                International and domestic participants subscribing for our programs through online payment platforms, will be responsible for the service charge applies by the fintech company.

                </p>

                <p>

                In a situation whereby, your payment has not been confirmed by our bank or receiving agent and you have been debited, you will be required to visit your bank for appropriate reversal.
                </p>

                <p>
                You can request for a refund by sending a request to info@igpcm.com.ng or chat us on WhatsApp through 08077987757.
                </p>
              </div>




              <div className="project__item" >

            <div  style={{display:'flex',flexDirection:'column',alignItems:'start'}}>

              <img src={directSig} alt="director signature" width={160} height={120}/>
              <strong>Tarhule Joshua Teryila</strong>
              <strong  style={{}}>
                <i >Director </i>
              </strong>

            </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default TermsC;