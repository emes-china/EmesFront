import { MockRequest } from '@delon/mock';

export const Login = {
  'POST /api/user/authentication': (req: MockRequest) => {
    return {
      entity:
        'eyJ0eXBlIjowLCJlbmNyeXB0TW9kZSI6MCwidGltZVN0YW1wIjoiMjAxOS0wOC0zMSAwOTo0MDozMiJ9.IntcImFjY291bnRcIjpcImFkbWluXCIsXCJwYXNzd29yZFwiOlwiMTIzNDU2XCIsXCJuYW1lXCI6XCJhZG1pblwiLFwic2V4XCI6MCxcInN0YXR1c1wiOjAsXCJpZFwiOlwiNmRiYzgwZjMtMGY3NS00OTRkLWZhOWMtMDhkNzJjNjIzZmNjXCJ9Ig==.dmk6De7dGp+wNVgOaHCaaHeE0pXJiSqgqquPyGP68Vk=',
      isSucceed: true,
      message: '',
      statusCode: 200,
    };
  },
};
