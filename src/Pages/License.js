import React from "react";
import QuestionMan from "../assets/images/Thinking Man.png";
import { Container } from "@material-ui/core";
function License() {
  return (
    <div className="base__page">
      <Container mx="auto">
        <div className="About__container">
          <div className="about__body">
            <h4 className="page__title">PCM License</h4>
            <div className="License__wrapper">
              <div className="license__item">
                <div className="licence__image" data-aos="fade-right">
                  <img src={QuestionMan} alt="Thinking man" />
                </div>

                <div className="licence__question" data-aos="flip-down">
                  <p data-aos="fade-down">
                    Are you a peace building and conflict management
                    practitioner ?
                  </p>

                  <p data-aos="fade-left">
                    Are you interested in pursuing a consultancy career in
                    peacebuilding and conflict resolution ?
                  </p>

                  <p data-aos="fade-up">
                    Are you running or intending to run a peacebuilding and
                    conflict management NGO, CSO, CBO etc organization and
                    needed a professional touch?
                  </p>
                </div>
              </div>

              <div className="cta__Goodnews">
                <p className="goodnews__title">Here is a good news for you!</p>
                <p>
                  Earn a peace building and conflict management practitioner
                  License as an Individual or organization to boost your peace
                  building career or consultancy profile.
                </p>
              </div>
              <div className="benefit__container">
                <h4>BENEFITS OF OBTAINING A PCM LICENSE</h4>

                <ul className="benefit">
                  <li>
                    Get admitted at the level of Associate or Full Member if you
                    are not already a member.
                  </li>
                  <li>
                    Get your company or organization admitted as corporate
                    member at a discounted rate.
                  </li>

                  <li>
                    Access to information on grant opportunities for your
                    organization
                  </li>
                  <li>
                    Learn grant proposal writing skills and get a grant winning
                    template
                  </li>
                  <li>
                    Access to E-books and relevant materials to help your
                    organization’s research activities.
                  </li>
                  <li>
                    Get networking opportunities through the institute partners
                    and recommendation.
                  </li>
                </ul>
              </div>

              <div className="bank__details" id="bankDetails">
                <h3>IGPCM Accountant Details</h3>

                <p>
                  Account Name:
                  <strong>
                    Institute of Global Peace and Conflict Management
                  </strong>
                </p>
                <p>
                  Account Number:
                  <strong>0645754697</strong>
                </p>
                <p>
                  Bank:
                  <strong>Guaranty Trust Bank</strong>
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default License;
