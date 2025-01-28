import { useRouter } from 'next/navigation';
import { startTransition } from 'react';
import { NavigateOptions } from 'next/dist/shared/lib/app-router-context.shared-runtime';
// import { useProgressBar } from '@app/components/hooks/progress-bar.hook';

export const useNavigation = () => {
  const router = useRouter();
  // const progress = useProgressBar();

  const navigateTo = (
    href: string,
    options?: NavigateOptions & { replace?: boolean; refresh?: boolean }
  ) => {
    // progress.start();
    startTransition(() => {
      // progress.done();
      if (options?.replace) {
        return router.replace(href, options);
      }
      router.push(href, options);
      if (options?.refresh) {
        router.refresh();
      }
    });
  };

  return {
    navigateTo
  };
};
