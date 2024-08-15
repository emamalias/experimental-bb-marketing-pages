import clsx from 'clsx';

import Link from '@/components/shared/link';

const TutorialBlock = ({ url, title }: { url: string; title: string }) => {
  return (
    <figure className={clsx('hint-block border', 'shadow-[0px_5px_15px_rgba(156,186,201,0.5)]')}>
      <div
        className={clsx(
          'flex gap-x-4 px-5 pb-6 pt-6 shadow-[inset_6px_6px_0_#fff,0_5px_15px_rgba(172,178,210,0.5)] md:gap-x-3 md:px-4 md:pb-5 md:pt-5 sm:gap-x-2 sm:px-3 sm:pb-4 sm:pt-4',
          'items-center ',
        )}
      >
        <div className="flex flex-col !text-16">
          <div
            className={clsx(
              'prose space-y-2.5 !text-15 !leading-snug prose-p:my-2.5 prose-p:first:mt-0 prose-p:last:mb-0 prose-a:break-all prose-ol:my-0 prose-ol:!pl-0 prose-ul:!pl-0 sm:mt-0 sm:!text-14 sm:leading-snug',
              'prose-a:font-semibold prose-a:text-primary-1 prose-a:no-underline prose-li:marker:!text-primary-1',
            )}
          >
            📕 Tutorial - <Link href={url}>{title}</Link>
          </div>
        </div>
      </div>
    </figure>
  );
};

export default TutorialBlock;
