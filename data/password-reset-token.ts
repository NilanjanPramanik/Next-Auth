import { db } from "@/lib/db";

export const getPasswordResetTokenByToken = async (token: string) => {
  console.log("getPasswordResetTokenByToken: "+token);
  try {
    const passwordResetToken = await db.passwordResetToken.findUnique({
      where: { token },
    });
    console.log("Password reset token: "+passwordResetToken);
    return passwordResetToken;
  } catch {
    return null;
  }
}


export const getPasswordResetTokenByEmail = async (email: string) => {
  
  try {
    const passwordResetToken = await db.passwordResetToken.findFirst({
      where: { email }
    });

    return passwordResetToken;
  } catch {
    return null;
  }
}