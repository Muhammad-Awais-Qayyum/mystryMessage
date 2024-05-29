import OpenAI from 'openai';
import { OpenAIStream, StreamingTextResponse } from 'ai';

// Create an OpenAI API client
// but configure it to point to fireworks.ai
const fireworks = new OpenAI({
    apiKey: process.env.FIREWORKS_API_KEY || '',
    baseURL: 'https://api.fireworks.ai/inference/v1',
});

export async function POST(req: Request) {
    // Extract the `messages` from the body of the request
    try {
        const prompt = "Create a list of three open-ended and engaging questions formatted as a single string. Each question should be separated by '||'. These questions are for an anonymous social messaging platform, like Qooh.me, and should be suitable for a diverse audience. Avoid personal or sensitive topics, focusing instead on universal themes that encourage friendly interaction. For example, your output should be structured like this: 'What's a hobby you've recently started? | | If you could have dinner with any historical figure, who would it be? || What's a simple thing that makes you happy?'. Ensure the questions are intriguing, foster curiosity, and contribute to a positive and welcoming conversational environment."

        // Ask Fireworks for a streaming chat completion using Llama 2 70b model
        // @see https://app.fireworks.ai/models/fireworks/llama-v2-70b-chat
        const response = await fireworks.completions.create({
            model: 'accounts/fireworks/models/code-llama-70b',
            stream: true,
            max_tokens: 300,
            prompt,
        });
        // Convert the response into a friendly text-stream.
        const stream = OpenAIStream(response);
        // Respond with the stream
        return new StreamingTextResponse(stream);
    } catch (error) {
        if (error instanceof OpenAI.APIError) {
            const { name, status, headers, message } = error
            return Response.json({
                name, status, headers, message
            }, { status })
        } else {
            console.error('An unexpected error occured')
            throw error
        }
    }
}