# System Design of Texter

## 1. Overview

### 1.1 Purpose
This document outlines the architecture and detailed system components of a real-time messaging application, enhanced with features such as:

- Search User by Username
- Private and Group Chats
- Voice and Video Calling (via ZEGOCLOUD)

The app allows users to find each other by username, initiate private chats, create group chats, and engage in voice and video calls.

### 1.2 Scope
In addition to core messaging features, users can search for other users using their usernames, chat with them, and create groups for group conversations. The application leverages WebSockets for real-time messaging, ZEGOCLOUD for voice and video communication, and Firebase for authentication and data storage.

## 2. Architecture

### 2.1 System Components
- **Frontend**: Next.js (for user interface and routing)
- **Backend**: Node.js with Express.js (for REST APIs, WebSocket management, and user management)
- **Real-Time Messaging**: WebSockets (Socket.IO) for real-time message updates
- **User Search**: Firebase Firestore (for storing and searching users by username)
- **Group Chat**: WebSocket for real-time group message updates, Firebase for storing group info
- **Voice & Video Calling**: ZEGOCLOUD SDK for handling audio and video calls
- **Storage**: Firebase Firestore (for user data, chat history, and group information)
- **Authentication**: Firebase Authentication (for secure user sign-in)

### 2.2 High-Level Architecture Diagram

[ User ] <-> [ Next.js Frontend ] <-> [ Node.js Express Backend ] <-> [ WebSocket Server ] | | v v [ Firebase Storage ] [ ZEGOCLOUD Service ] | v [ User Search / Group Chat Features ]


### 2.3 Data Flow
- **User Authentication**: Managed by Firebase Authentication. Users log in or register using their email or other providers like Google.
- **Search User by Username**: Users search for other users using a search bar in the UI. Firebase Firestore is queried for matching usernames.
- **Private Chat**: After finding a user, a one-on-one chat can be initiated.
- **Group Chat**: Users can create groups with multiple participants, with all group members able to send and receive messages in real-time via WebSocket.
- **Voice/Video Calling**: Either a one-on-one or group call can be initiated using ZEGOCLOUD SDK.
- **Data Storage**: Firebase Firestore stores user profiles, chat histories, and group information.

### 2.4 New Features Flow

#### Search User by Username
1. **Search Query**: User types a username in the search bar.
2. **Firestore Query**: A search request is made to Firebase Firestore to look for users with matching or similar usernames.
3. **User Display**: Matching usernames are displayed in the UI, allowing the user to initiate a chat with the selected user.

#### Group Chat Creation
1. **Group Creation**: A user can create a group, selecting multiple users by searching for usernames.
2. **Group Info Stored**: Group details (e.g., group name, participants) are saved in Firebase Firestore.
3. **Real-Time Communication**: A WebSocket channel is created for the group, allowing real-time messaging between participants.
4. **Group Chat Management**: The group creator can add/remove users from the group, with changes reflected in Firestore.

### 2.5 Communication Flow (Group Messaging)
1. **Create Group**: User creates a group by selecting usernames.
2. **Group ID Assignment**: Each group is assigned a unique ID in Firestore, and all group members are subscribed to the WebSocket channel.
3. **Group Chat**: Group members can send/receive messages in real time. All messages are stored in Firestore for chat history purposes.

## 3. Dependencies and Libraries

### 3.1 Frontend (Next.js)
- **Next.js**: For dynamic routing and server-side rendering.
- **Socket.IO**: Real-time communication for private and group chats.
- **Firebase SDK**: For handling user authentication, storage, and search features.
- **ZEGOCLOUD SDK**: For real-time voice and video communication.
- **React Context**: For managing global state (current user, groups, etc.).

### 3.2 Backend (Node.js & Express.js)
- **Express.js**: For managing HTTP APIs and WebSocket communication.
- **Socket.IO**: To handle WebSocket communication for private and group chats.
- **Firebase Admin SDK**: To securely handle Firebase operations (search, group management).
- **ZEGOCLOUD API**: For initiating and managing video/voice calls.

## 4. Setup Instructions

### 4.1 Prerequisites
- Node.js (v14+)
- npm or yarn
- Firebase account for authentication and Firestore
- ZEGOCLOUD account for managing voice and video calls

### 4.2 Frontend Setup

1. **Clone the repository**:
    ```
    git clone https://github.com/aakarsh-kt/Messenger
    cd my-app
    ```

2. **Install dependencies**:
    ```
    npm install
    ```

3. **Configure Firebase**:
   Set up Firebase Firestore and Authentication.
   Obtain Firebase config and place it in `firebase.js`.

