import { currentUser } from "@clerk/nextjs/server";

export interface IUser {
    email: string | undefined;
    username?: string | null | undefined;
    avatar: string | undefined;
}

export const getUserData = async (): Promise<IUser> => {
    const user = await currentUser();
    // console.log("🚀 ~ userData ~ user:", user)

    const email = user?.emailAddresses[0].emailAddress;
    const username = user?.username;
    const avatar = user?.imageUrl;
    // pwdpwd12@pwdpwd21
    return {
        avatar,
        email,
        username,
    };
};
