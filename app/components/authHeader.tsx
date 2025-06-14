import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/react-router';

export function AuthHeader() {
  return (
    <header className="flex h-16 items-center justify-end gap-4 p-4">
      <SignedOut>
        <SignInButton />
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
    </header>
  );
};
