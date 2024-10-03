import { PageBreadcrumbs } from 'shared/ui/Breadcrumbs/Breadcrumbs';

type CategoryPageProps = {};

interface Params {
  pagesection: string;
  category: string;
}

const CategoryPage = (props: CategoryPageProps) => {
  const {} = props;
  return (
    <div>
      <PageBreadcrumbs />
    </div>
  );
};

export default CategoryPage;
