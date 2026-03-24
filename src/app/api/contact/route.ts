import { NextResponse } from 'next/server';

export async function POST(request: Request) {
    try {
        const data = await request.json();

        // Check if the developer added the Web3Forms access key
        const accessKey = process.env.WEB3FORMS_ACCESS_KEY;

        if (!accessKey) {
            console.warn("No WEB3FORMS_ACCESS_KEY found. Contact form running in simulation mode.");
            console.log("Form data:", data);
            await new Promise((resolve) => setTimeout(resolve, 1000));
            return NextResponse.json(
                { message: "Simulated success (Access key missing)" },
                { status: 200 }
            );
        }

        // Send the email using Web3Forms Free API
        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
            body: JSON.stringify({
                access_key: accessKey,
                subject: `New Lead: ${data.service || 'General Inquiry'} from ${data.name}`,
                from_name: data.name,
                name: data.name,
                email: data.email,
                phone: data.phone || "Not provided",
                service_needed: data.service,
                message: data.message,
            }),
        });

        const result = await response.json();

        if (result.success) {
            return NextResponse.json(
                { message: "Successfully submitted contact form" },
                { status: 200 }
            );
        } else {
            console.error("Web3Forms API Error:", result);
            return NextResponse.json(
                { error: "Failed to send message via email API" },
                { status: 500 }
            );
        }

    } catch (error) {
        console.error("Error processing contact form:", error);
        return NextResponse.json(
            { error: "Internal server error" },
            { status: 500 }
        );
    }
}