4. **Configure ZEGOCLOUD**:
   Set up ZEGOCLOUD and add App ID and App Sign to `.env.local`.

5. **Run the frontend**:
    ```
    cd app
    npm run dev
    ```

### 4.3 Backend Setup

1. Navigate to the backend directory:
    ```bash
    cd backend
    ```

2. Install dependencies:
    ```
    npm install
    ```

3. Configure Firebase Admin SDK:
   Add your Firebase service account credentials to `firebaseAdmin.js`.

4. Run the backend:
    ```
    node app.js
    ```

### 4.4 User Search Setup
- **User Search Functionality**: In Firestore, store each user's username during registration.
- **Create an index** in Firestore for searching usernames.

### 4.5 Group Chat Setup
- **Group Creation**: Store group details (name, members) in Firestore.
- **Assign unique group IDs**, which will be used for real-time WebSocket communication.

- **Real-Time Group Messaging**: On group creation, open a WebSocket channel where all members can communicate in real-time.

### 4.6 ZEGOCLOUD Integration for Group Calling
- In group chats, users can initiate a group video or voice call.
- Use ZEGOCLOUD’s SDK to manage multiple participants.
### 5. Usage Instructions
- **User Search:**
Users can search for other users by entering their username into a search bar.
Matching users will be displayed, and a chat can be initiated by clicking their name.
- **Private & Group Chats:**
Users can initiate a private chat or create a group for multiple participants.
Group members can exchange messages in real-time, with all data stored in Firebase Firestore.
- **Voice & Video Calls:**
Users can initiate a call by clicking the "call" button during a chat.
ZEGOCLOUD handles both one-on-one and group calls, with low latency.
### 6. Why These Features?
- **Search by Username**
User Experience: Searching for users by username makes the app easy to use, allowing quick initiation of chats.
Scalability: Firestore indexes allow for fast searches, even with a growing user base.
- **Group Chats**
- *Convenience*: Group chats allow users to collaborate and communicate efficiently.
Real-Time Messaging: WebSocket ensures smooth communication across multiple participants.
### 7. Database Selection: Why Firebase?
- **Overview**
In developing the real-time messaging application, Firebase was selected as the backend database solution due to its unique advantages over traditional databases like MySQL, PostgreSQL, or MongoDB. Below are the key reasons for choosing Firebase:

- **Real-Time Capabilities**
Instant Synchronization: Firebase Firestore and Realtime Database are designed for real-time data synchronization, enabling instant updates across all connected clients. This capability is crucial for a messaging app, where users expect immediate message delivery and notification of new messages.
WebSocket Support: Firebase automatically manages WebSocket connections, allowing for efficient real-time communication without the need for additional setup or configuration.
- **Simplified Data Management**
NoSQL Structure: Firebase offers a NoSQL database model, which is flexible and allows for hierarchical data storage. This is particularly useful for storing user profiles, chat messages, and group information without requiring a fixed schema.
Automatic Scaling: Firebase handles scaling seamlessly. As the user base grows, Firebase automatically manages database scaling, reducing the burden on developers to configure and maintain server resources.
- **Integrated Authentication**
Firebase Authentication: Firebase provides a robust authentication system that easily integrates with the database. This simplifies user management, enabling features like email/password login, social media sign-ins, and more, all without needing a separate authentication layer.
User Management: With Firebase, user data can be directly tied to their authentication status, facilitating easier access control and user-specific data management.
- **Firestore Querying Capabilities**
Indexed Search: Firebase Firestore offers built-in indexing and querying capabilities. This is especially beneficial for features like user search by username, where quick lookups are necessary.
Optimized for Reads: Firestore is optimized for read-heavy operations, making it ideal for applications where data retrieval (such as loading chat histories or searching for users) is frequent.
- **Security**
Rules-Based Security: Firebase provides a flexible security rules engine that allows developers to define access control policies at the database level. This ensures that only authorized users can access sensitive data, such as private messages or user information.
Data Encryption: Firebase encrypts all data in transit and at rest, providing an additional layer of security.
- **Cross-Platform Support**
Seamless Integration with Web, Android, and iOS: Firebase provides SDKs for multiple platforms, allowing developers to create cross-platform applications with minimal effort. This ensures that the same database backend can serve users on web, Android, and iOS devices, streamlining development and reducing duplication of effort.
**Conclusion**
By leveraging Firebase's real-time capabilities, simplified data management, and integrated security features, the messaging app can offer a seamless, scalable, and secure experience for its users, with minimal overhead in terms of backend management.
