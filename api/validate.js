export default function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { license } = req.body;
    const validLicenses = ['19_Cb1K_NJjlQCpWdbQQyl0bf3zX23GMFs58BzQqPygw'];

    const isValid = validLicenses.includes(license);

    return res.status(200).json({ valid: isValid });
  } catch (err) {
    return res.status(400).json({ valid: false, error: 'Invalid request' });
  }
}
