import { fetchSectionPageProductListData } from 'pages/SectionPage/model/services/fetchSectionPageProductList';
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useAppDispatch } from 'shared/lib/hooks/hook';
import { PageBreadcrumbs } from 'shared/ui/Breadcrumbs/Breadcrumbs';

type CategoryPageProps = {};

interface Params {
  pagesection: string;
  category: string;
}

const CategoryPage = (props: CategoryPageProps) => {
  const {} = props;
  const { pagesection, category } = useParams<Record<string, string | undefined>>();

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (pagesection && category) {
      dispatch(fetchSectionPageProductListData({ pagesection, category }));
    }
  }, [dispatch, pagesection, category]);

  return (
    <div>
      <PageBreadcrumbs />
    </div>
  );
};

export default CategoryPage;
