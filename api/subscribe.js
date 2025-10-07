// Vercel Serverless Function pour collecter les emails via Resend
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  // CORS headers
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,POST');
  res.setHeader('Access-Control-Allow-Headers', 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version');

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { email, ville } = req.body;

  // Validation
  if (!email || !email.includes('@')) {
    return res.status(400).json({ error: 'Email invalide' });
  }

  try {
    // 1. Envoyer un email de confirmation à l'utilisateur
    await resend.emails.send({
      from: 'TROCS <noreply@trocetpuce.com>',
      to: email,
      subject: 'Bienvenue sur TROCS ! 🎉',
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <style>
              body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
              .container { max-width: 600px; margin: 0 auto; padding: 20px; }
              .header { background-color: #000; color: #fff; padding: 30px; text-align: center; border-radius: 8px 8px 0 0; }
              .content { background-color: #f9f9f9; padding: 30px; border-radius: 0 0 8px 8px; }
              .button { display: inline-block; background-color: #000; color: #fff; padding: 12px 30px; text-decoration: none; border-radius: 5px; margin: 20px 0; }
              .footer { text-align: center; margin-top: 20px; font-size: 12px; color: #666; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h1>C'est bon ! 🚀</h1>
              </div>
              <div class="content">
                <h2>Bienvenue dans l'aventure TROCS !</h2>
                <p>On te prévient dès que l'application est disponible.</p>
                <p>En attendant, voici ce que tu peux faire :</p>
                <ul>
                  <li>📱 Suis-nous sur Instagram pour suivre l'aventure</li>
                  <li>🎁 Tu auras des TrocCoins offerts au lancement</li>
                  <li>⚡ Tu feras partie des premiers à troquer</li>
                </ul>
                <p><strong>Rappelle-toi :</strong> Pas d'argent, juste du troc. C'est tout.</p>
                <div style="text-align: center;">
                  <a href="https://trocetpuce.com" class="button">Voir le site</a>
                </div>
              </div>
              <div class="footer">
                <p>TROCS - L'app qui réinvente l'échange</p>
                <p>Fait avec ❤️ à Roubaix</p>
                <p><a href="https://trocetpuce.com">trocetpuce.com</a></p>
              </div>
            </div>
          </body>
        </html>
      `,
    });

    // 2. Notifier l'équipe TROCS
    await resend.emails.send({
      from: 'TROCS Notifications <noreply@trocetpuce.com>',
      to: 'contact@trocetpuce.com',
      subject: `Nouvelle inscription : ${email}`,
      html: `
        <h2>Nouvelle inscription à la liste de diffusion</h2>
        <p><strong>Email :</strong> ${email}</p>
        ${ville ? `<p><strong>Ville :</strong> ${ville}</p>` : ''}
        <p><strong>Date :</strong> ${new Date().toLocaleString('fr-FR')}</p>
      `,
    });

    return res.status(200).json({
      success: true,
      message: 'Inscription réussie !'
    });

  } catch (error) {
    console.error('Erreur Resend:', error);
    return res.status(500).json({
      error: 'Erreur lors de l\'inscription',
      details: error.message
    });
  }
}
