export const navLinks = [
  {
    label: "Home",
    route: "/",
    icon: "/assets/icons/home.svg",
  },
  {
    label: "Image Restore",
    route: "/transformations/add/restore",
    icon: "/assets/icons/image.svg",
  },
  {
    label: "Generative Fill",
    route: "/transformations/add/fill",
    icon: "/assets/icons/stars.svg",
  },
  {
    label: "Object Remove",
    route: "/transformations/add/remove",
    icon: "/assets/icons/scan.svg",
  },
  {
    label: "Object Recolor",
    route: "/transformations/add/recolor",
    icon: "/assets/icons/filter.svg",
  },
  {
    label: "Background Remove",
    route: "/transformations/add/removeBackground",
    icon: "/assets/icons/camera.svg",
  },
  {
    label: "Profile",
    route: "/profile",
    icon: "/assets/icons/profile.svg",
  },
  {
    label: "Buy Credits",
    route: "/credits",
    icon: "/assets/icons/bag.svg",
  },
];

export const plans = [
  {
    _id: 1,
    name: "Free",
    icon: "/assets/icons/free-plan.svg",
    price: 0,
    credits: 20,
    inclusions: [
      {
        label: "20 Free Credits",
        isIncluded: true,
      },
      {
        label: "Basic Access to Services",
        isIncluded: true,
      },
      {
        label: "Priority Customer Support",
        isIncluded: false,
      },
      {
        label: "Priority Updates",
        isIncluded: false,
      },
    ],
  },
  {
    _id: 2,
    name: "Pro Package",
    icon: "/assets/icons/free-plan.svg",
    price: 40,
    credits: 120,
    inclusions: [
      {
        label: "120 Credits",
        isIncluded: true,
      },
      {
        label: "Full Access to Services",
        isIncluded: true,
      },
      {
        label: "Priority Customer Support",
        isIncluded: true,
      },
      {
        label: "Priority Updates",
        isIncluded: false,
      },
    ],
  },
  {
    _id: 3,
    name: "Premium Package",
    icon: "/assets/icons/free-plan.svg",
    price: 199,
    credits: 2000,
    inclusions: [
      {
        label: "2000 Credits",
        isIncluded: true,
      },
      {
        label: "Full Access to Services",
        isIncluded: true,
      },
      {
        label: "Priority Customer Support",
        isIncluded: true,
      },
      {
        label: "Priority Updates",
        isIncluded: true,
      },
    ],
  },
];

export const transformationTypes = {
  restore: {
    type: "restore",
    title: "Restore Image",
    subTitle: "Refine images by removing noise and imperfections",
    config: { restore: true },
    icon: "image.svg",
  },
  removeBackground: {
    type: "removeBackground",
    title: "Background Remove",
    subTitle: "Removes the background of the image using AI",
    config: { removeBackground: true },
    icon: "camera.svg",
  },
  fill: {
    type: "fill",
    title: "Generative Fill",
    subTitle: "Enhance an image's dimensions using AI outpainting",
    config: { fillBackground: true },
    icon: "stars.svg",
  },
  remove: {
    type: "remove",
    title: "Object Remove",
    subTitle: "Identify and eliminate objects from images",
    config: {
      remove: { prompt: "", removeShadow: true, multiple: true },
    },
    icon: "scan.svg",
  },
  recolor: {
    type: "recolor",
    title: "Object Recolor",
    subTitle: "Identify and recolor objects from the image",
    config: {
      recolor: { prompt: "", to: "", multiple: true },
    },
    icon: "filter.svg",
  },
};

export const aspectRatioOptions = {
  "1:1": {
    aspectRatio: "1:1",
    label: "Square (1:1)",
    width: 1000,
    height: 1000,
  },
  "3:4": {
    aspectRatio: "3:4",
    label: "Standard Portrait (3:4)",
    width: 1000,
    height: 1334,
  },
  "9:16": {
    aspectRatio: "9:16",
    label: "Phone Portrait (9:16)",
    width: 1000,
    height: 1778,
  },
};

export const defaultValues = {
  title: "",
  aspectRatio: "",
  color: "",
  prompt: "",
  publicId: "",
};

export const creditFee = -1;

