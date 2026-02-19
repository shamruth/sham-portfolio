import { Resend } from 'resend';

export default async (req, res) => {
	if (req.method !== 'POST') {
		return res.status(405).json({ error: 'Method Not Allowed' });
	}
	const { name, email, message } = req.body;
	if (!name || !email || !message) {
		return res.status(400).json({ error: 'All fields required.' });
	}
	try {
		const resend = new Resend(process.env.RESEND_API_KEY);
		await resend.emails.send({
			from: 'Portfolio Contact <your@email.com>',
			to: 'your@email.com',
			subject: `Portfolio Contact: ${name}`,
			html: `<p><b>Name:</b> ${name}<br/><b>Email:</b> ${email}<br/><b>Message:</b><br/>${message}</p>`
		});
		return res.status(200).json({ success: true });
	} catch (err) {
		return res.status(500).json({ error: 'Failed to send email.' });
	}
};
