import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
    if (req.method !== "POST") {
        return res.status(405).json({
            success: false,
            message: "Method not allowed",
        });
    }

    try {
        const {
            name,
            company,
            email,
            phone,
            requirement,
            message,
        } = req.body || {};

        // -----------------------------------------
        // REQUIRED FIELD VALIDATION
        // -----------------------------------------

        if (
            !name ||
            !email ||
            !phone ||
            !requirement ||
            !message
        ) {
            return res.status(400).json({
                success: false,
                message: "Required fields are missing.",
            });
        }

        const cleanName = String(name).trim();
        const cleanCompany = String(company || "").trim();
        const cleanEmail = String(email).trim();
        const cleanPhone = String(phone).trim();
        const cleanRequirement = String(requirement).trim();
        const cleanMessage = String(message).trim();

        // -----------------------------------------
        // BASIC SERVER-SIDE VALIDATION
        // -----------------------------------------

        if (cleanName.length < 2 || cleanName.length > 80) {
            return res.status(400).json({
                success: false,
                message: "Invalid name.",
            });
        }

        if (
            !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(
                cleanEmail
            )
        ) {
            return res.status(400).json({
                success: false,
                message: "Invalid email address.",
            });
        }

        if (!/^\d{10,15}$/.test(cleanPhone)) {
            return res.status(400).json({
                success: false,
                message: "Invalid phone number.",
            });
        }

        if (cleanMessage.length < 10 || cleanMessage.length > 2000) {
            return res.status(400).json({
                success: false,
                message: "Invalid project message.",
            });
        }

        // -----------------------------------------
        // SEND EMAIL
        // -----------------------------------------

        const result = await resend.emails.send({
            from: "Bitsol Automation <bitsol@bitsol.in>",

            to: [
                "raam@bitsol.in",
                "bitsol@bitsol.in",
            ],

            replyTo: cleanEmail,

            subject:
                `New Website Enquiry - ${cleanRequirement}`,

            html: `
                <!DOCTYPE html>

                <html>
                <head>
                    <meta charset="UTF-8" />
                    <title>New Bitsol Website Enquiry</title>
                </head>

                <body
                    style="
                        margin:0;
                        padding:0;
                        background:#f4f5f2;
                        font-family:Arial,Helvetica,sans-serif;
                        color:#171a18;
                    "
                >

                    <div
                        style="
                            max-width:700px;
                            margin:40px auto;
                            background:#ffffff;
                            border:1px solid #e5e7e5;
                            border-radius:12px;
                            overflow:hidden;
                        "
                    >

                        <div
                            style="
                                padding:28px 32px;
                                background:#101311;
                                color:#ffffff;
                            "
                        >
                            <div
                                style="
                                    font-size:12px;
                                    letter-spacing:2px;
                                    font-weight:bold;
                                    color:#b7d62f;
                                "
                            >
                                BITSOL AUTOMATION
                            </div>

                            <h1
                                style="
                                    margin:12px 0 0;
                                    font-size:26px;
                                    line-height:1.2;
                                "
                            >
                                New Website Enquiry
                            </h1>
                        </div>


                        <div style="padding:32px;">

                            <div
                                style="
                                    margin-bottom:26px;
                                    padding:16px 18px;
                                    background:#f7f8f5;
                                    border-left:4px solid #b7d62f;
                                    border-radius:6px;
                                "
                            >
                                <strong>
                                    Requirement
                                </strong>

                                <div
                                    style="
                                        margin-top:6px;
                                        color:#555;
                                    "
                                >
                                    ${escapeHtml(cleanRequirement)}
                                </div>
                            </div>


                            <table
                                width="100%"
                                cellpadding="0"
                                cellspacing="0"
                                style="
                                    border-collapse:collapse;
                                "
                            >

                                <tr>
                                    <td
                                        style="
                                            padding:10px 0;
                                            width:140px;
                                            color:#777;
                                            font-size:13px;
                                        "
                                    >
                                        Name
                                    </td>

                                    <td
                                        style="
                                            padding:10px 0;
                                            font-weight:600;
                                        "
                                    >
                                        ${escapeHtml(cleanName)}
                                    </td>
                                </tr>


                                <tr>
                                    <td
                                        style="
                                            padding:10px 0;
                                            color:#777;
                                            font-size:13px;
                                        "
                                    >
                                        Company
                                    </td>

                                    <td
                                        style="
                                            padding:10px 0;
                                        "
                                    >
                                        ${escapeHtml(
                                            cleanCompany ||
                                            "Not provided"
                                        )}
                                    </td>
                                </tr>


                                <tr>
                                    <td
                                        style="
                                            padding:10px 0;
                                            color:#777;
                                            font-size:13px;
                                        "
                                    >
                                        Email
                                    </td>

                                    <td
                                        style="
                                            padding:10px 0;
                                        "
                                    >
                                        <a
                                            href="mailto:${escapeHtml(cleanEmail)}"
                                            style="
                                                color:#315f9d;
                                                text-decoration:none;
                                            "
                                        >
                                            ${escapeHtml(cleanEmail)}
                                        </a>
                                    </td>
                                </tr>


                                <tr>
                                    <td
                                        style="
                                            padding:10px 0;
                                            color:#777;
                                            font-size:13px;
                                        "
                                    >
                                        Phone
                                    </td>

                                    <td
                                        style="
                                            padding:10px 0;
                                        "
                                    >
                                        ${escapeHtml(cleanPhone)}
                                    </td>
                                </tr>

                            </table>


                            <div
                                style="
                                    margin-top:28px;
                                    padding-top:24px;
                                    border-top:1px solid #e5e7e5;
                                "
                            >

                                <div
                                    style="
                                        margin-bottom:10px;
                                        font-size:13px;
                                        font-weight:bold;
                                        color:#777;
                                        letter-spacing:1px;
                                    "
                                >
                                    PROJECT DETAILS
                                </div>

                                <div
                                    style="
                                        font-size:15px;
                                        line-height:1.7;
                                        white-space:pre-wrap;
                                        color:#303330;
                                    "
                                >
                                    ${escapeHtml(cleanMessage)}
                                </div>

                            </div>

                        </div>


                        <div
                            style="
                                padding:18px 32px;
                                background:#f7f8f5;
                                color:#888;
                                font-size:11px;
                            "
                        >
                            Submitted through
                            bitsol.in contact form
                        </div>

                    </div>

                </body>
                </html>
            `,
        });

        // -----------------------------------------
        // RESEND ERROR
        // -----------------------------------------

        if (result.error) {
            console.error("Resend error:", result.error);

            return res.status(500).json({
                success: false,
                message: "Unable to send enquiry email.",
            });
        }

        // -----------------------------------------
        // SUCCESS
        // -----------------------------------------

        return res.status(200).json({
            success: true,
            message: "Enquiry sent successfully.",
        });

    } catch (error) {
        console.error("Send email error:", error);

        return res.status(500).json({
            success: false,
            message: "Something went wrong while sending the enquiry.",
        });
    }
}


// =============================================
// HTML ESCAPE
// =============================================

function escapeHtml(value) {
    return String(value)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}