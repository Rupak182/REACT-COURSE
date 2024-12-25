interface RenderListProps {
  data: any[];
  resourceName: string;
  dataToRender: any;
}

const RenderList = ({
  data,
  resourceName,
  dataToRender: ItemComponent,
}: RenderListProps) => {
  return (
    <div className="product-list">
      {data.map((item, i) => (
        <ItemComponent key={i} {...{ [resourceName]: item }} />
      ))}
    </div>
  );
};

export default RenderList;