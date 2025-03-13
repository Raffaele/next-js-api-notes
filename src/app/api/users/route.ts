import { users, type User } from '@/app/api/users/_data/users';
import { type NextRequest } from 'next/server';

export const GET = async (request: NextRequest) => {
  const { searchParams } = request.nextUrl;
  const requestHeaders = new Headers(request.headers);

  const query = searchParams.get('query');
  const filteredUsers = query ? users.filter(({ fName, lName }) => fName.toLowerCase().includes(query.toLowerCase()) || lName.toLowerCase().includes(query.toLowerCase())) : users
  return Response.json({ result: filteredUsers, authorization: requestHeaders.get('Authorization') });
};

export const POST = async (request: Request) => {
  const { fName, lName } = await request.json();
  if (!fName || !lName) {
    return new Response(JSON.stringify({
      message: 'fName and lName are mandatory and cannot be empty strings'
    }), {
      headers: { 'Content-Type': 'application/json' },
      status: 400,
    })
  }
  const newUser: User = {
    fName,
    lName,
    id: users[users.length - 1].id + 1
  };
  users.push(newUser)
  return new Response(JSON.stringify(newUser), {
    headers: { 'Content-Type': 'application/json' },
    status: 201,
  })
};