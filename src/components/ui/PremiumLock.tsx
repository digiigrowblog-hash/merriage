import { useRouter } from 'next/navigation';
import { useSearchParams } from 'next/navigation';
import { ReactNode } from 'react';
import { LockKeyhole } from 'lucide-react';

interface LockableFeatureProps {
  children: ReactNode;
  isLocked: boolean;
  lockRedirectPath: string;
  className?: string;
  onClick?: () => void;
}

export function LockableFeature({
  children,
  isLocked,
  lockRedirectPath,
  className = '',
  onClick,
}: LockableFeatureProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const previousPage = searchParams.get('from') || '/home';

  const handleClick = () => {
    if (isLocked) {
      // Redirect to subscription page with previous page tracking
      router.push(`${lockRedirectPath}?from=${encodeURIComponent(previousPage)}`);
      return;
    }
    
    // Execute original onClick if provided and not locked
    if (onClick) {
      onClick();
    }
  };

  return (
    <div 
      className={`flex justify-between items-center ${className}`}
      onClick={handleClick}
    >
      <div className="flex flex-col flex-1">
        {children}
      </div>
      <LockKeyhole className={`size-5 ${isLocked ? 'text-gray-400' : 'text-green-500'}`} />
    </div>
  );
}