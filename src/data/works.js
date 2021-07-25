// 1: 'dev'
// 2: 'management/operation'
// 3: 'digital marketing'

const works = [
	{
		id: 1,
		banner: {
			url: 'https://storage.googleapis.com/personal-website-non-nontra/wungsun-clinic/wsclinic-%E0%B8%AB%E0%B8%99%E0%B9%89%E0%B8%B2%E0%B8%87%E0%B8%B2%E0%B8%99/IMG_9677.png',
			alt: 'Wungsun Clinic',
		},
		work_type: [1, 2],
		short_work_name: 'Wungsun Clinic',
		work_name: 'Wungsun Clinic - OPD Online System',
		short_desc: 'Dermatologist Online Treatment System',
		url: 'https://wungsun-clinic.online',
		description:
			"Wungsun Clinic's OPD (Out Patient Department) Online System. This system has been based on web-application or generally, they're called 'Website'. This application is allowed any patients who are suffering in dermatology submitting their disease and get the treatment. Also, the doctor and clinic's worker would be able to performing the treatment through the application.",
		partners: 'Wungsun Clinic - คลินิคหมอวังสันต์',
		responsible:
			'Business Analysis, Researching, Project Management, Development, System Engineering and Vulnerability Prevention',
		tech_stack: ['Next.JS', 'Node.JS', 'PostgreSQL', 'Docker', 'NGINX'],
		pictures: [
			{
				url: 'https://storage.googleapis.com/personal-website-non-nontra/wungsun-clinic/wsclinic-1.png',
				alt: '',
			},
			{
				url: 'https://storage.googleapis.com/personal-website-non-nontra/wungsun-clinic/wsclinic-1.png',
				alt: '',
			},
			{
				url: 'https://storage.googleapis.com/personal-website-non-nontra/wungsun-clinic/wsclinic-3.png',
				alt: '',
			},
		],
	},
	{
		id: 2,
		work_type: [1],
		banner: {
			url: 'http://www.kiid.city/wp-content/uploads/2017/11/Artboard-1-copy.jpg',
			alt: 'Kluaynamthai Innovative Industries District',
		},
		short_work_name: 'KiiD Event Attendance',
		work_name: 'KiiD Event Attendance Web Application',
		short_desc: 'Event Establishment Platform',
		url: 'https://kiidincubeprogram.com',
		description:
			'KiiD Event Attendance is a web-application which is capable of establishing the event, attendee management, staff assigning and QR code checking in.',
		partners:
			'KiiD - Kluay Nam Thai Innovative Industries District, NIA - National Innovation Agency Thailand',
		responsible: [
			'Business Analysis (Back-end System), Data Relationship Declaration (ER Diagram), System Engineering and Vulnerability Prevention',
		],
		tech_stack: ['Vue.JS', 'Node.JS', 'PostgreSQL', 'Docker', 'NGINX'],
		pictures: [
			'https://storage.googleapis.com/personal-website-non-nontra/kiid/kiid-1.png',
			'https://storage.googleapis.com/personal-website-non-nontra/kiid/kiid-2.png',
			'https://storage.googleapis.com/personal-website-non-nontra/kiid/kiid-3.png',
		],
	},
]

export default works
