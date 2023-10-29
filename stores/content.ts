import { generateFullUrl } from "~/lib/utils";

export const contentStore = defineStore("content", () => {
  const services = [
    {
      item: "Essay",
      link: "/services/best-essay-writing-service",
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
      item: "Term Paper",
      link: "/services/term-paper-writing-service",
      content: "",
      content_type: "markdown",
    },
    // {
    //     item: 'Capstone Project Writing Services',
    //     link: '/services/capstone-project-writing-services',
    //     content: '',
    //     content_type: 'markdown'
    // },
    // {
    //     item: 'Best Essay Writing Service',
    //     link: '/services/best-essay-writing-service',
    //     content: '',
    //     content_type: 'markdown'
    // },
    // {
    //     item: 'Best Online Assignment Help',
    //     link: '/services/best-online-assignment-help',
    //     content: '',
    //     content_type: 'markdown'
    // },
    // {
    //     item: 'Term Paper Writing Services',
    //     link: '/services/term-paper-writing-services',
    //     content: '',
    //     content_type: 'markdown'
    // },
    // {
    //     item: 'Report Writing Services',
    //     link: '/services/report-writing-services',
    //     content: '',
    //     content_type: 'markdown'
    // },
    // {
    //     item: 'Essay Assignments',
    //     link: '/services/essay-assignments',
    //     content: '',
    //     content_type: 'markdown'
    // },
    // {
    //     item: 'Assignment Writing',
    //     link: '/services/assignment-writing',
    //     content: '',
    //     content_type: 'markdown'
    // },
    // {
    //     item: 'Case Study Writing Services',
    //     link: '/services/case-study-writing-services',
    //     content: '',
    //     content_type: 'markdown'
    // },
    // {
    //     item: 'Coursework Writing',
    //     link: '/services/coursework-writing',
    //     content: '',
    //     content_type: 'markdown'
    // },
    // {
    //     item: 'Research Paper Writing Services',
    //     link: '/services/research-paper-writing-services',
    //     content: '',
    //     content_type: 'markdown'
    // }
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
      item: "Help with any assignment",
      icon: "",
    },
    {
      item: "Plagiarism-free content",
      icon: "",
    },
    {
      item: "Writers from the US and Canada",
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

  const runtimeConfig = useRuntimeConfig();
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
    goTo,
  };
});
