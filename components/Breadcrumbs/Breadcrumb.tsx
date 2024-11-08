import Link from "next/link";
interface BreadcrumbProps {
  pageName: string;
  titleShow?: boolean;
}
const Breadcrumb = ({ pageName, titleShow = false }: BreadcrumbProps) => {
  return (
    <div className="mb-6 flex flex-col sm:flex-row sm:items-center">
      {/* top class gap-3  sm:justify-between */}
      <h2 className="text-title-md2 font-semibold text-black dark:text-white">
        {titleShow && pageName}
      </h2>

      <nav>
        <ol className="flex items-start gap-2 text-sm">
          <li>
            <Link
              href={`/${pageName}`}
              passHref
              className="text-sm font-medium uppercase dark:text-white"
            >
              HOME{pageName}
            </Link>
          </li>
        </ol>
      </nav>
    </div>
  );
};

export default Breadcrumb;
