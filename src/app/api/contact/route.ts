import { type NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const SUBJECT_MAP: Record<string, string> = {
	duvida: "Dúvida",
	sugestao: "Sugestão",
	parceria: "Parceria",
	imprensa: "Imprensa",
	outro: "Outro",
};

export async function POST(request: NextRequest) {
	try {
		const body = await request.json();
		const { name, email, subject, message } = body || {};

		if (!name || !email || !subject || !message) {
			return NextResponse.json(
				{
					error:
						"Todos os campos são obrigatórios (nome, email, assunto e mensagem).",
				},
				{ status: 400 },
			);
		}

		const readableSubject = SUBJECT_MAP[subject] || subject;
		const recipientEmail =
			process.env.CONTACT_EMAIL || "contato@kratikos.com.br";
		const fromEmail =
			process.env.RESEND_FROM_EMAIL || "Kratikos <onboarding@resend.dev>";

		const emailResponse = await resend.emails.send({
			from: fromEmail,
			to: recipientEmail,
			replyTo: `${name} <${email}>`,
			subject: `[Contato Site] ${readableSubject} - ${name}`,
			html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8" />
            <title>Nova Mensagem de Contato - Kratikos</title>
          </head>
          <body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; background-color: #000000; color: #ffffff; padding: 24px; margin: 0;">
            <div style="max-width: 600px; margin: 0 auto; background: #111111; border: 1px solid #222222; border-radius: 16px; padding: 32px;">
              <div style="margin-bottom: 24px;">
                <img src="https://kratikos.com.br/visual-identity/logo-horizontal-light.svg" alt="Kratikos" style="height: 32px; width: auto; display: block;" />
              </div>
              <h2 style="color: #ffffff; font-size: 22px; margin-top: 0; margin-bottom: 20px; border-bottom: 1px solid #222222; padding-bottom: 16px;">
                Nova Mensagem de Contato
              </h2>
              <div style="margin-bottom: 16px;">
                <strong style="color: #888888; font-size: 13px; text-transform: uppercase; letter-spacing: 0.5px;">Nome</strong>
                <div style="color: #ffffff; font-size: 16px; margin-top: 4px;">${name}</div>
              </div>
              <div style="margin-bottom: 16px;">
                <strong style="color: #888888; font-size: 13px; text-transform: uppercase; letter-spacing: 0.5px;">Email de Contato</strong>
                <div style="color: #ffffff; font-size: 16px; margin-top: 4px;">
                  <a href="mailto:${email}" style="color: #ffffff; text-decoration: underline;">${email}</a>
                </div>
              </div>
              <div style="margin-bottom: 16px;">
                <strong style="color: #888888; font-size: 13px; text-transform: uppercase; letter-spacing: 0.5px;">Assunto</strong>
                <div style="color: #ffffff; font-size: 16px; margin-top: 4px;">${readableSubject}</div>
              </div>
              <div style="margin-bottom: 28px;">
                <strong style="color: #888888; font-size: 13px; text-transform: uppercase; letter-spacing: 0.5px;">Mensagem</strong>
                <div style="color: #e5e5e5; font-size: 15px; line-height: 1.6; margin-top: 8px; background: #1a1a1a; border-radius: 12px; padding: 16px; white-space: pre-wrap; border: 1px solid #282828;">${message}</div>
              </div>
              <div style="font-size: 13px; color: #888888; border-top: 1px solid #222222; padding-top: 20px; text-align: center;">
                Enviado de <a href="https://kratikos.com.br/contato" style="color: #ffffff; text-decoration: underline;">https://kratikos.com.br/contato</a>
              </div>
            </div>
          </body>
        </html>
      `,
			text: `Nova mensagem de contato do site Kratikos:\n\nNome: ${name}\nEmail: ${email}\nAssunto: ${readableSubject}\n\nMensagem:\n${message}\n\nEnviado de https://kratikos.com.br/contato`,
		});

		if (emailResponse.error) {
			console.error("Erro ao enviar email via Resend:", emailResponse.error);
			return NextResponse.json(
				{
					error:
						emailResponse.error.message ||
						"Falha ao enviar o email de contato.",
				},
				{ status: 500 },
			);
		}

		return NextResponse.json({ success: true, id: emailResponse.data?.id });
	} catch (err: unknown) {
		const errorMsg =
			err instanceof Error
				? err.message
				: "Erro interno do servidor ao processar contato.";
		console.error("Exception no handler de contato:", err);
		return NextResponse.json({ error: errorMsg }, { status: 500 });
	}
}
