import { LiteralUnion, ClientSafeProvider } from "next-auth/react";
import { BuiltInProviderType } from "next-auth/providers/index";
import { Session } from "next-auth";

export type ActivityProps = {
  title: string;
  description: string;
  imagePath: string;
};

export type ServiceCardProps = {
  title: string;
  description: string;
  link: string;
};

export type NavProps = {
  session: Session | null;
  providers: Record<
    LiteralUnion<BuiltInProviderType, string>,
    ClientSafeProvider
  > | null;
  isAdmin: boolean;
};
export type UserType = {
  id: number;
  email: String;
  firstName: String | null;
  lastName: String | null;
  username: String | null;
  position: String | null;
};

export type NewsType = {
  id: number;
  headline: String;
  description: String;
  dateCreated: Date;
  images: [{ url: String }];
};
