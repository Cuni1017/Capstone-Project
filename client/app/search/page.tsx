const SearchPage = (props: any) => {
  const { params, searchParams } = props;

  return <div>搜尋{searchParams.q}的人才搜尋頁面</div>;
};

export default SearchPage;
