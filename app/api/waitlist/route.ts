import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'
import { Resend } from 'resend'
import { getSupabaseClient } from '@/lib/supabase'

const schema = z.object({
  email: z.string().email('Invalid email address').max(255).trim().toLowerCase(),
  name: z.string().max(100).trim().optional(),
})

export async function POST(request: NextRequest) {
  let body: unknown
  try {
    body = await request.json()
  } catch {
    return NextResponse.json(
      { error: 'invalid_email', message: 'Invalid request body' },
      { status: 400 }
    )
  }

  const result = schema.safeParse(body)
  if (!result.success) {
    return NextResponse.json(
      { error: 'invalid_email', message: 'Please enter a valid email address' },
      { status: 400 }
    )
  }

  const { email, name } = result.data

  const supabase = getSupabaseClient()
  const { error } = await supabase.from('waitlist').insert({ email, name })

  if (error) {
    if (error.code === '23505') {
      return NextResponse.json({ error: 'already_registered' }, { status: 409 })
    }
    return NextResponse.json(
      { error: 'server_error', message: 'Something went wrong. Please try again.' },
      { status: 500 }
    )
  }

  // Send confirmation email — failure does not affect the API response
  try {
    const resendKey = process.env.RESEND_API_KEY
    const fromEmail = process.env.RESEND_FROM_EMAIL
    if (resendKey && fromEmail) {
      const resend = new Resend(resendKey)
      const firstName = name?.split(' ')[0] ?? 'there'
      await resend.emails.send({
        from: fromEmail,
        to: email,
        subject: "You're on the Hadi waitlist!",
        html: `
<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"></head>
<body style="margin:0;padding:0;background-color:#f8fafc;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#f8fafc;padding:40px 16px;">
    <tr>
      <td align="center">
        <table width="100%" cellpadding="0" cellspacing="0" style="max-width:560px;background-color:#ffffff;border-radius:24px;overflow:hidden;box-shadow:0 4px 24px rgba(0,0,0,0.06);">
          <!-- Header -->
          <tr>
            <td style="background:linear-gradient(135deg,#064e3b 0%,#065f46 100%);padding:40px 40px 32px;">
              <p style="margin:0;font-size:24px;font-weight:800;color:#ffffff;letter-spacing:-0.5px;">Hadi AI</p>
              <p style="margin:8px 0 0;font-size:13px;color:#6ee7b7;letter-spacing:0.5px;text-transform:uppercase;">Islamic Education, Reimagined</p>
            </td>
          </tr>
          <!-- Body -->
          <tr>
            <td style="padding:40px;">
              <p style="margin:0 0 16px;font-size:28px;font-weight:800;color:#0f172a;line-height:1.2;">
                You&rsquo;re on the list, ${firstName}!
              </p>
              <p style="margin:0 0 24px;font-size:16px;color:#475569;line-height:1.6;">
                Thank you for joining the Hadi waitlist. We&rsquo;re building AI-powered study tools for Islamic education — grounded in authentic scholarship, designed for modern learners.
              </p>
              <table cellpadding="0" cellspacing="0" style="background:#f0fdf4;border-radius:16px;padding:24px;width:100%;margin-bottom:24px;">
                <tr>
                  <td>
                    <p style="margin:0 0 8px;font-size:13px;font-weight:700;color:#065f46;text-transform:uppercase;letter-spacing:0.5px;">What to expect</p>
                    <p style="margin:0;font-size:15px;color:#374151;line-height:1.6;">
                      Early access to the platform &bull; Exclusive updates as we build &bull; A chance to shape the product with your feedback
                    </p>
                  </td>
                </tr>
              </table>
              <p style="margin:0;font-size:15px;color:#64748b;line-height:1.6;">
                We&rsquo;ll reach out as soon as we&rsquo;re ready for early users. Until then, feel free to reply to this email with any questions or thoughts.
              </p>
            </td>
          </tr>
          <!-- Footer -->
          <tr>
            <td style="padding:24px 40px;border-top:1px solid #f1f5f9;">
              <p style="margin:0;font-size:13px;color:#94a3b8;text-align:center;">
                &copy; ${new Date().getFullYear()} Hadi AI &mdash; You received this because you signed up at hadiai.com
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`,
      })
    }
  } catch (emailError) {
    console.error('[waitlist] Failed to send confirmation email:', emailError)
  }

  return NextResponse.json({ success: true })
}
