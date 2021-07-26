// 1: 'School'
// 2: 'Internship'
// 3: 'Business'
// 4: 'Work as a Employee'

const experiences = [
	{
		exp_type: 1,
		exp_short_name: 'High School',
		exp_full_name: 'Montfort College Secondary School',
		exp_desc: 'GIFTED Thai Curriculum',
		exp_ref: 'https://www.montfort.ac.th',
		exp_logo: {
			url: 'https://www.montfort.ac.th/wp-content/uploads/2020/10/LOGO-MC-5.png',
			alt: 'Montfort College Logo',
			width: 400,
			height: 350,
		},
		exp_time_period: {
			from: 2012,
			to: 2018,
		},
		exp_tools: [],
	},
	{
		exp_type: 1,
		exp_short_name: 'University',
		exp_full_name: "King Mongkut's University of Technology Thonburi",
		exp_ref: 'https://www.kmutt.ac.th',
		exp_logo: {
			url: 'https://www.jgsee.kmutt.ac.th/v3/wp-content/uploads/2019/10/logo1.png',
			alt: "King Monkut's University of Technology Thonburi",
			width: 300,
			height: 300,
		},
		exp_desc:
			'Computer Science (English Program), School of Information Technology (SIT)',
		exp_time_period: {
			from: 2019,
			to: 'NOW',
		},
		exp_tools: [],
	},
	{
		exp_type: 2,
		exp_short_name: 'Internship',
		exp_full_name: 'Back-end Developer @ Artisan Digital Asia',
		exp_ref: 'https://artisan.co.th/',
		exp_logo: {
			url: 'https://artisan.co.th/wp-content/uploads/2020/02/cover-fb-02.png',
			alt: 'Artisan Digital Asia Logo',
			width: 400,
			height: 350,
		},
		exp_desc:
			'Underwent with Business Analysis, Stakeholders Discussion, ER Diagram, Project Structure, Project Management and Development',
		exp_time_period: {
			from: 2021,
			to: 2021,
		},
		exp_tools: ['Agile Methodology', 'Strapi', 'Next.JS', 'AWS - EC2'],
		exp_proof: '',
	},
	{
		exp_type: 2,
		exp_short_name: 'Internship',
		exp_full_name: 'Full-Stack Developer @ SCG Chemicals Co.Ltd',
		exp_ref: 'https://www.scgchemicals.com/en',
		exp_logo: {
			url: 'https://www.watsadupedia.com/images/thumb/2/2c/Scg.png/320px-Scg.png',
			alt: 'SCG Logo',
			width: 400,
			height: 350,
		},
		exp_desc:
			'Underwent with Business Analysis, Stakeholders Discussion, ER Diagram, Project Structure, Project Management and Development',
		exp_time_period: {
			from: 2021,
			to: 2021,
		},
		exp_tools: ['Agile Methodology', 'Power Apps', 'Sharepoint'],
		exp_proof: '',
	},
	{
		exp_type: 3,
		exp_short_name: 'Business',
		exp_full_name: 'Co-Founder @ Alchemist',
		exp_ref: 'https://alchemist-softwarehouse.co/',
		exp_logo: {
			url: 'https://raw.githubusercontent.com/AlchemistSoftwareHouse/landingpage/master/public/logo/Alchemist-Logo-512x512.png?token=ANDPMM6SMG3PLUQHTYCYLBTA73WYC',
			alt: 'Alchemist Logo',
			width: 400,
			height: 350,
		},
		exp_desc:
			'Business IT Solution Based Advisor. We intends to leading Thailand SME at the proper way in order to prepare for Digital Transformation.',
		exp_time_period: {
			from: 2021,
			to: 'NOW',
		},
		exp_tools: [
			'Digital Marketing',
			'Software Development',
			'UX/UI Designing',
			'Content Creating',
		],
	},
]

export default experiences
