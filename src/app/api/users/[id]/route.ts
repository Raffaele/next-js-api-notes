import { users } from '@/app/api/users/_data/users';

type Params = { params: Promise<{ id: string }> }

export const GET = async (request: Request, { params }: Params) => {
  const { id } = await params;
  const selectedUser = users.find((user) => user.id === +id);
  if (!selectedUser) {
    return new Response(JSON.stringify({
      message: 'User not found'
    }), {
      headers: { 'Content-Type': 'application/json' },
      status: 404,
    })
  }

  return new Response(JSON.stringify(selectedUser), {
    headers: { 'Content-Type': 'application/json' },
    status: 200,
  })
};

export const PATCH = async (request: Request, { params }: Params) => {
  const { id } = await params;
  const body = await request.json();
  const { fName, lName } = body;
  if (!fName && !lName) {
    return new Response(JSON.stringify({
      message: 'At least fName or lName should be added'
    }), {
      status: 400,
      headers: {
        'Content-Type': 'application/json'
      }
    })
  }
  const indexToUpdate = users.findIndex((user) => user.id === +id);
  if (indexToUpdate === -1) {
    return new Response(JSON.stringify({
      message: 'Invalid id'
    }), {
      status: 404,
      headers: {
        'Content-Type': 'application/json'
      }
    })
  }

  const updatedUser = {
    ...users[indexToUpdate],
    fName,
    lName
  };

  users[indexToUpdate] = updatedUser;

  return Response.json(updatedUser);

};

export const DELETE = async (request: Request, { params }: Params) => {
  const { id } = await params;
  const indexToDelete = users.findIndex((user) => user.id === +id);
  const [deletedUser] = users.splice(indexToDelete, 1)
  return Response.json(deletedUser)
};