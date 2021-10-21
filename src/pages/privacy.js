import React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"


const Privacy = () => {
  return (
    <Layout style={{ zIndex: 1 }}>
      <Seo title="Home" />
      <div
      style={{
          display: 'flex',
          flexDirection:'column',
          alignItems:'center'
      }}
      >
          <h1>PRIVACY POLICY</h1>
          <p>Action App respects your privacy. We do not sell or rent your personal information to third parties. We use your information to enhance our relationship and communication only with you . At any time you may contact Action App with any questions or concerns that you have about this policy. Please direct any Privacy Policy-related communication to zmmeyer44@gmail.com</p>

          <h2>PERSONAL INFORMATION</h2>
          <p>Action App will not sell or rent your personal information (includes email & phone) to a third party. All data that we keep on you is kept strictly for Action App business use to assist you in your current or future purchases.</p>

          <h2>COOKIES AND IP NUMBERS</h2>
          <p>Action App's privacy policy shows our firm commitment to customer privacy. We use your IP address to help diagnose problems with our server, and to administer our Web site. Your IP address is used to help identify you and your shopping cart and to gather broad demographic information. Our site uses cookies to keep track of your shopping cart.</p>
          <p>We may use cookies for other purposes such as site personalization. You can reject cookies and still use the Action App site, however, it will disable the ability for the site to recognize your cart, your account and any personalization efforts.</p>

          <h2>EXTERNAL LINKS</h2>
          <p>This site contains links to other sites. Action App is not responsible for the privacy practices or the content of other web sites.</p>

          <h2>USER CONTENT</h2>
          <p>Any comments, posts, feedback, questions, answers, notes, messages, images, video, audio, materials, ideas, suggestions or other communications you submit on Action App are not private or proprietary. By submitting User Content on or through the Action App, you grant Action App an irrevocable, royalty-free, worldwide, perpetual right and license to use, copy, modify, display, archive, store, distribute, reproduce and create derivative works based upon such User Content, in any form, media, software or technology of any kind now existing or developed in the future.</p>
    
    <h2>SECURITY & ME?</h2>
    <p>We do our best to protect the security of your information during transmission by using Secure Sockets Layer (SSL) software, which encrypts information you input.

We reveal only the last five digits of your credit card numbers when confirming an order. Of course, we transmit the entire credit card number to the appropriate credit card company during order processing.

It is important for you to protect against unauthorized access to your password and to your computer. Please sign off when finished using a shared computer.</p>
      
      <h2>INFORMATION SHARING</h2>
      <p>Action App will not sell or rent your personal information to a third party. We sometimes employ other companies and individuals to perform functions on our behalf. For example, hosting our website, providing marketing assistance, etc. These third parties have access only to personal information needed to perform these functions, but may not use it for other purposes and they are required to maintain the confidentiality of your information.</p>
      </div>
    </Layout>
  )
}

export default Privacy