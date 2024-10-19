export interface IUser {
  id: number;
  userId: bigint;
  isBot: boolean;
  firstName: string;
  lastName: string;
  userName: string;
  languageCode: string;
}

export interface IChat {
  id: string;
  chatId: string;
  className: string;
  classType: string;
  accessHash: string;
  title: string;
  username: string;
  participantsCount: number;
  date: number;
  keywords: IChatKeyword[]
}

export interface IChatKeyword {
  id: number;
  keyword: string;
  userId: number;
  chatId: number;
}