export enum StatusType {
  正常 = 1,
  停用 = 2,
}
export const initialStatusSearch = [
  { Text: '全部', Value: null },
  { Text: StatusType[StatusType.正常], Value: StatusType.正常 },
  { Text: StatusType[StatusType.停用], Value: StatusType.停用 },
];

export const initialStatusSelected = [
  { Text: StatusType[StatusType.正常], Value: StatusType.正常 },
  { Text: StatusType[StatusType.停用], Value: StatusType.停用 },
];
