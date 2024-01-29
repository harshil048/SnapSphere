# SnapSphere Social Media Platform

Welcome to SnapSphere, a social media website designed to share moments.
[Preview](https://snap-sphere.vercel.app/sign-in)

## Features

### 1. Sign Up and Sign In
- Users can create accounts by signing up with the necessary details.
- Secure login functionality for registered users.

### 2. Create Post
- Users have the ability to create posts with:
  - Caption: A text description accompanying the post.
  - Image: Visual content attached to the post.
  - Location: Information about where the post was created.
  - Tags: Categorize and discover posts easily.

### 3. Explore Post
- Search for specific posts using captions.
- Efficient content discovery within the platform.

### 4. Discover Hub
- Displays a list of all users on the platform.
- Users can view profiles.

### 5. Saved Posts
- Users can save posts for later viewing.
- Centralized location for accessing saved content.

### 6. User Profile
- View and manage user profiles.
- Includes uploaded posts and likes received.
- Edit profile information such as profile icon, name, and bio.

### 7. Like and Save Functionality
- Users can interact with posts by liking them.
- Dedicated section for easy access to saved content.

### 8. Infinite Scrolling Feature
- SnapSphere incorporates an infinite scrolling mechanism, allowing users to seamlessly browse through an extensive feed of posts without the need for pagination.
# Preview

https://github.com/harshil048/SnapSphere/assets/74892092/44bd17f4-2425-43ca-8f23-30eb84502834

![Signup](https://github.com/harshil048/SnapSphere/assets/74892092/9551fee4-6963-48fa-9885-7a974ca10cf0)

![Login](https://github.com/harshil048/SnapSphere/assets/74892092/7b234985-a947-41a4-9e53-a972cb4e96c7)

![Home](https://github.com/harshil048/SnapSphere/assets/74892092/dc0f5363-0901-4f4b-a2b5-473d53014781)

![Explore](https://github.com/harshil048/SnapSphere/assets/74892092/4fc88c13-1089-4692-a982-a1888cb9b3c0)

![AllUser](https://github.com/harshil048/SnapSphere/assets/74892092/cdf67567-62b9-4d65-914c-b36b72648e25)

![Save](https://github.com/harshil048/SnapSphere/assets/74892092/33738547-97f3-417e-ae10-3b44bf59f0ef)

![createPost](https://github.com/harshil048/SnapSphere/assets/74892092/40d670e7-27aa-4e7e-a597-165945bc4a6e)

![UserPage](https://github.com/harshil048/SnapSphere/assets/74892092/eeb4f0a7-c5cd-424a-bfcc-4e765faa9c35)

![EditProfile](https://github.com/harshil048/SnapSphere/assets/74892092/348de672-4910-4cc7-91c1-8ac84e29b3e3)

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
   parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
   },
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
