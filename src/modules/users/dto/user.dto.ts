export type CreateUserDTO = {
  username: string;
  password: string;
  email: string;
  name: string;
};

export type usernameAndEmail = {
  email: string;
  username: string;
};

export type UserCreatedDTO = {
  id: string;
  createdAt: Date;
} & CreateUserDTO;

export type fileDTO = {
  fieldname: string;
  originalname: string;
  encoding: string;
  mimetype: string;
  buffer: Buffer;
  size: number;
};

export type AvatarDto = {
  idUser: string;
  file: fileDTO;
};
