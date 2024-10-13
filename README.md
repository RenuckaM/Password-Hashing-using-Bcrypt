## Project Name: Password Hashing 

##### Description:
This project provides two simple functions:
1. **hashPassword(password)**: Hashes a given password using bcrypt.
2. **verifyPassword(password, hashedPassword)**: Verifies if the provided password matches the hashed password.

This can be used to securely store passwords and check if an entered password is correct by comparing it with a stored hashed password.

##### Prerequisites:
- Node.js (v14.x or higher)
- npm (v6.x or higher)

##### Installation:

1. **Initialize the project**
   Run `npm init --y` to create a basic `package.json` file.

2. **Install bcrypt**
   Install `bcrypt` by running the following command:
   ```bash
   npm install bcrypt

3. **Create the `index.js` file**
   Implement the two functions: one for hashing and one for password verification.

##### Usage:
1. Import the `hashPassword` and `verifyPassword` functions from the `index.js` file.
2. Call `hashPassword` to hash a password.
3. Call `verifyPassword` to check if a plain password matches the hashed version.

##### Output

 ![image](https://github.com/user-attachments/assets/47c31845-844a-4233-b0d8-0d24deaaa756)

##### To Run the project

To run the project using the `npm run start` command, you need to update the `package.json` file by adding a `"start"` script. Here’s how to do it:

### Step 1: Update `package.json`

Open your `package.json` file and add the following `"start"` script under the `"scripts"` section:

```json
{
  "name": "your-project-name",
  "version": "1.0.0",
  "type": "module",  // Only if you're using ES Modules
  "scripts": {
    "start": "node index.js"
  },
  "dependencies": {
    "bcrypt": "^5.1.0"
  }
}
```

### Step 2: Run the project

Now that the `"start"` script has been added, you can run the project using the following command in your terminal or command prompt:

```bash
npm run start
```
