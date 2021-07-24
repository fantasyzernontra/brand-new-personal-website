// 1: 'dev'
// 2: 'management/operation'
// 3: 'digital marketing'

const works = [
	{
		work_type: [1, 2],
		work_name: 'Wungsun Clinic - OPD Online System',
		url: 'https://wungsun-clinic.online',
		description:
			"Wungsun Clinic's OPD (Out Patient Department) Online System. This system has been based on web-application or generally, they're called 'Website'. This application is allowed any patients who are suffering in dermatology submitting their disease and get the treatment. Also, the doctor and clinic's worker would be able to performing the treatment through the application.",
		partners: 'Wungsun Clinic - คลินิคหมอวังสันต์',
		responsible:
			'Business Analysis, Researching, Project Management, Development, System Engineering and Vulnerability Prevention',
		tech_stack: ['Next.JS', 'Node.JS', 'PostgreSQL', 'Docker', 'NGINX'],
		pictures: [],
	},
	{
		work_type: [1],
		work_name: 'KiiD Event Attendance Web Application',
		url: 'https://kiidincubeprogram.com',
		description:
			'KiiD Event Attendance is a web-application which is capable of establishing the event, attendee management, staff assigning and QR code checking in.',
		partners:
			'KiiD - Kluay Nam Thai Innovative Industries District, NIA - National Innovation Agency Thailand',
		responsible: [
			'Business Analysis (Back-end System), Data Relationship Declaration (ER Diagram), System Engineering and Vulnerability Prevention',
		],
		tech_stack: ['Vue.JS', 'Node.JS', 'PostgreSQL', 'Docker', 'NGINX'],
		pictures: [],
	},
]

export default works
