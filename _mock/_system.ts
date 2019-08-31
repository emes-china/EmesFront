import { MockRequest } from '@delon/mock';

export const System = {
  'POST /api/organization/query': (req: MockRequest) =>
    JSON.parse(
      JSON.stringify({
        entity: [
          {
            parentId: null,
            parentName: null,
            name: '集团总部',
            status: 1,
            sortNo: 10,
            cascadeId: null,
            id: 'f6a255c3-2a81-4cf7-a377-08d72cea17a1',
          },
          {
            parentId: 'f6a255c3-2a81-4cf7-a377-08d72cea17a1',
            parentName: null,
            name: '经营部',
            status: 1,
            sortNo: 10,
            cascadeId: null,
            id: '31f2a0c5-86b3-4585-a378-08d72cea17a1',
          },
          {
            parentId: 'f6a255c3-2a81-4cf7-a377-08d72cea17a1',
            parentName: null,
            name: '工程部',
            status: 1,
            sortNo: 10,
            cascadeId: null,
            id: '3d6b8a62-b66e-4be8-a379-08d72cea17a1',
          },
          {
            parentId: 'f6a255c3-2a81-4cf7-a377-08d72cea17a1',
            parentName: null,
            name: '工程1部',
            status: 1,
            sortNo: 10,
            cascadeId: null,
            id: '17cea516-8fcf-4a8b-0909-08d72d140378',
          },
        ],
        isSucceed: true,
        message: '',
        statusCode: 200,
      }),
    ),
};
