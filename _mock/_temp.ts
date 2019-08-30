import { MockRequest } from '@delon/mock';

export const Temp = {
  'POST /api/user/authentication': (req: MockRequest) =>
    JSON.parse(JSON.stringify({ entity: '123', isSucceed: true, message: '', statusCode: 200 })),
};
