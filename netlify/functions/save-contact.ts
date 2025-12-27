import { Handler } from '@netlify/functions';
import { neon } from '@neondatabase/serverless';

const sql = neon(process.env.NETLIFY_DATABASE_URL!);

export const handler: Handler = async (event, context) => {
  try {
    if (event.httpMethod !== 'POST') {
      return { statusCode: 405, body: 'Method Not Allowed' };
    }

    const { name, email, phone, message } = JSON.parse(event.body!);

    await sql`
      INSERT INTO contact_messages (name, email, phone, message)
      VALUES (${name}, ${email}, ${phone}, ${message})
    `;

    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Message saved successfully!' }),
    };
  } catch (error: any) {
    console.error('❌ Error saving message:', error); // This will show in Netlify logs
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Internal Server Error' }),
    };
  }
};
