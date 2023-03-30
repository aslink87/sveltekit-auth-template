import { json, type RequestHandler } from '@sveltejs/kit';
import prismaClient from '$lib/db.server';

// /api/register POST

export const POST: RequestHandler = async (event) => {
  const data = await event.request.formData();
  const name = data.get('name') as string;

  if (!name) {
    return json({ success: false, message: 'no name submitted' });
  }

  // find user
  const response = await prismaClient.user.findFirst({
    where: { name },
  });

  if (!response) return json({ success: false, message: 'no user found' });

  const userId = response.id;

  // find userSettings for user and update
  const settingsRes = await prismaClient.userSettings.update({
    where: { userId },
    data: { approved: true },
  });

  if (settingsRes) return json({ success: true });
  return json({ success: false, message: 'no userSettings found' });
};
