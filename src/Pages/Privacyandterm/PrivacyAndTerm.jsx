import React, { useState, useEffect } from 'react'
import Navbar from '../../Components/Navbar'
import { Grid, Typography } from '@mui/material';
import privacy from "../../assets/number4.png"
import Faq from '../../Components/Faq';
import Footer from '../../Components/Footer';
import axios from 'axios';
function PrivacyAndTerm() {

  const [term, setTerm] = useState("");
  const [policy,setPolicy]=useState("");

  useEffect(() => {

    axios.get("http://192.168.10.18:3000/api/terms-and-conditions/resid-website").then((res) => {
      console.log(res.data)
      setTerm(res.data.data.attributes.content)
    }).catch(err => console.log(err))

    axios.get("http://192.168.10.18:3000/api/privacy-policys/resid-website").then((res) => {
      console.log(res.data)
      setPolicy(res.data.data.attributes.content)
    }).catch(err => console.log(err))

  }, [])
  return (
    <div>
      <Navbar />
      
      <Grid container spacing={2} style={{ marginBottom: "50px" }}>
      
        
        <Grid
          lg={12}
          md={12}
          sm={12}
          xs={12}

          style={{ paddingTop: 100, paddingLeft: "20px", paddingRight: "20px" }}
          className="about-header"
        >
          <div>
            <h1>Policy and term & Condition</h1>
          </div>
        </Grid>
      </Grid>

      <Grid
        container
        spacing={2}
        style={{
          padding: "0 100px",

          paddingBottom: "100px",
        }}
      >
        <Grid item lg={12} md={12} xs={12} sm={12} className="aboutus">
         
         <div dangerouslySetInnerHTML={{ __html: policy }} />

          <Typography style={{ marginTop: "30px" }}>
            The collection and processing of data from users of the site respects the following principles:

            Data can only be collected and processed with the consent of the user who owns the data. Each time personal data is collected, the user will be informed that their data is being collected, and for what reasons their data is being collected.
            The collection and processing of data is carried out to meet one or more objectives determined in these general conditions of use.
            Only the data necessary for the proper execution of the objectives pursued by the site are collected.
            The data is kept for an indefinite period, of which the user is informed.
            RESID+ is committed to guaranteeing the integrity and confidentiality of the data collected.
          </Typography>

          <h4 style={{ color: "#000" }}>Possible changes and updates to the Privacy Policy</h4>

          <Typography style={{ marginTop: "30px" }}>
            Due to possible developments in RESID+, this Privacy Policy may be subject to modifications or updates in the future.
            Use of our Platform after updating this Privacy Policy
            will be considered as constituting consent of the Persons concerned, to the updated or modified Privacy Policy to the extent

            re permitted by local law.
            RESID+ will inform the Data Subjects in advance in the event of substantial changes to the Privacy Policy by e-mail or by any other means ensuring its receipt.
            RESID+ will in no way modify its policies or practices to make them less effective in protecting the personal data of Data Subjects.


          </Typography>

          <h4 style={{ color: "#000" }}>Your rights regarding personal data</h4>

          <Typography style={{ marginTop: "30px" }}>
            You can exercise your rights free of charge at any time by using the form available on our main website (site and path), or via the application, by entering: (path). If you have any questions, you can write to the following address (email).
            You can exercise the following rights towards RESID+:

            The right of access to your personal data to know what data is processed and what processing operations are carried out;
            The right to correct any inaccuracies regarding your personal data;
            The right to erasure of your personal data, where possible: by sending us a data erasure request;
            The right to request restriction of processing of your personal data if the accuracy, legality or necessity of the processing of the data is in question, in which case we may retain the data for the purpose of lodging or responding to a complaint ;
            The right to request portability of your data to another service provider. We will give you a copy of your data so that you can provide it to another service provider. If you ask us to do so and it is technically possible, we will transfer the data directly to this other service provider on your behalf.
            The right to object to the processing of your data in order to resolve any questions you may have asked us via the contact form on the Website;
            If you are the User and do not wish to receive marketing communications, you have the right to unsubscribe from any marketing communication, by sending an e-mail or using the link provided for this purpose in each commercial communication.


          </Typography>

          <h4 style={{ color: "#000" }}>DATA PROCESSING OFFICER AND DATA PROTECTION OFFICER</h4>

          <Typography style={{ marginTop: "30px" }}>
            The person responsible for processing personal data is: ……………………..
            He can be contacted as follows:……………………………………..

            The data controller is responsible for determining the purposes and means used to process personal data.
            B. OBLIGATIONS OF THE DATA PROCESSOR
            The data controller undertakes to protect the personal data collected, not to transmit them to third parties to the rental contract without the user having been informed and to respect the purposes for which these data were been collected.
            In addition, the data controller undertakes to notify the user in the event of rectification or deletion of the data, unless this entails disproportionate formalities, costs and procedures for the user.
            In the event that the integrity, confidentiality or security of the user's personal data is compromised, the data controller undertakes to inform the user by any means.
            User data recovery
            We may collect information of various kinds. We need this information, in particular to allow the finalization of an account, a search for an account using your identification code, or payment information via our website or via our financial service providers. We collect, store and process your data to enable the proper use of the website. We may collect information on the registration form such as your name, email address, address, mobile phone number.
            Use of user data:
            We store and process your information on servers protected by technological and human security devices. We may pass your contact details to a third party in order to carry out delivery of the order. We may also use your data to detect possible abuse or fraud, send you information about the website or our products. We may use your personal information for reviews and market research. Your data is anonymous and will only be used for statistical purposes
            RESID+ collects your address and may use it for commercial purposes. We will not share any of your personal information with third parties without your explicit consent. Likewise, we do not sell or rent your personal information to third parties for marketing purposes without your explicit consent. If you prefer not to receive any information


          </Typography>


        </Grid>

        <Grid item lg={12} md={12} xs={12} sm={12} className="aboutus">
          
          <div dangerouslySetInnerHTML={{ __html: term }} />

          {/* <Typography>
            These general conditions of use constitute contractual clauses applicable to any user on the website and the application. The terms “you” and “user” mean the end user accessing the Website and the Application. The personal pronoun “we” refers to RESID+. The term “site” means ……...com.
            Object
            RESID+ is a technology company whose main activity is the development and management of a technology platform through which local homeowners can offer their products on the APPLICATION. In any case, RESID+ is only a simple intermediary and, therefore, its sole responsibility and task is to manage the APPLICATION which facilitates contact between the User and the Residence Owner. RESID+ is in no way responsible for the products and/or services offered via the APPLICATION.
            By accessing the Site and/or the APPLICATION and voluntarily creating a profile, all Users expressly and unambiguously acknowledge and accept these General Conditions, as well as the Confidentiality Policy and the Cookies Policy available online . Any User who does not agree with said General Conditions and/or Policies will refrain from using them.
            Access to the application
            The site is accessible free of charge from anywhere by any user with an internet connection through their web address or via their mobile application. Memberships and subscriptions to packages are reserved for previously registered members. Here are listed the basic requirements for registration:
            the User must be at least 18 years old;
            The User must be capable;
            The User must faithfully complete the mandatory fields of the registration form requesting personal data such as the User's name, email address, telephone number;
            The User must carefully read these General Conditions when accessing the APPLICATION;
            Users must accept the privacy policy.
          </Typography>

          <Typography style={{ marginTop: "30px" }}>
            When registering on the APPLICATION, Users must choose a username and password. The username and password are strictly confidential, personal and non-transferable. In any case, RESID+ does not guarantee the security of the account or profile.
            To complete their registration on the APPLICATION, the User must provide certain information, such as: user name, email address, telephone number and credit card details, among others. Once the registration procedure is completed, the User will be able to access their profile, complete it and modify it as they deem appropriate.
            The user has the ability to be both customer and owner.
            Obligations and responsibilities of the User
            The User is entirely responsible for the correct use and access to his profile and other contents of the APPLICATION in accordance with the legislation in force, of the country from which he uses the APPLICATION, as well as the principles of good faith, morality, generally accepted customs and public order. In particular, it undertakes to scrupulously respect these General Conditions of Use.
            The User is the sole owner of the content he has entered on the APPLICATION. RESID+ cannot be considered as having editorial responsibility and it expressly declares that it is not identified with any of the opinions that may be expressed by Users of the APPLICATION, the consequences of which are the sole responsibility of their respective issuers.
            The User must never use his profile or other contents of the APPLICATION for illegal purposes, or with illegal results that would harm the rights or interests of a third party, or that could in any way damage, disable , affect or damage the APPLICATION or its contents or services. In addition, he will be prohibited from hindering the normal use or enjoyment of the APPLICATION by other Users.
            Any person who fails to comply with the above obligations will be liable for any loss or damage caused. RESID+ declines all responsibility for the consequences, losses or damage that may result from such illegal use or access by a third party.
            In general, by way of example, without limitation, the User undertakes to:
            not modify or alter the APPLICATION, in whole or in part, by circumventing, disabling or otherwise altering its functions or services;
            not infringe industrial or intellectual property rights, nor legislation relating to the protection of personal data;
            do not use the APPLICATION to insult, defame, intimidate r or harass other Users or attack their image;
            not access another User’s email accounts;
            not introduce a computer virus, corrupted file or any other software that could cause damage or alteration to the content or systems of RESID+ or a third party;
            not send bulk and/or recurring emails to a large number of people, nor send third party email addresses without their consent;
            not advertise goods or services without the prior consent of RESID+.

          </Typography>

          <Typography style={{ marginTop: "30px" }}>
            Any User may report another User if he or she considers that the latter is not complying with these General Conditions. Likewise, any User may report to RESID+ any abuse or violation of these conditions through the Help section of the APPLICATION. RESID+ will verify these reports as soon as possible and take all measures it deems appropriate, reserving the right to remove and/or suspend any User from the APPLICATION for violation of these General Conditions. In addition, RESID+ reserves the right to delete and/or suspend any message with illegal or offensive content without prior warning or subsequent notification.
            Users are solely responsible for their actions carried out in the rented residences.
            RESID+ may suspend a customer's account for any legitimate reason, in particular in the event that:
            The user does not respect the General Conditions in force;
            One of the user's previous payments is the subject of a pending dispute;
            The images of the residence do not correspond to reality;
            When the residence does not exist;
            When the client makes a use of the residence other than that for which it is intended;
            In case of repeated bad grades;
            The user did not respond to a confirmation request.
            The information communicated by a user is binding on the user. Thus, RESID+ cannot be held responsible in any way in the event of an error during the payment process.

          </Typography>

          <h4 style={{ color: "#000" }}>User Reviews</h4>

          <Typography style={{ marginTop: "30px" }}>
            RESID+ may collect customer reviews regarding certain Owners and/or the products or services they offer. Also, customer reviews will be requested from the owners. RESID+ reserves the right to publish said reviews in the APPLICATION and make them available to any other User, identifying them by the first name of the User who wrote the review, all in accordance with the RESID+ Privacy Policy .
            Users via the APPLICATION will be asked to provide said notice, only in case they have placed an order via the APPLICATION to the concerned Owner. The provision will nevertheless be entirely voluntary for the User who will submit it or not. By submitting a review, the User accepts its collection and publication, if this is the case, by RESID+.
            The duration of notices can be limited by a certain number of characters. In addition, the User undertakes to leave only relevant reviews, and which are in no way offensive, abusive, false, discriminatory, etc. whether for the Owner or for any other User or Agent. RESID+ reserves the right to filter reviews in accordance with article 8 of these General Conditions and to delete any review that does not comply with these General Conditions or which may be considered offensive or contrary to the law and public order.
            PAYMENT
            RESID+ takes a margin of 3% on each stay. After booking, the customer confirms payment when assured of the reliability and accuracy of the existence of the residence. Otherwise, his reservation will be returned to him within 24 hours of cancellation.
            Unsubscription and cancellation of the user's account
            Users can voluntarily unsubscribe from the APPLICATION using the Section…………
            Furthermore, RESID+ reserves the right to suspend and/or cancel Users' accounts in the APPLICATION in the event that it becomes aware that it has ceased to comply with all basic requirements for registration as well as in the event of reasonable suspicion of fraudulent or illicit use, including use of the User account in a manner contrary to these General Conditions.
          </Typography>
          <h4 style={{ color: "#000" }}>Accuracy of user data</h4>
          <Typography style={{ marginTop: "30px" }}>
            You certify that you are the owner of the content you submit to us and that the content does not infringe any intellectual property rights or other rights. You also certify that, to the best of your knowledge, no action, suit, proceeding, or investigation has been initiated or threatened against you in relation to the content you submit, in particular when it concerns a trademark or 'a trade name. You undertake to provide accurate information regarding their contact details.

            personal data as well as any other information necessary for access to the Website Services and to regularly update this information if necessary, this information being protected in accordance with applicable regulations.
            You undertake to provide accurate information regarding personal contact details as well as any other information necessary for access to the services of the Website and to regularly update this information if necessary, this information being protected in accordance with applicable regulations. You certify that you are the owner of the content you submit to us and that the content does not infringe any intellectual property rights or other rights. You also certify that, to the best of your knowledge, no action, suit, proceeding, or investigation has been initiated against you in relation to the content you submit, in particular when it concerns a trademark or trademark. trade name.
            Intellectual property
            RESID+ is the owner or holder of all intellectual and industrial property rights relating to the software and the APPLICATION, as well as to the content to which it is possible to access, which is uploaded to the APPLICATION by RESID+ and/or in his name. The intellectual property rights, as well as the texts, images, graphic design, navigation structure, information and content included therein are the property of RESID+, which has the exclusive right to exploit the rights of in any manner whatsoever, in particular the rights of reproduction, distribution, publication and transformation, in accordance with Ivorian legislation on intellectual and industrial property.
            Content uploaded to the APPLICATION by or on behalf of a third party, including Users and owners, remains their exclusive property; therefore, they are entirely responsible for any damage, obtained and/or liability that may arise directly or indirectly from the content downloaded by them and/or on their behalf.
          </Typography>

          <h4 style={{ color: "#000" }}>Termination</h4>

          <Typography style={{ marginTop: "30px" }}>
            RESID+ may suspend or terminate your account or any element if it believes that you have not complied with any of these conditions. If you or RESID+ terminates your account, we may delete any content or materials relating to your use of RESID+.
            The user can request the deletion of their account by sending their termination letter to the following address:…………..
          </Typography>

          <h4 style={{ color: "#000" }}>Responsibility of RESID+</h4>
          <Typography style={{ marginTop: "30px" }}>
            RESID+ has endeavored to ensure that all information on the Website is correct, but does not guarantee the quality, accuracy or completeness of any data, information, products or services. Under no circumstances will we be held responsible for:
            Direct, indirect, consequential or resulting damage from the use or inability to use the services;
            Alteration of data transmissions (for example when the user sees the words 404, 501 etc. displayed on the site)
            In the event of non-return of reservation fees after cancellation of payment for non-existence or inaccuracy of the residence at the rented base.
          </Typography>

          <h4 style={{ color: "#000" }}>Applicable right</h4>
          <Typography style={{ marginTop: "30px" }}>
            These conditions are governed in accordance with the laws of the country of operation of RESID+.
            Edit
            This privacy policy may be subject to change at any time (include/exclude clauses). Protecting your privacy is an important principle for us. We collect information for purposes necessary for the proper use of the website. By submitting data to RESID+, you consent to our use of your data in the manner provided for in this Privacy Policy. You can visit and navigate certain pages of RESID+ without having to provide personal information.
          </Typography>

          <h4 style={{ color: "#000" }}>Access to user data</h4>
          <Typography style={{ marginTop: "30px" }}>
            You can access your primary data by logging into your account on the website or mobile app.
            Independence of clauses
            These contractual clauses are independent of each other, the nullity of one does not entail nullity of this contract.
          </Typography> */}

        </Grid>

        <Grid item lg={12} md={12} xs={12} sm={12} className="aboutus">
          <h1 style={{ color: "#000" }}>Faq</h1>
          <Faq />
        </Grid>
      </Grid>

      <Footer />
    </div>
  );
}

export default PrivacyAndTerm