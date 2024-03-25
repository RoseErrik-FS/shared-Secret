# Shared Secret Example

This repository demonstrates using a shared secret file (`secrets.json`) that is committed to the repository in a Node.js application.

## Project Structure

- `sharedSecret.js`: The main application file that reads the secret from `secrets.json`.
- `secrets.json`: The file containing the shared secret.

## Usage

1. Clone the repository:

``git clone <repository-url>``


2. Navigate to the project directory:

``cd sharedSecret``


3. Run the application:

``node index.js``


## Notes

- Committing secret files to a repository is not recommended as it makes the secrets accessible to anyone with access to the repository.
- Consider using environment variables or a separate secret management system to store secrets securely.

