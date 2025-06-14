import mcbcLogo from '~/assets/mcbc-logo/McbcTransparentLogo.svg';
import { Button } from '~/components/ui/button';

export function Header() {
  return (
    <header className="w-full max-w-4xl rounded-2xl border-b bg-white/50 shadow-sm">
      <div className="container mx-auto flex h-16 items-center justify-between px-2">
        <a href="/" className="flex items-center space-x-4">
          <img src={mcbcLogo} alt="Motlow Creek Baptist Church Logo" width={40} height={40} className="size-50 justify-self-start" />
        </a>
        <a href="/admin">
          <Button variant="outline">Admin</Button>
        </a>
      </div>
    </header>
  );
}
