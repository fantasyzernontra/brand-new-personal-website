// 1: 'School'
// 2: 'Internship'
// 3: 'Business'
// 4: 'Work as a Employee'

import AlchemistLogo from "../assets/image/Alchemist-Logo.png";

const experiences = [
  {
    en: {
      exp_type: 1,
      exp_short_name: "High School",
      exp_full_name: "Montfort College Secondary School",
      exp_desc: "GIFTED Thai Curriculum",
      exp_ref: "https://www.montfort.ac.th",
      exp_logo: {
        desktop: {
          url: "https://www.montfort.ac.th/wp-content/uploads/2020/10/LOGO-MC-5.png",
          alt: "Montfort College Logo",
          width: 400,
          height: 350,
        },
        mobile: {
          url: "https://www.montfort.ac.th/wp-content/uploads/2020/10/LOGO-MC-5.png",
          alt: "Montfort College Logo",
          width: 250,
          height: 200,
        },
      },
      exp_time_period: {
        from: 2012,
        to: 2018,
      },
      exp_tools: [],
    },
    th: {
      exp_type: 1,
      exp_short_name: "มัธยมศึกษา",
      exp_full_name: "มงฟอร์ตวิทยาลัย แผนกมัธยม",
      exp_desc: "หลักสูตรกิ้ฟต์ไทย",
      exp_ref: "https://www.montfort.ac.th",
      exp_logo: {
        desktop: {
          url: "https://www.montfort.ac.th/wp-content/uploads/2020/10/LOGO-MC-5.png",
          alt: "Montfort College Logo",
          width: 400,
          height: 350,
        },
        mobile: {
          url: "https://www.montfort.ac.th/wp-content/uploads/2020/10/LOGO-MC-5.png",
          alt: "Montfort College Logo",
          width: 250,
          height: 200,
        },
      },
      exp_time_period: {
        from: 2012,
        to: 2018,
      },
      exp_tools: [],
    },
  },
  {
    en: {
      exp_type: 1,
      exp_short_name: "University",
      exp_full_name: "King Mongkut's University of Technology Thonburi",
      exp_ref: "https://www.kmutt.ac.th",
      exp_logo: {
        desktop: {
          url: "https://www.jgsee.kmutt.ac.th/v3/wp-content/uploads/2019/10/logo1.png",
          alt: "King Monkut's University of Technology Thonburi",
          width: 300,
          height: 300,
        },
        mobile: {
          url: "https://www.jgsee.kmutt.ac.th/v3/wp-content/uploads/2019/10/logo1.png",
          alt: "King Monkut's University of Technology Thonburi",
          width: 150,
          height: 150,
        },
      },
      exp_desc:
        "Computer Science (English Program), School of Information Technology (SIT)",
      exp_time_period: {
        from: 2019,
        to: "NOW",
      },
      exp_tools: [],
    },
    th: {
      exp_type: 1,
      exp_short_name: "อุดมศึกษา",
      exp_full_name: "มหาวิทาลัยเทคโนโลยีพระจอมเกล้าธนบุรี",
      exp_ref: "https://www.kmutt.ac.th",
      exp_logo: {
        desktop: {
          url: "https://www.jgsee.kmutt.ac.th/v3/wp-content/uploads/2019/10/logo1.png",
          alt: "King Monkut's University of Technology Thonburi",
          width: 300,
          height: 300,
        },
        mobile: {
          url: "https://www.jgsee.kmutt.ac.th/v3/wp-content/uploads/2019/10/logo1.png",
          alt: "King Monkut's University of Technology Thonburi",
          width: 150,
          height: 150,
        },
      },
      exp_desc:
        "วิทยาการคอมพิวเตอร์ (หลักสูตรภาษาอังกฤษ) คณะเทคโนโลยีสารสนเทศ (SIT)",
      exp_time_period: {
        from: 2019,
        to: "ปัจจุบัน",
      },
      exp_tools: [],
    },
  },
  {
    en: {
      exp_type: 2,
      exp_short_name: "Internship",
      exp_full_name: "Back-end Developer @ Artisan Digital Asia",
      exp_ref: "https://artisan.co.th/",
      exp_logo: {
        desktop: {
          url: "https://artisan.co.th/wp-content/uploads/2020/02/cover-fb-02.png",
          alt: "Artisan Digital Asia Logo",
          width: 400,
          height: 350,
        },
        mobile: {
          url: "https://artisan.co.th/wp-content/uploads/2020/02/cover-fb-02.png",
          alt: "Artisan Digital Asia Logo",
          width: 300,
          height: 250,
        },
      },
      exp_desc:
        "Underwent with Business Analysis, Stakeholders Discussion, ER Diagram, Project Structure, Project Management and Development",
      exp_time_period: {
        from: 2021,
        to: 2021,
      },
      exp_tools: ["Agile Methodology", "Strapi", "Next.JS", "AWS - EC2"],
      exp_proof: "",
    },
    th: {
      exp_type: 2,
      exp_short_name: "ฝึกงาน",
      exp_full_name: "Back-end Developer @ Artisan Digital Asia",
      exp_ref: "https://artisan.co.th/",
      exp_logo: {
        desktop: {
          url: "https://artisan.co.th/wp-content/uploads/2020/02/cover-fb-02.png",
          alt: "Artisan Digital Asia Logo",
          width: 400,
          height: 350,
        },
        mobile: {
          url: "https://artisan.co.th/wp-content/uploads/2020/02/cover-fb-02.png",
          alt: "Artisan Digital Asia Logo",
          width: 300,
          height: 250,
        },
      },
      exp_desc:
        "ลงมือทำงานจริงด้าน วิเคราะห์เชิงธุรกิจ, ปรึกษาหารือกับลูกค้า, ออกแบบความสัมพันธ์ของข้อมูล (ER Digram), ออกแบบโครงสร้างพื้นฐานของโปรเจค, บริหารโปรเจค และ พัฒนาระบบ",
      exp_time_period: {
        from: 2021,
        to: 2021,
      },
      exp_tools: ["แนวคิดการทำงานแบบ Agile", "Strapi", "Next.JS", "AWS - EC2"],
      exp_proof: "",
    },
  },
  {
    en: {
      exp_type: 2,
      exp_short_name: "Internship",
      exp_full_name: "Full-Stack Developer @ SCG Chemicals Co.Ltd",
      exp_ref: "https://www.scgchemicals.com/en",
      exp_logo: {
        desktop: {
          url: "https://www.watsadupedia.com/images/thumb/2/2c/Scg.png/320px-Scg.png",
          alt: "SCG Logo",
          width: 400,
          height: 350,
        },
        mobile: {
          url: "https://www.watsadupedia.com/images/thumb/2/2c/Scg.png/320px-Scg.png",
          alt: "SCG Logo",
          width: 300,
          height: 250,
        },
      },
      exp_desc:
        "Underwent with Business Analysis, Stakeholders Discussion, ER Diagram, Project Structure, Project Management and Development",
      exp_time_period: {
        from: 2021,
        to: 2021,
      },
      exp_tools: ["Agile Methodology", "Power Apps", "Sharepoint"],
      exp_proof: "",
    },
    th: {
      exp_type: 2,
      exp_short_name: "ฝึกงาน",
      exp_full_name: "Full-Stack Developer @ SCG Chemicals Co.Ltd",
      exp_ref: "https://www.scgchemicals.com/en",
      exp_logo: {
        desktop: {
          url: "https://www.watsadupedia.com/images/thumb/2/2c/Scg.png/320px-Scg.png",
          alt: "SCG Logo",
          width: 400,
          height: 350,
        },
        mobile: {
          url: "https://www.watsadupedia.com/images/thumb/2/2c/Scg.png/320px-Scg.png",
          alt: "SCG Logo",
          width: 300,
          height: 250,
        },
      },
      exp_desc:
        "ลงมือทำงานจริงด้าน วิเคราะห์เชิงธุรกิจ, คุยกับลูกค้า / ผู้ใช้งานจริง, ออกแบบความสัมพันธ์ของข้อมูล (ER Diagram), ออกแบบโครงสร้างพื้นฐานของโปรเจค, บริหารโปรเจคและพัฒนาระบบ",
      exp_time_period: {
        from: 2021,
        to: 2021,
      },
      exp_tools: ["แนวคิดการทำงาน Agile", "Power Apps", "Sharepoint"],
      exp_proof: "",
    },
  },
  {
    en: {
      exp_type: 3,
      exp_short_name: "Business",
      exp_full_name: "Co-Founder @ Alchemist Lab",
      exp_ref: "",
      exp_logo: {
        desktop: {
          url: AlchemistLogo,
          alt: "Alchemist Logo",
          width: 400,
          height: 350,
        },
        mobile: {
          url: AlchemistLogo,
          alt: "Alchemist Logo",
          width: 300,
          height: 250,
        },
      },
      exp_desc:
        "Business IT Solution Based Advisor. We intends to leading Thailand SME at the proper way in order to prepare for Digital Transformation.",
      exp_time_period: {
        from: 2021,
        to: "NOW",
      },
      exp_tools: [
        "Digital Marketing",
        "Software Development",
        "UX/UI Designing",
        "Content Creating",
      ],
    },
    th: {
      exp_type: 3,
      exp_short_name: "ธุรกิจส่วนตัว",
      exp_full_name: "Co-Founder @ Alchemist Lab",
      exp_ref: "",
      exp_logo: {
        desktop: {
          url: AlchemistLogo,
          alt: "Alchemist Logo",
          width: 400,
          height: 350,
        },
        mobile: {
          url: AlchemistLogo,
          alt: "Alchemist Logo",
          width: 300,
          height: 250,
        },
      },
      exp_desc:
        "ธุรกิจที่ปรึกษาด้านธุรกิจด้วย IT พวกเรามีความตั้งใจที่จะนำธุรกิจขนาดย่อมในประเทศไทยด้วยวิธีการที่ถูกต้องและมีประสิทธิภาพเพื่อพร้อมรับกับยุค Digital Transformation",
      exp_time_period: {
        from: 2021,
        to: "ปัจจุบัน",
      },
      exp_tools: [
        "การตลาดดิจิทัล",
        "พัฒนาซอฟแวร์",
        "ออกแบบตาม UX/UI",
        "ผลิตด้านสื่อดิจิทัลเพื่อการตลาด",
      ],
    },
  },
];

export default experiences;