export const privacyPolicy = `
PRIVACY POLICY

Last updated June 20, 2024



This privacy notice for PhotoFusion ("we," "us," or "our" ), describes how and why we might collect, store, use, and/or share ( "process" ) your information when you use our services ( "Services" ), such as when you:

    Visit our website at https://photo-fusion-one.vercel.app/ , or any website of ours that links to this privacy notice

    Download and use our mobile application (PhotoFusion), or any other application of ours that links to this privacy notice

    Engage with us in other related ways, including any sales, marketing, or events

Questions or concerns? Reading this privacy notice will help you understand your privacy rights and choices. If you do not agree with our policies and practices, please do not use our Services. If you still have any questions or concerns, please contact us at contact@agamya.dev.


SUMMARY OF KEY POINTS

This summary provides key points from our privacy notice, but you can find out more details about any of these topics by clicking the link following each key point or by using our  table of contents  below to find the section you are looking for.

What personal information do we process? When you visit, use, or navigate our Services, we may process personal information depending on how you interact with us and the Services, the choices you make, and the products and features you use. Learn more about  personal information you disclose to us .

Do we process any sensitive personal information? We do not process sensitive personal information.

Do we collect any information from third parties? We do not collect any information from third parties.

How do we process your information? We process your information to provide, improve, and administer our Services, communicate with you, for security and fraud prevention, and to comply with law. We may also process your information for other purposes with your consent. We process your information only when we have a valid legal reason to do so. Learn more about  how we process your information .

In what situations and with which parties do we share personal information? We may share information in specific situations and with specific third parties. Learn more about  when and with whom we share your personal information .

How do we keep your information safe? We have organizational and technical processes and procedures in place to protect your personal information. However, no electronic transmission over the internet or information storage technology can be guaranteed to be 100% secure, so we cannot promise or guarantee that hackers, cybercriminals, or other unauthorized third parties will not be able to defeat our security and improperly collect, access, steal, or modify your information. Learn more about  how we keep your information safe .

What are your rights? Depending on where you are located geographically, the applicable privacy law may mean you have certain rights regarding your personal information. Learn more about  your privacy rights .

How do you exercise your rights? The easiest way to exercise your rights is by visiting https://photo-fusion-one.vercel.app/ , or by contacting us. We will consider and act upon any request in accordance with applicable data protection laws.

Want to learn more about what we do with any information we collect? Review the privacy notice in full .


TABLE OF CONTENTS

1. WHAT INFORMATION DO WE COLLECT?
2. HOW DO WE PROCESS YOUR INFORMATION?
3. WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?
4. DO WE USE COOKIES AND OTHER TRACKING TECHNOLOGIES?
5. HOW DO WE HANDLE YOUR SOCIAL LOGINS?  
6. HOW LONG DO WE KEEP YOUR INFORMATION?
7. HOW DO WE KEEP YOUR INFORMATION SAFE?
8. DO WE COLLECT INFORMATION FROM MINORS?
9. WHAT ARE YOUR PRIVACY RIGHTS?
10. CONTROLS FOR DO-NOT-TRACK FEATURES
11. DO WE MAKE UPDATES TO THIS NOTICE?
12. HOW CAN YOU CONTACT US ABOUT THIS NOTICE?
13. HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM YOU?


1. WHAT INFORMATION DO WE COLLECT?

Personal information you disclose to us

In Short:  We collect personal information that you provide to us.

We collect personal information that you voluntarily provide to us when you register on the Services, express an interest in obtaining information about us or our products and Services, when you participate in activities on the Services, or otherwise when you contact us.

Personal Information Provided by You. The personal information that we collect depends on the context of your interactions with us and the Services, the choices you make, and the products and features you use. The personal information we collect may include the following:

    names

    email addresses

    usernames

    passwords

Sensitive Information. We do not process sensitive information.

Social Media Login Data. We may provide you with the option to register with us using your existing social media account details, like your Facebook, X, or other social media account. If you choose to register in this way, we will collect certain profile information about you from the social media provider, as described in the section called "HOW DO WE HANDLE YOUR SOCIAL LOGINS? " below.

All personal information that you provide to us must be true, complete, and accurate, and you must notify us of any changes to such personal information.

Information automatically collected

In Short:  Some information — such as your Internet Protocol (IP) address and/or browser and device characteristics — is collected automatically when you visit our Services.

We automatically collect certain information when you visit, use, or navigate the Services. This information does not reveal your specific identity (like your name or contact information) but may include device and usage information, such as your IP address, browser and device characteristics, operating system, language preferences, referring URLs, device name, country, location, information about how and when you use our Services, and other technical information. This information is primarily needed to maintain the security and operation of our Services, and for our internal analytics and reporting purposes.

Like many businesses, we also collect information through cookies and similar technologies.

The information we collect includes:

    Log and Usage Data. Log and usage data is service-related, diagnostic, usage, and performance information our servers automatically collect when you access or use our Services and which we record in log files. Depending on how you interact with us, this log data may include your IP address, device information, browser type, and settings and information about your activity in the Services (such as the date/time stamps associated with your usage, pages and files viewed, searches, and other actions you take such as which features you use), device event information (such as system activity, error reports (sometimes called "crash dumps" ), and hardware settings).


2. HOW DO WE PROCESS YOUR INFORMATION?

In Short: We process your information to provide, improve, and administer our Services, communicate with you, for security and fraud prevention, and to comply with law. We may also process your information for other purposes with your consent.

We process your personal information for a variety of reasons, depending on how you interact with our Services, including:

    To facilitate account creation and authentication and otherwise manage user accounts. We may process your information so you can create and log in to your account, as well as keep your account in working order.

    To protect our Services. We may process your information as part of our efforts to keep our Services safe and secure, including fraud monitoring and prevention.

    To identify usage trends. We may process information about how you use our Services to better understand how they are being used so we can improve them.


3. WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?

In Short: We may share information in specific situations described in this section and/or with the following third parties.

We may need to share your personal information in the following situations:

    Business Transfers. We may share or transfer your information in connection with, or during negotiations of, any merger, sale of company assets, financing, or acquisition of all or a portion of our business to another company.


4. DO WE USE COOKIES AND OTHER TRACKING TECHNOLOGIES?

In Short: We may use cookies and other tracking technologies to collect and store your information.

We may use cookies and similar tracking technologies (like web beacons and pixels) to gather information when you interact with our Services. Some online tracking technologies help us maintain the security of our Services and your account, prevent crashes, fix bugs, save your preferences, and assist with basic site functions.

We also permit third parties and service providers to use online tracking technologies on our Services for analytics and advertising, including to help manage and display advertisements, to tailor advertisements to your interests, or to send abandoned shopping cart reminders (depending on your communication preferences). The third parties and service providers use their technology to provide advertising about products and services tailored to your interests which may appear either on our Services or on other websites.

Specific information about how we use such technologies and how you can refuse certain cookies is set out in our Cookie Notice.

5. HOW DO WE HANDLE YOUR SOCIAL LOGINS?

In Short: If you choose to register or log in to our Services using a social media account, we may have access to certain information about you.

Our Services offer you the ability to register and log in using your third-party social media account details (like your Facebook or X logins). Where you choose to do this, we will receive certain profile information about you from your social media provider. The profile information we receive may vary depending on the social media provider concerned, but will often include your name, email address, friends list, and profile picture, as well as other information you choose to make public on such a social media platform.

We will use the information we receive only for the purposes that are described in this privacy notice or that are otherwise made clear to you on the relevant Services. Please note that we do not control, and are not responsible for, other uses of your personal information by your third-party social media provider. We recommend that you review their privacy notice to understand how they collect, use, and share your personal information, and how you can set your privacy preferences on their sites and apps.

6. HOW LONG DO WE KEEP YOUR INFORMATION?

In Short: We keep your information for as long as necessary to fulfill the purposes outlined in this privacy notice unless otherwise required by law.

We will only keep your personal information for as long as it is necessary for the purposes set out in this privacy notice, unless a longer retention period is required or permitted by law (such as tax, accounting, or other legal requirements). No purpose in this notice will require us keeping your personal information for longer than the period of time in which users have an account with us .

When we have no ongoing legitimate business need to process your personal information, we will either delete or anonymize such information, or, if this is not possible (for example, because your personal information has been stored in backup archives), then we will securely store your personal information and isolate it from any further processing until deletion is possible.

7. HOW DO WE KEEP YOUR INFORMATION SAFE?

In Short: We aim to protect your personal information through a system of organizational and technical security measures.

We have implemented appropriate and reasonable technical and organizational security measures designed to protect the security of any personal information we process. However, despite our safeguards and efforts to secure your information, no electronic transmission over the Internet or information storage technology can be guaranteed to be 100% secure, so we cannot promise or guarantee that hackers, cybercriminals, or other unauthorized third parties will not be able to defeat our security and improperly collect, access, steal, or modify your information. Although we will do our best to protect your personal information, transmission of personal information to and from our Services is at your own risk. You should only access the Services within a secure environment.

8. DO WE COLLECT INFORMATION FROM MINORS?

In Short: We do not knowingly collect data from or market to children under 18 years of age.

We do not knowingly collect, solicit data from, or market to children under 18 years of age, nor do we knowingly sell such personal information. By using the Services, you represent that you are at least 18 or that you are the parent or guardian of such a minor and consent to such minor dependent’s use of the Services. If we learn that personal information from users less than 18 years of age has been collected, we will deactivate the account and take reasonable measures to promptly delete such data from our records. If you become aware of any data we may have collected from children under age 18, please contact us at contact@agamya.dev.

9. WHAT ARE YOUR PRIVACY RIGHTS?

In Short:  You may review, change, or terminate your account at any time, depending on your country, province, or state of residence.

Withdrawing your consent: If we are relying on your consent to process your personal information, which may be express and/or implied consent depending on the applicable law, you have the right to withdraw your consent at any time. You can withdraw your consent at any time by contacting us by using the contact details provided in the section " HOW CAN YOU CONTACT US ABOUT THIS NOTICE? " below.

However, please note that this will not affect the lawfulness of the processing before its withdrawal nor, when applicable law allows, will it affect the processing of your personal information conducted in reliance on lawful processing grounds other than consent.

Account Information

If you would at any time like to review or change the information in your account or terminate your account, you can:

    Log in to your account settings and update your user account.

    Contact us using the contact information provided.

Upon your request to terminate your account, we will deactivate or delete your account and information from our active databases. However, we may retain some information in our files to prevent fraud, troubleshoot problems, assist with any investigations, enforce our legal terms and/or comply with applicable legal requirements.

Cookies and similar technologies: Most Web browsers are set to accept cookies by default. If you prefer, you can usually choose to set your browser to remove cookies and to reject cookies. If you choose to remove cookies or reject cookies, this could affect certain features or services of our Services.

If you have questions or comments about your privacy rights, you may email us at contact@agamya.dev.

10. CONTROLS FOR DO-NOT-TRACK FEATURES

Most web browsers and some mobile operating systems and mobile applications include a Do-Not-Track ("DNT") feature or setting you can activate to signal your privacy preference not to have data about your online browsing activities monitored and collected. At this stage, no uniform technology standard for recognizing and implementing DNT signals has been finalized. As such, we do not currently respond to DNT browser signals or any other mechanism that automatically communicates your choice not to be tracked online. If a standard for online tracking is adopted that we must follow in the future, we will inform you about that practice in a revised version of this privacy notice.
cookies

11. DO WE MAKE UPDATES TO THIS NOTICE?

In Short: Yes, we will update this notice as necessary to stay compliant with relevant laws.

We may update this privacy notice from time to time. The updated version will be indicated by an updated "Revised" date at the top of this privacy notice. If we make material changes to this privacy notice, we may notify you either by prominently posting a notice of such changes or by directly sending you a notification. We encourage you to review this privacy notice frequently to be informed of how we are protecting your information.

12. HOW CAN YOU CONTACT US ABOUT THIS NOTICE?

If you have questions or comments about this notice, you may email us at contact@agamya.dev or  contact us by post at:

PhotoFusion
Block 16, Omax City
Lucknow, Uttar Pradesh 226012
India

13. HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM YOU?

Based on the applicable laws of your country, you may have the right to request access to the personal information we collect from you, details about how we have processed it, correct inaccuracies, or delete your personal information. You may also have the right to withdraw your consent to our processing of your personal information. These rights may be limited in some circumstances by applicable law. To request to review, update, or delete your personal information, please visit: https://photo-fusion-one.vercel.app/ .
`;