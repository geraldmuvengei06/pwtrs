import { generateFullUrl } from "~/lib/utils";

export const contentStore = defineStore("content", () => {
  const runtimeConfig = useRuntimeConfig();

  const site_name = runtimeConfig.public.websiteName;

  const page_content = {
    "About Us": {
      metaTitle: `Your Trusted Partner for Writing Excellence`,
      metaDescription: `Discover ${site_name}, the best online nursing essay service. We are your dedicated team of expert writers, ready to craft top-quality essays and papers for you.`,
      title: `About Us`,
      subtitle:
        "Excellence in Every 'Write My Essay for Me' and 'Write My Paper' Request",
      description: `${site_name} is your destination for excellence in nursing essay writing. With a dedicated team of the best online writers, we're committed to delivering top-quality essays and papers. Whether you need us to 'write my essay for me' or 'write my paper,' we're here to ensure your academic success. Discover our commitment to excellence and experience the difference with ${site_name}.`,
    },
    "Contact Us": {
      metaTitle: `Your Trusted Partner for Writing Excellence`,
      metaDescription: `Discover ${site_name}, the best online nursing essay service. We are your dedicated team of expert writers, ready to craft top-quality essays and papers for you.`,
      title: `Contact Us`,
      subtitle:
        "Excellence in Every 'Write My Essay for Me' and 'Write My Paper' Request",
      description: `${site_name} is your destination for excellence in nursing essay writing. With a dedicated team of the best online writers, we're committed to delivering top-quality essays and papers. Whether you need us to 'write my essay for me' or 'write my paper,' we're here to ensure your academic success. Discover our commitment to excellence and experience the difference with ${site_name}.`,
    },
    "How It Works": {
      metaTitle: `How We Deliver Excellence`,
      metaDescription: `Explore the seamless process of ${site_name}, the best online nursing essay service, to fulfill 'write my essay for me' and 'write my paper' requests.`,
      title: "How Our Service Works",
      subtitle:
        "Simplified 'Write My Essay for Me' and 'Write My Paper' Services",
      description: `At ${site_name}, we've simplified the path to success for your 'write my essay for me' and 'write my paper' needs. Our seamless process, delivered by the best online writers, ensures that excellence is at the core of everything we do. Experience the difference with ${site_name} and see your academic goals become a reality.`,
    },
    Samples: {
      metaTitle: `Sample Essays and Papers`,
      metaDescription: `Explore ${site_name}' sample essays and papers, showcasing the expertise of the best online writers in the 'write my essay for me' and 'write my paper' niche.`,
      title: `${site_name} Excellence Unveiled: Sample Essays and Papers`,
      subtitle:
        "Discover Quality in Every 'Write My Essay for Me' and 'Write My Paper' request",
      description: `Want to witness the quality we offer in 'write my essay for me' and 'write my paper' services? ${site_name} proudly presents a collection of sample essays and papers crafted by the best online writers in the business. See how excellence meets every page, ensuring your success.`,
    },
    FAQ: {
      metaTitle: `Your Questions, Answered`,
      metaDescription: `Find answers to your queries about 'write my essay for me' and 'write my paper' services from ${site_name}, the best online nursing essay service.`,
      title: `Your ${site_name} FAQ: Answers to Common Questions`,
      subtitle: "Clearing Doubts About the Best Online Writers",
      description: `Got questions about 'write my essay for me' and 'write my paper' services at ${site_name}? We've got you covered. Explore our FAQ section to find comprehensive answers, ensuring you make informed decisions and trust the best online writers in the field.`,
    },
  };

  const services = [
    {
      item: "Essay Writing Service",
      link: "/services/best-essay-writing-service",
      content: "",
      content_type: "markdown",
    },
    {
      item: "Coursework Help",
      link: "/services/coursework-help",
      content: "",
      content_type: "markdown",
    },
    {
      item: "Assignment Help",
      link: "/services/online-assignment-help",
      content: "",
      content_type: "markdown",
    },
    {
      item: "Nursing Paper Writing Service",
      link: "/services/paper-writing-service",
      content: "",
      content_type: "markdown",
    },
    {
      item: "Term Paper Writing",
      link: "/services/term-paper-writing-service",
      content: "",
      content_type: "markdown",
    },
  ];

  const menu = [
    {
      name: "Samples",
      link: "/samples",
    },
    {
      name: "How it Works",
      link: "/how-it-works",
    },
    // {
    //     name: 'Services',
    //     items: []
    // },
    {
      name: "Contact Us",
      link: "/contact",
    },
    {
      name: "FAQ",
      link: "/faq",
    },
    {
      name: "About Us",
      link: "/about-us",
    },
  ];

  const key_factors = [
    {
      item: "Lighting-fast turnaround time",
      icon: "",
    },
    {
      item: "Affordability & Commitment",
      icon: "",
    },
    {
      item: "Originality - Plagiarism-free content",
      icon: "",
    },
    {
      item: "Expert Writers from the US and Canada",
      icon: "",
    },
  ];

  const legal = [
    {
      name: "Terms of use",
      link: "/legal/terms-of-use",
    },
    {
      name: "Privacy Policy",
      link: "/legal/privacy-policy",
    },
    {
      name: "Cookie Policy",
      link: "/legal/cookie-policy",
    },
    {
      name: "Refund Policy",
      link: "/legal/refund-policy",
    },
  ];

  const how_it_works = [
    {
      title: "Step 1: Provide your essay instructions.",
      description:
        "<ul><li>The more detailed your instructions, the better.</li><li>Include relevant resources, links, and your academic level of English in the Paper Instructions field.</li><li>A further deadline may result in a lower price.</li></ul>",
      icon: "pi pi-file-edit",
      image: "order.png",
    },
    {
      title: "Step 2: Choose your writer.",
      description:
        "<ul><li>Browse writers` profiles and reviews.</li><li>Chat with writers to find the best one for your needs.</li> </ul>",
      icon: "pi pi-users",
      image: "process.png",
    },
    {
      title: "Step 3: Track your project.",
      description:
        "<ul><li>Manage your orders easily from your desktop or mobile device.</li><li>Receive notifications about your order status, chat messages from your writer, and when the final paper is uploaded.</li><li>Use the account dashboard to check your available funds, view order history, or check current order progress.</li><li>Maintain continuous communication with your writer via chat.</li></ul>",
      icon: "pi pi-pencil",
      image: "download.png",
    },
    {
      title: "Step 4: Get your perfect paper.",
      description:
        "<ul><li>Review the final essay or paper and leave feedback for your writer.</li><li>Pay only when you`re 100% satisfied.</li><li>All drafts of your paper are stored in your personal account, therefore, you can download them at your convenience.</li> <li>Once you have received the final document, any complaints or requested revisions can be made within three days.</li><li>Your writer doesn`t get paid until you`re happy with the essay.</li> </ul>",
      icon: "pi pi-wallet",
      image: "download.png",
    },
  ];

  const faqs = [
    {
      question: "What makes your essay writing service the best?",
      answer:
        "Our service stands out due to our expert writers, tailored essays, and timely delivery. We prioritize your academic success.",
    },
    {
      question: "How do I place an order for an essay?",
      answer:
        "Ordering is easy. Just visit our website, provide the necessary details, choose a writer, and make a secure payment.",
    },
    {
      question: "Can I communicate with my assigned writer?",
      answer:
        "Yes, you can communicate directly with your writer through our messaging system, ensuring your essay meets your expectations.",
    },
    {
      question: "Are your services affordable for students?",
      answer:
        "We offer competitive prices, and we understand the budget constraints of students. You'll find our rates reasonable.",
    },
    {
      question: "What if I'm not satisfied with the delivered essay?",
      answer:
        "We have a revision policy in place. If you're not satisfied, we'll make the necessary revisions to meet your expectations.",
    },
    {
      question: "Is my personal information safe with your service?",
      answer:
        "We take your privacy seriously. Your personal information is encrypted and stored securely, ensuring confidentiality.",
    },
    {
      question: "How can I track the progress of my order?",
      answer:
        "You can log in to your account to check the status of your order. You'll receive updates as your essay is being crafted.",
    },
    {
      question: "Do you cover a wide range of subjects and topics?",
      answer:
        "Yes, our team of expert writers can handle a variety of subjects and topics, ensuring we can assist you with diverse assignments.",
    },
    {
      question: "What is the average turnaround time for an essay?",
      answer:
        "The turnaround time varies, but we strive to deliver your essay before your specified deadline, ensuring you have time for review.",
    },
    {
      question: "How can I reach customer support if I have a query?",
      answer:
        "Our customer support team is available 24/7 via email and live chat to assist you with any questions or concerns.",
    },
  ];

  const reviews = [
    {
      customer: "Customer_123",
      rating: 5,
      review:
        "I am a current student, and I can't express how grateful I am for this service. Their essays are consistently top-notch, and the writers really understand the subject matter. It's been a game-changer for my academic journey.",
      type_of_service: "Essay Writing",
    },
    {
      customer: "Customer_456",
      rating: 4,
      review:
        "As a recent graduate, I used this service throughout my studies. It was a reliable partner that always delivered high-quality papers. I'm thankful for their contribution to my academic success.",
      type_of_service: "Paper Writing",
    },
    {
      customer: "Customer_789",
      rating: 5,
      review:
        "Balancing a full-time job and part-time studies was stressful. This service has been a lifeline. The essays are on point, and the punctual delivery keeps my stress levels in check.",
      type_of_service: "Assignment Writing",
    },
    {
      customer: "Customer_234",
      rating: 4,
      review:
        "I value punctuality, and this service never disappoints. They always deliver my essays on time, even with tight deadlines. It's a reliable choice for those who cherish timeliness.",
      type_of_service: "Research Paper Writing",
    },
    {
      customer: "Customer_567",
      rating: 5,
      review:
        "What I love most is the personalized approach. They really listen to your requirements and deliver essays that match your style. It feels like a personal writing assistant.",
      type_of_service: "Essay Writing",
    },
    {
      customer: "Customer_890",
      rating: 4,
      review:
        "Throughout my academic journey, this service has been a constant companion. Their essays consistently meet my high standards and have contributed to my academic success.",
      type_of_service: "Paper Writing",
    },
    {
      customer: "Customer_1234",
      rating: 5,
      review:
        "I'm a lifelong learner, and juggling work, family, and education is no easy task. This service has made it more manageable. Their essays are insightful and well-researched, making my life easier.",
      type_of_service: "Assignment Writing",
    },
    {
      customer: "Customer_5678",
      rating: 4,
      review:
        "Research papers used to be my biggest challenge. But with this service, I've found a trustworthy partner. Their in-depth research and well-structured papers have earned me accolades.",
      type_of_service: "Research Paper Writing",
    },
    {
      customer: "Customer_345",
      rating: 5,
      review:
        "No more sleepless nights and last-minute cramming. With this service, I can focus on my studies and get a good night's rest. It's a game-changer for my academic life.",
      type_of_service: "Essay Writing",
    },
    {
      customer: "Customer_678",
      rating: 4,
      review:
        "The straightforward ordering process and responsive customer support make this service my top choice. It's a seamless experience from start to finish, and I appreciate the convenience.",
      type_of_service: "Paper Writing",
    },
    {
      customer: "Customer_901",
      rating: 5,
      review:
        "This service is my academic MVP. With their expertise, I've seen a significant improvement in my grades. They make the writing process effortless, and I'm thrilled with the results.",
      type_of_service: "Assignment Writing",
    },
    {
      customer: "Customer_12345",
      rating: 4,
      review:
        "I can finally enjoy my academic journey, thanks to this service. Their essays are always on point, and the writers are true experts. It's a reliable companion for any student.",
      type_of_service: "Research Paper Writing",
    },
  ];

  const samples = [
    {
      filename:
        "A Personal Reflection On Future Career Path As A Nurse And How To Care For Self And Patients",
      path: "/sample/watermarked-A-Personal-Reflection-on-Future-Career-Path-as-a-Nurse-and-How-to-Care-for-Self-and-Patients.pdf",
      size: "0.05 MB",
      num_pages: 4,
      estimated_read_time: "2.40 minutes",
      type: "Reflection Essay",
    },
    {
      filename: "Advanced Pharmacology",
      path: "/sample/watermarked-Advanced-Pharmacology.pdf",
      size: "0.10 MB",
      num_pages: 3,
      estimated_read_time: "1.80 minutes",
      type: "Research Paper",
    },
    {
      filename: "Comprehensive Integrated Psychiatric Assessment",
      path: "/sample/watermarked-Comprehensive-integrated-psychiatric-assessment.pdf",
      size: "0.12 MB",
      num_pages: 5,
      estimated_read_time: "3.00 minutes",
      type: "Assessment Essay",
    },
    {
      filename: "Diversity In Health Care Purnell Nursing Model",
      path: "/sample/watermarked-Diversity-in-Health-Care-Purnell-nursing-Model.pdf",
      size: "0.15 MB",
      num_pages: 7,
      estimated_read_time: "4.20 minutes",
      type: "Essay",
    },
    {
      filename: "Focused Assessment Of The Lungs And Thorax",
      path: "/sample/watermarked-Focused-Assessment-of-the-Lungs-and-Thorax.pdf",
      size: "0.13 MB",
      num_pages: 7,
      estimated_read_time: "4.20 minutes",
      type: "Essay",
    },
    {
      filename: "Internal And External Data",
      path: "/sample/watermarked-Internal-and-external-data.pdf",
      size: "0.07 MB",
      num_pages: 4,
      estimated_read_time: "2.40 minutes",
      type: "Essay",
    },
    {
      filename: "Learning Needs Assessment",
      path: "/sample/watermarked-Learning-Needs-Assessment.pdf",
      size: "0.15 MB",
      num_pages: 6,
      estimated_read_time: "3.60 minutes",
      type: "Assessment",
    },
    {
      filename: "Quality Healthcare Measuring Np Performance",
      path: "/sample/watermarked-Quality-Healthcare-Measuring-NP-Performance.pdf",
      size: "0.09 MB",
      num_pages: 9,
      estimated_read_time: "5.40 minutes",
      type: "Essay",
    },
    {
      filename:
        "Reducing Barriers To Selfhelp Tools Among Women With Depression ",
      path: "/sample/watermarked-REDUCING-BARRIERS-TO-SELFHELP-TOOLS-AMONG-WOMEN-WITH-DEPRESSION-.pdf",
      size: "0.17 MB",
      num_pages: 26,
      estimated_read_time: "15.60 minutes",
      type: "Paper",
    },
    {
      filename: "NPR Concept Plan",
      path: "/sample/watermarked-References.pdf",
      size: "0.15 MB",
      num_pages: 2,
      estimated_read_time: "1.20 minutes",
      type: "Plan",
    },
    {
      filename: "Sigmund Freud",
      path: "/sample/watermarked-Sigmund-Freud.pdf",
      size: "0.11 MB",
      num_pages: 4,
      estimated_read_time: "2.40 minutes",
      type: "Paper",
    },
    {
      filename: "Stage A Heart Failure",
      path: "/sample/watermarked-Stage-A-Heart-Failure.pdf",
      size: "0.14 MB",
      num_pages: 5,
      estimated_read_time: "3.00 minutes",
      type: "Essay",
    },
    {
      filename: "Stress Management",
      path: "/sample/watermarked-Stress-Management.pdf",
      size: "0.14 MB",
      num_pages: 7,
      estimated_read_time: "4.20 minutes",
      type: "Essay",
    },
    {
      filename: "Testtaking",
      path: "/sample/watermarked-TestTaking.pdf",
      size: "0.11 MB",
      num_pages: 5,
      estimated_read_time: "3.00 minutes",
      type: "Essay",
    },
    {
      filename:
        "Week 4 Signature Assignment Pediatric Comprehensive Soap Note Pt 2 Bp",
      path: "/sample/watermarked-Week-4-Signature-Assignment-Pediatric-Comprehensive-SOAP-Note-Pt-2-BP.pdf",
      size: "0.08 MB",
      num_pages: 5,
      estimated_read_time: "3.00 minutes",
      type: "Assignment",
    },
  ];

  const unique = [
    {
      title: "Originality",
      description:
        "At the heart of every great piece of academic work is originality. We understand that plagiarism is a cardinal sin in academia. That's why we guarantee that every piece we craft, whether it's a 'write my paper for me' request, an 'online nursing paper,' or an 'online term paper,' is 100% original. Our dedicated writers meticulously create each document from scratch, ensuring it's tailored to your specific requirements.",
    },
    {
      title: "Expertise",
      description:
        "Our team comprises online expert writers with diverse academic backgrounds. When you trust us with your assignments, you can be confident that we have specialists in your field. Whether you need a research paper in science, a literary analysis, or a business essay, we match your task with a writer who possesses the expertise to meet your expectations.",
    },
    {
      title: "Timely Delivery",
      description:
        "In academia, punctuality is of paramount importance. We understand the significance of meeting deadlines. Whether you have an 'online nursing paper' due or a 'write my paper for me' request, we work diligently to ensure you receive your assignment on time. Our quick turnaround ensures that you are never left in a lurch, even when time is tight.",
    },
    {
      title: "Affordability & Commitment",
      description:
        "We believe that affordability should not be sacrificed for quality. Our competitive pricing ensures that every student can access our exceptional services without breaking the bank. We also offer discounts and special offers, making our services even more budget-friendly. In a world where academic success is highly competitive, we stand as your beacon of light. Trust us to deliver original, expert-crafted work on time and within your budget. We don't just provide essays; we provide solutions that drive you toward academic excellence.",
    },
  ];

  const experts = [
    {
      name: "Alice J.",
      rating: 4.9,
      projects_completed: 3440,
      categories: [
        "Nursing",
        "Healthcare",
        "Essays",
        "Business",
        "History",
        "English",
        "Mathematics",
        "Science",
      ],
      profile_picture: "/experts/writer1.jpeg",
    },
    {
      name: "John S.",
      rating: 4.7,
      projects_completed: 2854,
      categories: [
        "English",
        "History",
        "Business",
        "Nursing",
        "Healthcare",
        "Psychology",
        "Marketing",
      ],
      profile_picture: "/experts/writer2.jpeg",
    },
    {
      name: "Michael D.",
      rating: 4.8,
      projects_completed: 3998,
      categories: [
        "Essays",
        "Nursing",
        "Business",
        "History",
        "Healthcare",
        "Economics",
        "Sociology",
      ],
      profile_picture: "/experts/writer3.jpeg",
    },
    {
      name: "Emily W.",
      rating: 4.6,
      projects_completed: 2267,
      categories: [
        "Healthcare",
        "Business",
        "Nursing",
        "English",
        "Essays",
        "Computer Science",
        "Art",
      ],
      profile_picture: "/experts/writer4.jpeg",
    },
    {
      name: "Sarah M.",
      rating: 4.5,
      projects_completed: 3287,
      categories: [
        "History",
        "English",
        "Essays",
        "Business",
        "Nursing",
        "Education",
        "Music",
      ],
      profile_picture: "/experts/writer5.jpeg",
    },
    {
      name: "Sarah F.",
      rating: 4.9,
      projects_completed: 4390,
      categories: [
        "Physics",
        "Chemistry",
        "Mathematics",
        "Computer Science",
        "Engineering",
        "Art",
        "Biology",
      ],
      profile_picture: "/experts/writer6.jpeg",
    },
    {
      name: "Olivia B.",
      rating: 4.7,
      projects_completed: 2908,
      categories: [
        "Psychology",
        "Sociology",
        "Counseling",
        "Education",
        "Child Development",
        "Healthcare",
        "Business",
      ],
      profile_picture: "/experts/writer7.jpeg",
    },
    {
      name: "JR.",
      rating: 4.8,
      projects_completed: 3701,
      categories: [
        "Marketing",
        "Public Relations",
        "Advertising",
        "Graphic Design",
        "Web Development",
        "Business",
        "Communication",
      ],
      profile_picture: "/experts/writer8.jpeg",
    },
    {
      name: "Sophia C.",
      rating: 4.6,
      projects_completed: 2407,
      categories: [
        "Social Work",
        "Counseling",
        "Psychology",
        "Sociology",
        "Education",
        "Healthcare",
        "Child Development",
      ],
      profile_picture: "/experts/writer9.jpeg",
    },
    {
      name: "Louis L.",
      rating: 4.5,
      projects_completed: 3345,
      categories: [
        "Engineering",
        "Computer Science",
        "Mathematics",
        "Physics",
        "Art",
        "Biology",
        "Chemistry",
      ],
      profile_picture: "/experts/writer10.jpeg",
    },
    {
      name: "Ava M.",
      rating: 4.9,
      projects_completed: 4165,
      categories: [
        "Art",
        "Graphic Design",
        "Web Development",
        "Digital Marketing",
        "Photography",
        "Advertising",
        "Business",
      ],
      profile_picture: "/experts/writer11.jpeg",
    },
    {
      name: "Ethan K.",
      rating: 4.7,
      projects_completed: 2707,
      categories: [
        "Environmental Science",
        "Sustainability",
        "Renewable Energy",
        "Climate Change",
        "Green Technology",
        "Engineering",
        "Economics",
      ],
      profile_picture: "/experts/writer12.jpeg",
    },
  ];

  const free_features = [
    {
      feat: "Turnitin report",
      cost: 15.99,
    },
    {
      feat: "The best writer",
      cost: 10.99,
    },
    {
      feat: "Formatting",
      cost: 7.99,
    },
    {
      feat: "Unlimited revisions",
      cost: 21.99,
    },
    {
      feat: "Outline",
      cost: 3.99,
    },
    {
      feat: "Cover page",
      cost: 4.99,
    },
  ];

  const why_us = [
    {
      title: "Unwavering Originality",
      description:
        "Our dedicated writers craft every essay from scratch, ensuring impeccable authenticity.",
    },
    {
      title: "24/7 Support",
      description:
        "Reach out to our support agents day or night, saying 'write my essays for me,' and receive immediate assistance.",
    },
    {
      title: "Fortified Anonymity",
      description:
        "Pay for essays without a trace. Our top-level encryption and secure payment gateway safeguard your personal data, even from your paper writer.",
    },
    {
      title: "Expert Writers in Every Field",
      description:
        "Our team comprises online expert writers with diverse academic backgrounds, matching your task with expertise.",
    },
    {
      title: "Punctuality is Paramount",
      description:
        "We ensure on-time delivery with a quick turnaround for 'online nursing papers' or 'write my paper for me' requests.",
    },
    {
      title: "Quality Meets Affordability",
      description:
        "With competitive pricing and budget-friendly access to exceptional essay services, we offer quality without breaking the bank.",
    },
  ];

  const order_url = runtimeConfig?.public.orderUrl;
  const home_url = runtimeConfig?.public.homeUrl;

  const contacts = {
    whatsapp: runtimeConfig?.public.whatsappNumber,
    mail: runtimeConfig?.public.supportEmail,
  };

  function goTo(path: string, params: object = {}, query: object = {}) {
    let url = generateFullUrl(path, params, query);
    document.location.href = url;
  }

  return {
    services,
    menu,
    key_factors,
    legal,
    order_url,
    home_url,
    contacts,
    how_it_works,
    faqs,
    reviews,
    samples,
    unique,
    experts,
    free_features,
    page_content,
    why_us,
    goTo,
  };
});
