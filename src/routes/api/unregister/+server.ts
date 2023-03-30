import { json, type RequestHandler } from '@sveltejs/kit';
import prismaClient from '$lib/db.server';

// /api/unregister POST

export const POST: RequestHandler = async (event) => {
  const data = await event.request.json();
  const { name } = data;

  // find user
  const response = await prismaClient.user.findFirst({
    where: { name },
  });

  if (!response) return json({ success: false, message: 'no user found' });

  const userId = response.id;

  // find userSettings for user and update
  const settingsRes = await prismaClient.userSettings.update({
    where: { userId },
    data: { approved: false },
  });

  if (settingsRes) return json({ success: true, message: userId });
  return json({ success: false, message: 'no userSettings found' });
};
