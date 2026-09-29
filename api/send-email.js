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
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>New Website Enquiry - Bitsol Automation</title>
</head>

<body style="
    margin:0;
    padding:0;
    width:100%;
    background:#FFFAF3;
    font-family:Arial,Helvetica,sans-serif;
    color:#222222;
">

    <!-- OUTER WRAPPER -->
    <table
        width="100%"
        cellpadding="0"
        cellspacing="0"
        border="0"
        style="
            width:100%;
            background:#FFFAF3;
            margin:0;
            padding:0;
        "
    >

        <tr>

            <td
                align="center"
                style="
                    padding:40px 16px;
                "
            >

                <!-- MAIN CONTAINER -->
                <table
                    width="100%"
                    cellpadding="0"
                    cellspacing="0"
                    border="0"
                    style="
                        max-width:720px;
                        width:100%;
                        background:#FFFFFF;
                        border:1px solid #E8E3DE;
                    "
                >

                    <!-- =================================================
                         TOP BRAND BAR
                         ================================================= -->

                    <tr>

                        <td
                            style="
                                background:#111111;
                                padding:20px 28px;
                            "
                        >

                            <table
                                width="100%"
                                cellpadding="0"
                                cellspacing="0"
                                border="0"
                            >

                                <tr>

                                    <td
                                        style="
                                            color:#F62440;
                                            font-size:13px;
                                            font-weight:700;
                                            letter-spacing:2px;
                                            text-transform:uppercase;
                                        "
                                    >
                                        BITSOL AUTOMATION
                                    </td>

                                    <td
                                        align="right"
                                        style="
                                            color:#F5F5F5;
                                            font-size:11px;
                                            font-weight:600;
                                            letter-spacing:1px;
                                            text-transform:uppercase;
                                        "
                                    >
                                        WEBSITE ENQUIRY
                                    </td>

                                </tr>

                            </table>

                        </td>

                    </tr>


                    <!-- =================================================
                         RED ACCENT
                         ================================================= -->

                    <tr>

                        <td
                            style="
                                height:5px;
                                background:#F62440;
                                font-size:0;
                                line-height:0;
                            "
                        >
                            &nbsp;
                        </td>

                    </tr>


                    <!-- =================================================
                         HEADER
                         ================================================= -->

                    <tr>

                        <td
                            style="
                                padding:38px 40px 30px 40px;
                                background:#FFFFFF;
                            "
                        >

                            <div
                                style="
                                    color:#6B6B6B;
                                    font-size:11px;
                                    font-weight:700;
                                    letter-spacing:2px;
                                    text-transform:uppercase;
                                    margin-bottom:12px;
                                "
                            >
                                PROJECT ENQUIRY
                            </div>


                            <div
                                style="
                                    color:#111111;
                                    font-size:34px;
                                    line-height:1.1;
                                    font-weight:700;
                                    letter-spacing:-1px;
                                "
                            >
                                New Website Enquiry
                            </div>


                            <!-- REQUIREMENT -->
                            <table
                                cellpadding="0"
                                cellspacing="0"
                                border="0"
                                style="
                                    margin-top:24px;
                                    width:100%;
                                "
                            >

                                <tr>

                                    <td
                                        style="
                                            border-left:4px solid #F62440;
                                            background:#FFFAF3;
                                            padding:14px 18px;
                                        "
                                    >

                                        <div
                                            style="
                                                color:#111111;
                                                font-size:11px;
                                                font-weight:700;
                                                letter-spacing:1px;
                                                text-transform:uppercase;
                                                margin-bottom:5px;
                                            "
                                        >
                                            Requirement
                                        </div>

                                        <div
                                            style="
                                                color:#222222;
                                                font-size:16px;
                                                font-weight:600;
                                            "
                                        >
                                            ${escapeHtml(cleanRequirement)}
                                        </div>

                                    </td>

                                </tr>

                            </table>

                        </td>

                    </tr>


                    <!-- =================================================
                         DETAILS SECTION
                         ================================================= -->

                    <tr>

                        <td
                            style="
                                padding:0 40px 36px 40px;
                            "
                        >

                            <!-- SECTION TITLE -->

                            <table
                                width="100%"
                                cellpadding="0"
                                cellspacing="0"
                                border="0"
                                style="
                                    border-bottom:1px solid #E8E3DE;
                                "
                            >

                                <tr>

                                    <td
                                        style="
                                            padding:0 0 14px 0;
                                            color:#111111;
                                            font-size:13px;
                                            font-weight:700;
                                            letter-spacing:1.5px;
                                            text-transform:uppercase;
                                        "
                                    >
                                        Contact Details
                                    </td>

                                </tr>

                            </table>


                            <!-- NAME -->

                            <table
                                width="100%"
                                cellpadding="0"
                                cellspacing="0"
                                border="0"
                                style="
                                    border-bottom:1px solid #F0ECE7;
                                "
                            >

                                <tr>

                                    <td
                                        width="35%"
                                        style="
                                            padding:17px 10px 17px 0;
                                            color:#6B6B6B;
                                            font-size:13px;
                                        "
                                    >
                                        Name
                                    </td>

                                    <td
                                        style="
                                            padding:17px 0;
                                            color:#111111;
                                            font-size:14px;
                                            font-weight:600;
                                        "
                                    >
                                        ${escapeHtml(cleanName)}
                                    </td>

                                </tr>

                            </table>


                            <!-- COMPANY -->

                            ${cleanCompany
                    ? `
                            <table
                                width="100%"
                                cellpadding="0"
                                cellspacing="0"
                                border="0"
                                style="
                                    border-bottom:1px solid #F0ECE7;
                                "
                            >

                                <tr>

                                    <td
                                        width="35%"
                                        style="
                                            padding:17px 10px 17px 0;
                                            color:#6B6B6B;
                                            font-size:13px;
                                        "
                                    >
                                        Company
                                    </td>

                                    <td
                                        style="
                                            padding:17px 0;
                                            color:#111111;
                                            font-size:14px;
                                            font-weight:600;
                                        "
                                    >
                                        ${escapeHtml(cleanCompany)}
                                    </td>

                                </tr>

                            </table>
                            `
                    : ""
                }


                            <!-- EMAIL -->

                            <table
                                width="100%"
                                cellpadding="0"
                                cellspacing="0"
                                border="0"
                                style="
                                    border-bottom:1px solid #F0ECE7;
                                "
                            >

                                <tr>

                                    <td
                                        width="35%"
                                        style="
                                            padding:17px 10px 17px 0;
                                            color:#6B6B6B;
                                            font-size:13px;
                                        "
                                    >
                                        Email
                                    </td>

                                    <td
                                        style="
                                            padding:17px 0;
                                            font-size:14px;
                                        "
                                    >

                                        <a
                                            href="mailto:${escapeHtml(cleanEmail)}"
                                            style="
                                                color:#F62440;
                                                text-decoration:none;
                                                font-weight:600;
                                            "
                                        >
                                            ${escapeHtml(cleanEmail)}
                                        </a>

                                    </td>

                                </tr>

                            </table>


                            <!-- PHONE -->

                            <table
                                width="100%"
                                cellpadding="0"
                                cellspacing="0"
                                border="0"
                                style="
                                    border-bottom:1px solid #F0ECE7;
                                "
                            >

                                <tr>

                                    <td
                                        width="35%"
                                        style="
                                            padding:17px 10px 17px 0;
                                            color:#6B6B6B;
                                            font-size:13px;
                                        "
                                    >
                                        Phone
                                    </td>

                                    <td
                                        style="
                                            padding:17px 0;
                                            color:#111111;
                                            font-size:14px;
                                            font-weight:600;
                                        "
                                    >
                                        +91 ${escapeHtml(cleanPhone)}
                                    </td>

                                </tr>

                            </table>

                        </td>

                    </tr>


                    <!-- =================================================
                         PROJECT DETAILS
                         ================================================= -->

                    <tr>

                        <td
                            style="
                                padding:32px 40px;
                                background:#FFFAF3;
                                border-top:1px solid #E8E3DE;
                                border-bottom:1px solid #E8E3DE;
                            "
                        >

                            <div
                                style="
                                    color:#111111;
                                    font-size:13px;
                                    font-weight:700;
                                    letter-spacing:1.5px;
                                    text-transform:uppercase;
                                    margin-bottom:16px;
                                "
                            >
                                Project Details
                            </div>


                            <div
                                style="
                                    color:#222222;
                                    font-size:15px;
                                    line-height:1.75;
                                    white-space:pre-line;
                                "
                            >
                                ${escapeHtml(cleanMessage)}
                            </div>

                        </td>

                    </tr>


                    <!-- =================================================
                         ACTION AREA
                         ================================================= -->

                    <tr>

                        <td
                            style="
                                padding:34px 40px;
                            "
                        >

                            <table
                                width="100%"
                                cellpadding="0"
                                cellspacing="0"
                                border="0"
                            >

                                <tr>

                                    <td>

                                        <div
                                            style="
                                                color:#6B6B6B;
                                                font-size:11px;
                                                font-weight:600;
                                                letter-spacing:1px;
                                                text-transform:uppercase;
                                                margin-bottom:7px;
                                            "
                                        >
                                            Submitted through
                                        </div>

                                        <div
                                            style="
                                                color:#111111;
                                                font-size:14px;
                                                font-weight:600;
                                            "
                                        >
                                            bitsol.in/contactus.html
                                        </div>

                                    </td>


                                    <td
                                        align="right"
                                    >

                                        <a
                                            href="mailto:${escapeHtml(cleanEmail)}"
                                            style="
                                                display:inline-block;
                                                padding:13px 20px;
                                                background:#F62440;
                                                color:#FFFFFF;
                                                text-decoration:none;
                                                font-size:12px;
                                                font-weight:700;
                                                letter-spacing:0.5px;
                                                text-transform:uppercase;
                                            "
                                        >
                                            Reply to Enquiry
                                        </a>

                                    </td>

                                </tr>

                            </table>

                        </td>

                    </tr>


                    <!-- =================================================
                         FOOTER
                         ================================================= -->

                    <tr>

                        <td
                            style="
                                padding:22px 40px;
                                background:#111111;
                            "
                        >

                            <table
                                width="100%"
                                cellpadding="0"
                                cellspacing="0"
                                border="0"
                            >

                                <tr>

                                    <td
                                        style="
                                            color:#F5F5F5;
                                            font-size:11px;
                                            line-height:1.5;
                                        "
                                    >
                                        Bitsol Automation
                                        <br>
                                        Industrial Automation & Engineering
                                    </td>


                                    <td
                                        align="right"
                                        style="
                                            color:#6B6B6B;
                                            font-size:10px;
                                            line-height:1.5;
                                        "
                                    >
                                        bitsol.in
                                    </td>

                                </tr>

                            </table>

                        </td>

                    </tr>

                </table>

                <!-- END MAIN CONTAINER -->


                <!-- =====================================================
                     EMAIL DISCLAIMER
                     ===================================================== -->

                <table
                    width="100%"
                    cellpadding="0"
                    cellspacing="0"
                    border="0"
                    style="
                        max-width:720px;
                    "
                >

                    <tr>

                        <td
                            align="center"
                            style="
                                padding:18px 20px 0 20px;
                                color:#999999;
                                font-size:10px;
                                line-height:1.5;
                            "
                        >
                            This enquiry was submitted through the
                            Bitsol Automation website.
                        </td>

                    </tr>

                </table>

            </td>

        </tr>

    </table>

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