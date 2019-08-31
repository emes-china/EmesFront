import { MockRequest } from '@delon/mock';
import { deepCopy } from '@delon/util';

let entity = [
  {
    name: '管理员',
    status: 1,
    id: '09ee2ffa-7463-4938-ae0b-1cb4e80c7c13',
  },
  {
    name: '测试',
    status: 2,
    id: '0a7ebd0c-78d6-4fbc-8fbe-6fc25c3a932d',
  },
  {
    name: '汇丰测试',
    status: 1,
    id: '3e761e88-ddf7-4a62-b219-9a315b4564f2',
  },
  {
    name: '神',
    status: 2,
    id: '77e6d0c3-f9e1-4933-92c3-c1c6eef75593',
  },
];

export const Role = {
  'POST /api/role/query': (req: MockRequest) =>
    JSON.parse(
      JSON.stringify({
        entity,
        isSucceed: true,
        message: '',
        statusCode: 200,
      }),
    ),

  'POST /api/role/create': (req: MockRequest) => {
    const role = deepCopy(req.body.request);
    role.id = `77e6d0c3-f9e1-4933-92c3-c1c6eef${Math.floor(Math.random() * 10000)}`;
    entity.push(role);
    return {
      entity,
      isSucceed: true,
      message: '',
      statusCode: 200,
    };
  },

  'POST /api/role/update': (req: MockRequest) => {
    const i = entity.findIndex(x => x.id === req.body.request.id);
    entity[i] = deepCopy(req.body.request);
    return {
      entity,
      isSucceed: true,
      message: '',
      statusCode: 200,
    };
  },

  'POST /api/role/delete': (req: MockRequest) => {
    entity = entity.filter(x => x.id !== req.body.request.id);
    return {
      entity,
      isSucceed: true,
      message: '',
      statusCode: 200,
    };
  },
};
