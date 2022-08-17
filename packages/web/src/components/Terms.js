import React, { useEffect } from 'react';

import { useTailwind } from '.';
import TopBar from './TopBar';
import Footer from './Footer';

const Terms = () => {

  const tailwind = useTailwind();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <React.Fragment>
      <div className={tailwind('pt-6')}>
        <TopBar />
        <div className={tailwind('relative overflow-hidden py-16')}>
          <div className={tailwind('hidden lg:absolute lg:inset-y-0 lg:block lg:h-full lg:w-full')}>
            <div className={tailwind('relative mx-auto h-full max-w-prose text-lg')} aria-hidden="true">
              <svg className={tailwind('absolute top-12 left-full translate-x-32 transform')} width="404" height="384" fill="none" viewBox="0 0 404 384">
                <defs>
                  <pattern id="74b3fd99-0a6f-4271-bef2-e80eeafdf357" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                    <rect x="0" y="0" width="4" height="4" className={tailwind('text-gray-200')} fill="currentColor" />
                  </pattern>
                </defs>
                <rect width="404" height="384" fill="url(#74b3fd99-0a6f-4271-bef2-e80eeafdf357)" />
              </svg>
              <svg className={tailwind('absolute top-1/2 right-full -translate-y-1/2 -translate-x-32 transform')} width="404" height="384" fill="none" viewBox="0 0 404 384">
                <defs>
                  <pattern id="f210dbf6-a58d-4871-961e-36d5016a0f49" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                    <rect x="0" y="0" width="4" height="4" className={tailwind('text-gray-200')} fill="currentColor" />
                  </pattern>
                </defs>
                <rect width="404" height="384" fill="url(#f210dbf6-a58d-4871-961e-36d5016a0f49)" />
              </svg>
              <svg className={tailwind('absolute bottom-12 left-full translate-x-32 transform')} width="404" height="384" fill="none" viewBox="0 0 404 384">
                <defs>
                  <pattern id="d3eb07ae-5182-43e6-857d-35c643af9034" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                    <rect x="0" y="0" width="4" height="4" className={tailwind('text-gray-200')} fill="currentColor" />
                  </pattern>
                </defs>
                <rect width="404" height="384" fill="url(#d3eb07ae-5182-43e6-857d-35c643af9034)" />
              </svg>
            </div>
          </div>
          <div className={tailwind('relative px-4 sm:px-6 lg:px-8')}>
            <div className={tailwind('mx-auto max-w-prose')}>
              <h1 className={tailwind('mt-2 block text-center text-3xl font-extrabold leading-8 tracking-tight text-gray-900 sm:text-4xl')}>Terms of Service</h1>
            </div>
            <div className={tailwind('prose mx-auto mt-10 text-gray-500')}>
              <p>Last updated: 29 Jul 2022</p>
              <h3>Intro</h3>
              <p>By accessing, browsing and/or using our website(s) (each, a "Site" and collectively, the "Site(s)"), downloading, installing and/or using any mobile device software application owned, controlled or offered by <a href="https://www.stxapps.com" target="_blank" rel="noreferrer">STX Apps Co., Ltd.</a> (each an "App" and collectively, the "App(s)"), or accessing, browsing and/or using any other mobile or web services owned, controlled or offered by STX Apps Co., Ltd. (the Site(s), the App(s) and any such other services (collectively, the "Service")), you acknowledge that you have read and understood and agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, then please cease using the Service immediately and you must uninstall the App(s) from any device owned or controlled by you. STX Apps Co., Ltd. ("STX Apps") reserves the right to change these Terms at any time. We recommend that you periodically check the Site(s) for changes. By accessing, browsing and/or using any Service after these updates to these Terms have been posted, you agree to be bound by the updated Terms. THESE TERMS CONSTITUTE A BINDING AGREEMENT BETWEEN YOU AND STX APPS. In addition, the STX Apps Privacy Policy governs your access to and use of the Service and the processing of certain information about you.</p>
              <h3>Rights to use the service</h3>
              <p>Subject to your compliance with these Terms in all material respects, STX Apps grants you a limited, non-exclusive, non-transferable, non-sublicensable, revocable license to (i) access and view pages from the Service for your personal, non-commercial use only; and (ii) print a reasonable number of such pages for your personal, non-commercial use only. Your access to and use of the Service must further comply in all material respects with any instructions and guidelines ("Guidelines") posted on the Site(s) and/or communicated through the App(s).</p>
              <p>Subject to your compliance with these Terms in all material respects, STX Apps further grants you a limited, non-exclusive, non-transferable, non-sublicensable, revocable license to install and use the App(s), in machine executable object code form only, on a single compatible personal mobile device that you own and control, solely for personal, non-commercial purposes. Your license to any App(s) is also governed by the applicable terms of service, policies and procedures of the App Store through which you download the App(s) (the "App Store Terms"). These Terms amend and supplement the applicable App Store Terms and to the extent that these Terms contradict or are inconsistent with the applicable App Store Terms, the App Store Terms control and prevail. You are authorized to download the App(s) solely via the App Stores, if any, through which we make them available for download. You acknowledge that by downloading an App(s) via an App Store, you are subject to the applicable App Store Terms.</p>
              <p>STX Apps reserves the right to terminate or suspend your license to use all or any portion of the Service and your other rights under these Terms at any time and for any reason, including, but not limited to, violation of these Terms, the Guidelines and/or any applicable App Store Terms. Upon such termination, all license and other rights granted to you under these Terms will immediately terminate, but all other provisions of these Terms will survive termination. You will immediately cease all use of the Service and remove and destroy all copies of the App(s) from your mobile devices.</p>
              <h3>No warranty and limitation of liability</h3>
              <p>STX APPS PROVIDES THE SITE(S), THE APP(S) AND THE OTHER SERVICE ON AN "AS IS", "WITH ALL FAULTS" AND "AS AVAILABLE" BASIS. STX APPS AND ITS PARENTS, SUBSIDIARIES AND AFFILIATES, AND EACH OF THEIR OFFICERS, DIRECTORS, EMPLOYEES, AGENTS, PARTNERS AND LICENSORS (THE "STX APPS PARTIES") DISCLAIM ALL WARRANTIES AND CONDITIONS OF ANY KIND, WHETHER EXPRESS, IMPLIED OR STATUTORY, OR ARISING FROM STATUTE, COURSE OF DEALING, USAGE OF TRADE OR OTHERWISE, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, NON-INFRINGEMENT, INTEGRATION, INTEROPERABILITY OR QUIET ENJOYMENT. THE STX APPS PARTIES MAKE NO REPRESENTATIONS OR WARRANTIES ABOUT THE ACCURACY OR COMPLETENESS, CURRENCY, OR NON-INFRINGEMENT OF THE SERVICE OR OF THE INFORMATION OR OTHER CONTENT CONTAINED IN OR ACCESSIBLE THROUGH THE SERVICE. THE STX APPS PARTIES DO NOT WARRANT THAT THE FUNCTIONS OF THE SERVICE WILL BE UNINTERRUPTED OR ERROR-FREE, THAT DEFECTS WILL BE CORRECTED, OR THAT THE SERVICE OR THE SERVERS THAT MAKE THE SERVICE AVAILABLE WILL BE FREE OF VIRUSES OR OTHER HARMFUL COMPONENTS. SOME JURISDICTIONS DO NOT ALLOW THE DISCLAIMER OF IMPLIED WARRANTIES, SO THE FOREGOING DISCLAIMER MAY NOT APPLY TO YOU.</p>
              <p>YOU UNDERSTAND AND AGREE THAT YOU USE THE SERVICE AT YOUR OWN DISCRETION AND RISK AND THAT YOU WILL BE SOLELY RESPONSIBLE FOR ANY DAMAGES THAT ARISE FROM SUCH USE. UNDER NO CIRCUMSTANCES SHALL THE STX APPS PARTIES BE LIABLE FOR ANY INDIRECT, SPECIAL, INCIDENTAL, CONSEQUENTIAL OR PUNITIVE DAMAGES OF ANY KIND, OR ANY OTHER DAMAGES WHATSOEVER (HOWEVER ARISING, INCLUDING BY NEGLIGENCE), INCLUDING WITHOUT LIMITATION, DAMAGES RELATED TO USE, MISUSE, RELIANCE ON, INABILITY TO USE AND INTERRUPTION, SUSPENSION, OR TERMINATION OF ANY OF THE SERVICE AND DAMAGES RESULTING FROM LOSS OF USE OR DATA, WHETHER OR NOT THE STX APPS PARTIES HAVE BEEN ADVISED OF SUCH POSSIBILITY AND REGARDLESS OF WHETHER SUCH DAMAGES WERE FORESEEABLE. YOUR ONLY RIGHT WITH RESPECT TO ANY DISSATISFACTION WITH THE SERVICE SHALL BE TO TERMINATE YOUR USE OF THE SERVICE. IN NO EVENT SHALL THE STX APPS PARTIES’ TOTAL LIABILITY TO YOU FOR ALL CLAIMS ARISING UNDER THESE TERMS OR YOUR USE OF THE SERVICE EXCEED THE TOTAL AMOUNT PAID BY YOU TO STX APPS FOR USE OF THE SERVICE DURING ANY ONE MONTH. SOME JURISDICTIONS DO NOT ALLOW THE EXCLUSION OF LIABILITY FOR INCIDENTAL OR CONSEQUENTIAL DAMAGES, SO THE ABOVE EXCLUSIONS MAY NOT APPLY TO YOU.</p>
              <p>YOU UNDERSTAND THAT YOUR USE OF THE SERVICE MAY INVOLVE KNOWN AND UNANTICIPATED RISKS THAT COULD RESULT IN INJURY OR ILLNESS, INCLUDING, BUT NOT LIMITED TO, DANGERS THAT MAY BE CAUSED BY THE ACTS OR INTENTIONS OF OTHER USERS OR OTHER THIRD PARTIES (INCLUDING WITHOUT LIMITATION, REGARDING ANY CONTENT (FOR EXAMPLE, INAPPROPRIATE OR EXPLICIT CONTENT) THAT YOU, ANOTHER USER OR A THIRD PARTY POSTS, STORES, SHARES, SENDS, TRANSMITS, DISSEMINATES, OR RECEIVES THROUGH THE SERVICE), OR OCCURRENCES BEYOND THE CONTROL OF THE STX APPS PARTIES. BY USING THE SERVICE, YOU ASSUME ALL SUCH RISKS AND DANGERS AND ALL RESPONSIBILITY FOR ANY LOSSES AND/OR DAMAGES. YOU VOLUNTARILY RELEASE, WAIVE, DISCHARGE AND HOLD HARMLESS THE STX APPS PARTIES FROM ANY AND ALL CLAIMS, DEMANDS OR CAUSES OF ACTION FOR BODILY INJURY, PROPERTY DAMAGE, WRONGFUL DEATH, LOSS OF SERVICE OR OTHER CLAIMS THAT IN ANY WAY ARISE FROM OR ARE RELATED TO YOUR USE OF THE SERVICE. THE SERVICE IS INTENDED ONLY AS PERSONAL, GEOGRAPHIC LOCATION-BASED SERVICE FOR INDIVIDUAL USE. YOU ACKNOWLEDGE AND AGREE THAT STX APPS HAS OFFERED THE SERVICE, SET ITS PRICES, AND ENTERED INTO THESE TERMS IN RELIANCE UPON THE FOREGOING WARRANTY DISCLAIMERS AND THE LIMITATIONS OF LIABILITY. YOU FURTHER ACKNOWLEDGE AND AGREE THAT THE WARRANTY DISCLAIMERS AND THE LIMITATIONS OF LIABILITY SET FORTH IN THESE TERMS REFLECT A REASONABLE AND FAIR ALLOCATION OF RISK BETWEEN YOU AND STX APPS, AND THAT THE WARRANTY DISCLAIMERS AND THE LIMITATIONS OF LIABILITY SET FORTH IN THESE TERMS FORM AN ESSENTIAL BASIS OF THE BARGAIN BETWEEN YOU AND STX APPS. STX APPS WOULD NOT BE ABLE TO PROVIDE THE SERVICE TO YOU ON AN ECONOMICALLY REASONABLE BASIS WITHOUT THESE LIMITATIONS AND DISCLAIMERS.</p>
              <h3>Links to external materials</h3>
              <p>The Service may provide links to other websites, mobile device software applications, services or resources. You acknowledge and agree that the STX Apps Parties do not endorse and are not responsible for any content, advertising, products, services or other materials on or available through such sites or resources ("External Materials"). External Materials are subject to different terms and conditions and privacy policies, which you are responsible for reviewing. You further acknowledge and agree that the STX Apps Parties shall not be liable for any damage or loss caused by or resulting from use of or reliance on any External Materials.</p>
              <h3>System requirements</h3>
              <p>Use of the Service requires compatible hardware (fees may apply), Internet access (fees may apply), and certain software (fees may apply), and may require obtaining updates or upgrades from time to time. Because use of the Service involves hardware, software, and Internet access, your ability to use the Service may be affected by the performance of these factors. You acknowledge and agree that such system requirements, which may be changed from time to time, are your responsibility.</p>
              <h3>Changes to the Service</h3>
              <p>STX Apps reserves the right at any time to modify or discontinue, temporarily or permanently, the Service (or any portion thereof) with or without notice and without liability to you. You agree that the STX Apps Parties shall not be liable to you or any third party for any modification, suspension or discontinuance of the Service (or any portion thereof).</p>
              <h3>Changes to these Terms</h3>
              <p>STX Apps may revise these Terms at any time without notice. By using the Service you are agreeing to be bound by the then current version of these Terms.</p>
              <h3>Our content</h3>
              <p>STX Apps or its licensors and suppliers own all rights, title and interest in the App(s) and the software and other technology used to provide the Service and all associated intellectual property rights ("Our Technology"), and Our Technology is protected by copyright and other intellectual property laws and treaties. Our Technology is licensed, not sold, to you for use only under the terms and conditions of these Terms. STX Apps reserves all rights not expressly granted to you.</p>
              <p>Brace.to, the Brace.to logo, Brace.to product screen shots and the Brace.to "B" App Icon design and Justnote, the Justnote logo, Justnote product screen shot and the Justnote "N" App Icon design are trademarks or the subject of other intellectual property rights of STX Apps, and may not be used without prior, express written permission from STX Apps. All other trademarks not owned by STX Apps that appear on the Service are the property of their respective owners, who may or may not be affiliated with, connected to, or sponsored by STX Apps. All content included on the Service, including all information, data, text, software, music, sounds, photographs, graphics, videos, messages, scripts, tags, compilations of the foregoing and/or other materials accessible through the Service, including all associated intellectual property rights ("Our Content"), is the property of STX Apps and/or its licensors, as applicable, and protected by intellectual property and other laws and treaties. Except as expressly permitted under these Terms, no reproduction, transmission, modification or display of any of Our Content is permitted without our prior, express written permission.</p>
              <h3>Information you provide</h3>
              <p>You agree to read our Privacy Policy, which explains what type of information we collect and what might happen to that information, including, without limitation, how such information is shared and used. Our Privacy Policy also explains how we retain and delete the collected information and how you can request deletion of your information.</p>
              <h3>Your account and Secret Key</h3>
              <p>Your account is a <a href="https://www.stacks.co" target="_blank" rel="noreferrer">Stacks</a> account and a Stacks account is used to access Stacks blockchain and Stacks data server. Stacks blockchain stores your account's information i.e. username, profile, and data server location. And Stacks data server stores your encrypted app data.</p>
              <p>You are responsible for the security of your account, and you agree to accept responsibility for all activities that occur under your account whether or not authorized by you. The STX Apps Parties will not be liable for any loss or damage arising from unauthorized use of your Account.</p>
              <p>You acknowledge that if you lose your Secret Key, your Secret Key will be lost forever. Only you know your Secret Key, which means that no one can help you recover it. You agree that the STX Apps Parties shall not be liable for any loss or damange arising from unaccessible of your account.</p>
              <p>Your Secret Key cannot be changed or reset. As your Secret Key is used to encrypt your data, each file individually, if you change your Secret Key, every file needs to be decrypted with your old Secret Key and encrypted again with your new Secret Key.</p>
              <p>If you create an account with STX Apps, currently we create your Stacks account without username, profile, and data server location so there is no data stored in Stacks blockchain and your data server is automatically selected. You acknowledge and agree that as no data stored in Stacks blockchain, after deleting all your data in the data server, there is nothing left and forgetting your Secret Key is the way to permanently delete your account.</p>
              <h3>Fees and subscription</h3>
              <p>While the basic functionality of the Service is free for use, additional data charges may apply to you for mobile use of the Service through your mobile device. Additional fees may also apply for use of additional features of the Service. If there is a charge associated with a portion of the Service, you agree to pay that charge by accessing or using it. The price stated for the Service may be denominated in your local currency by Apple App Store, Google Play Store, by STX Apps through a third party payment processing service, or any other applicable App Store through which you download the App(s) on your device. Fees and charges are collected by the App Store on your device. You should consult with the appropriate App Store to determine if the price charged includes all applicable taxes and currency exchange settlements. STX Apps relies on the App Store to collect subscription fees and to report on the status of subscription accounts. Your access to the additional features may be suspended or cancelled if you do not make your payment on-time and/or in full.</p>
              <p>If you purchase one or more subscriptions or sign up for one or more trial subscriptions to the Service, then the following terms apply:</p>
              <ol className={tailwind('list-[lower-alpha]')}>
                <li>Auto-Renewal. YOU AGREE THAT, ONCE YOUR SUBSCRIPTION PERIOD EXPIRES, YOUR SUBSCRIPTION(S) WILL AUTOMATICALLY RENEW FOR SUCCESSIVE PERIODS EQUAL IN LENGTH TO THE IMMEDIATELY PRECEDING SUBSCRIPTION PERIOD UNLESS AND UNTIL YOU CANCEL YOUR SUBSCRIPTION(S). You acknowledge and agree that deletion of your account does not cancel your subscription(s) and you must cancel your subscription(s) explicitly through the applicable App Store.</li>
                <li>Recurring Charges. If you register for a paid subscription, YOU AUTHORIZE STX APPS' APPLICABLE SERVICE PROVIDER TO PROCESS YOUR PAYMENTS FOR ANY RENEWAL SUBSCRIPTION(S). SUBSCRIPTION PRICES WILL BE PROVIDED TO YOU AT THE TIME OF PURCHASE. YOU WILL BE BILLED FOR THE SAME SUBSCRIPTION PLAN(S) (OR THE MOST SIMILAR SUBSCRIPTION PLAN(S), IF YOUR PRIOR PLAN(S) ARE NO LONGER AVAILABLE) AT THE THEN-CURRENT SUBSCRIPTION PRICE PLUS ANY APPLICABLE TAXES. YOUR PAYMENTS WILL BE PROCESSED FOR ANY RENEWAL SUBSCRIPTION(S) USING THE SAME BILLING CYCLE AS YOUR CURRENT SUBSCRIPTION(S). IN OTHER WORDS, ON WHICHEVER DAY YOUR PAYMENT IS PROCESSED FOR YOUR CURRENT SUBSCRIPTION(S), YOUR PAYMENT WILL CONTINUE TO BE PROCESSED ON THAT DAY FOR ANY RENEWAL SUBSCRIPTION(S). ADDITIONAL TERMS AND CONDITIONS MAY APPLY UPON RENEWAL, AND SUBSCRIPTION FEES MAY CHANGE AT ANY TIME, TO THE FULLEST EXTENT PERMITTED UNDER APPLICABLE LAW. However, if you do not agree to an applicable change in fees, you may cancel your subscription(s) at any time in accordance below.</li>
                <li>Cancellation. YOU MAY CANCEL YOUR SUBSCRIPTION(S) AT ANY TIME THROUGH GOOGLE PLAY STORE (IF YOU MANAGE YOUR SUBSCRIPTION(S) THROUGH AN ANDROID DEVICE) OR THROUGH APPLE APP STORE (IF YOU MANAGE YOUR SUBSCRIPTION(S) THROUGH AN IOS-BASED DEVICE). STX APPS HAS NO OBLIGATION TO OFFER OR PROVIDE ANY REFUND FOR THE CANCELLATION OF ANY SUBSCRIPTION, BUT YOU CAN CONTINUE TO USE THE SUBSCRIPTION SERVICE UNTIL THE END OF THE SUBSCRIPTION PERIOD THAT YOU PAID FOR.</li>
              </ol>
              <p>You must make all payments through a charge through the applicable App Store. You agree to pay all fees and charges incurred in connection with your use of the Service (including any applicable taxes) at the rates in effect when the charges were incurred. BETWEEN YOU AND STX APPS, YOU, AND NOT STX APPS, ARE RESPONSIBLE FOR PAYING ANY AMOUNTS FOR THE SERVICE BILLED TO YOUR MOBILE DEVICE, PAYPAL, CREDIT OR DEBIT CARD BY AN APP STORE OR THIRD PARTY WHO HAD ACCESS TO THESE ACCOUNTS, WHETHER OR NOT SUCH AMOUNTS WERE AUTHORIZED BY YOU.</p>
              <p>We reserve the right in the future to charge for use of our services that are currently available free of charge. You will not be charged for using any service unless you have opted for a paid subscription plan.</p>
              <p>We may decide to stop offering subscriptions at any time, including in response to unforeseen circumstances beyond our control, or to comply with a legal requirement; if so, we’ll cancel your subscription(s) and refund the prorated portion of any prepaid subscription fee(s) equal to the remaining unused term of the subscription.</p>
              <p>We do not issue refunds for paid subscriptions. You may do so in the App Store through which you purchase the subscription, subject to the applicable App Store Terms i.e if you purchased a subscription on your iOS device, such as an iPhone, iPad, or iPod touch, you may request a refund via the Apple App Store (support.apple.com/en-us/HT204084).</p>
              <h3>Indemnification</h3>
              <p>You agree to indemnify, defend, and hold the STX Apps Parties harmless from and against any and all claims, suits, actions, losses, costs, damages, and any other liabilities, including attorneys' fees, arising out of or related to your use of the Service and/or your interactions with other users of the Service, including, but not limited to, (i) your use or misuse of any geographic location information or the Service generally, (ii) any violation of the rights of any other person or entity by you, (iii) any breach or violation by you of these Terms or any law, regulation or guidance, (iv) your access to and use of the Service, including without limitation, to communicate with or meet another user in-person or to locate and attend any offline place or event or to post, store, share, send, transmit, or disseminate any content, or (v) any negligent acts, omissions or willful misconduct by you. STX Apps reserves the right to assume the exclusive defense and control of any matter for which you are required to indemnify us, and you agree to cooperate with our defense of these claims.</p>
              <h3>Miscellaneous</h3>
              <p>If any provision of these Terms is held to be invalid or unenforceable under applicable law, then such provision shall be construed, limited, modified or, if necessary, severed to the extent necessary to eliminate its invalidity or unenforceability, without in any way affecting the remaining parts of these Terms. Such provision shall be ineffective to the extent of such invalidity or unenforceability only, without in any way affecting the remaining parts of these Terms.</p>
              <p>A provision of these Terms may be waived only by a written instrument executed by the party entitled to the benefit of such provision. The failure of any party at any time to require performance of any provision of these Terms shall in no manner affect such party's right at a later time to enforce the same. A waiver of any breach of any provision of these Terms shall not be construed as a continuing waiver of other breaches of the same or other provisions of these Terms.</p>
              <p>These Terms shall be binding upon and inure to the benefit of the parties hereto and their respective successors and permitted assigns. You may not assign any of your rights or obligations under these Terms to another party without the express written consent of STX Apps.</p>
              <p>The parties acknowledge that these Terms are concluded between you and STX Apps only, and not with the owner or operator of any other applicable App Store through which you may have downloaded the App(s) (the "App Store Owner"), and the App Store Owner is not responsible for the App(s) and the contents thereof. The App Store Owner has no obligation whatsoever to furnish any maintenance and support services with respect to the App(s). STX Apps, not the App Store Owner, is responsible for addressing any claims from you or any third party relating to the App(s) or your possession and/or use of the App(s), including, but not limited to, product liability claims, any claim that the App(s)s fails to conform to any applicable legal or regulatory requirement and claims arising under consumer protection or similar legislation. The App Store Owner and its subsidiaries are third party beneficiaries of these Terms, and shall have the right (and will be deemed to have accepted the right) to enforce these Terms against you as a third party beneficiary hereof.</p>
              <p>These Terms constitute the complete and exclusive statement of the agreement between STX Apps and you with respect to the subject matter hereof and supersede any proposal or prior or contemporaneous agreement, oral or written, and any other communications between the parties in relation to the subject matter of these Terms.</p>
              <p>You represent and warrant that you are not (i) located in a country that is subject to a U.S. Government embargo, or that has been designated by the U.S. Government as a "terrorist supporting" country; and (ii) listed on any U.S. Government list of prohibited or restricted parties, including, but not limited to, the Specially Designated Nationals List.</p>
              <p>YOU AND STX APPS AGREE THAT ANY CAUSE OF ACTION ARISING OUT OF OR RELATED TO THE SERVICE MUST COMMENCE WITHIN ONE YEAR AFTER THE CAUSE OF ACTION ACCRUES. OTHERWISE, SUCH CAUSE OF ACTION SHALL BE PERMANENTLY BARRED.</p>
              <p>If you have questions or concerns regarding these Terms or your subscription(s), you can contact us at <a href="&#109;&#97;&#105;&#108;&#116;&#111;&#58;&#115;&#117;&#112;&#112;&#111;&#114;&#116;&#64;&#106;&#117;&#115;&#116;&#110;&#111;&#116;&#101;&#46;&#99;&#99;"><span className={tailwind('e-mail')} data-user="troppus" data-website="cc.etontsuj"></span></a>. Alternatively, you may contact us at:</p>
              <p>STX Apps Co., Ltd.<br />ATTN: Justnote Team<br />247 Chan 31 Sathon<br />Bangkok 10120 TH</p>
            </div>
            <div className={tailwind('mx-auto max-w-prose pt-12 text-right text-gray-500')}>
              <button className={tailwind('group rounded-sm hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-400')} onClick={() => window.scrollTo(0, 0)}>
                <span className={tailwind('pl-1')}>Back to top</span>
                <svg className={tailwind('mb-1 ml-1 inline-block w-5')} viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M3.29289 9.70711C2.90237 9.31658 2.90237 8.68342 3.29289 8.29289L9.29289 2.29289C9.68342 1.90237 10.3166 1.90237 10.7071 2.29289L16.7071 8.29289C17.0976 8.68342 17.0976 9.31658 16.7071 9.70711C16.3166 10.0976 15.6834 10.0976 15.2929 9.70711L11 5.41421V17C11 17.5523 10.5523 18 10 18C9.44772 18 9 17.5523 9 17V5.41421L4.70711 9.70711C4.31658 10.0976 3.68342 10.0976 3.29289 9.70711Z" />
                </svg>
              </button>
              <br />
              <a className={tailwind('group mt-2 inline-block rounded-sm hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-1')} href="/">
                <span className={tailwind('pl-0.5')}>Go home</span>
                <svg className={tailwind('mb-1 ml-1 inline-block w-5')} viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.7071 2.29289C10.3166 1.90237 9.68342 1.90237 9.29289 2.29289L2.29289 9.29289C1.90237 9.68342 1.90237 10.3166 2.29289 10.7071C2.68342 11.0976 3.31658 11.0976 3.70711 10.7071L4 10.4142V17C4 17.5523 4.44772 18 5 18H7C7.55228 18 8 17.5523 8 17V15C8 14.4477 8.44772 14 9 14H11C11.5523 14 12 14.4477 12 15V17C12 17.5523 12.4477 18 13 18H15C15.5523 18 16 17.5523 16 17V10.4142L16.2929 10.7071C16.6834 11.0976 17.3166 11.0976 17.7071 10.7071C18.0976 10.3166 18.0976 9.68342 17.7071 9.29289L10.7071 2.29289Z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default React.memo(Terms);
