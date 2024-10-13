import bcrypt from "bcrypt";

// Function to hash a password
export async function hashPassword(password) {
  const saltRounds = 10;
  try {
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    return hashedPassword;
  } catch (error) {
    console.error("Error hashing password:", error);
  }
}

// Function to verify a password
export async function verifyPassword(password, hashedPassword) {
  try {
    const result = await bcrypt.compare(password, hashedPassword);
    return result;
  } catch (error) {
    console.error("Error verifying password:", error);
  }
}

(async () => {
  const password = "abcd1234";

  // Hash the password
  const hashedPassword = await hashPassword(password);
  console.log("Hashed Password:", hashedPassword);

  // Verify correct password
  const isMatch = await verifyPassword(password, hashedPassword);
  console.log("Correct Password:", isMatch); // true

  // Verify incorrect password
  const isMatchWrong = await verifyPassword("wrong_password", hashedPassword);
  console.log("Incorrect Password:", isMatchWrong); // false
})();
