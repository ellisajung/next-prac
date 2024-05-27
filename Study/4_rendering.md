# Rendering: React vs Next.js

- In React,
- In Next.js, **all components and pages are first loaded/rendered in the server/backend** (whether you specify `"use client";` directive or not).

# Hydration

- On top of a normal HTML, initializing to a React application. (It's called Hydration because it becomes hydrated, fully functional interactive app)
- Only components with `"use client";` directive is hydrated.

# "use client"; directive

- It doesn't mean rendered only in the client.
  It's rendered in the backend and hydrated(made interactive) in the frontend.
- By telling the framework which component will be interactive and which will be not (By being more selective), user can download less js code, ending up in faster page loading.
