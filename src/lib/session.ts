import { GetServerSideProps } from "next";
import jwt from "jsonwebtoken";
const JWT_SECRET = process.env.JWT_SECRET || "your_jwt_secret";

export const getServerSideProps: GetServerSideProps = async (context) => {
    const token = context.req.cookies.token;

    if (!token) {
        return {
            redirect: {
                destination: "/auth",
                permanent: false,
            },
        };
    }

    try {
        const user = jwt.verify(token, JWT_SECRET);
        return {
            props: { user },
        };
    } catch (error) {
        console.error("Token verification failed:", error);
        return {
            redirect: {
                destination: "/auth",
                permanent: false,
            },
        };
    }
};
// export async function getCurrentUser(): Promise<User> {
//     const session = await auth();
//
//     if (!!session && session.user?.email) {
//         let nameArray: string[] = [];
//         if (session.user?.name?.includes('|')) {
//             nameArray = session.user?.name?.split('|');
//         }
//
//         const user = await getOrCreateUser(session.user?.email, {
//             firstName: nameArray?.length ? nameArray[0] : '',
//             lastName: nameArray?.length > 1 ? nameArray[1] : ''
//         });
//
//         if (user) {
//             return user;
//         }
//     }
//
//     return redirect('/auth');
// }
//
// /*
// export async function getCurrentUserEmail(): Promise<string> {
//     const session = await auth();
//
//     if (!!session && session.user?.email) {
//         return session.user.email;
//     }
//
//     return redirect('/auth');
// }
//  */
