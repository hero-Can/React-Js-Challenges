import Button from './Button';
function TagButton() {
  
  const categories =[
    {id: 1, title :"new post",chidren : (
    <div className="">
      <span>😊😊😊</span>
    </div>)},
    {id: 2, title :"most read",chidren : (
      <div className="">
              <img className="w-[150px] pb-3" src="https://treenewal.com/wp-content/uploads/2020/11/environmental_factors_affecting_trees.png" alt="" />
          </div>
    )},
    {id: 3, title :"recent news",chidren : (
      <>
      <h1>Click here</h1>
      <span>👍👍👍</span>
      </>
    )},
  ]
  const categoriesList = categories.map((category)=>{
    return <Button key={category.id} title={category.title}>{category.chidren}</Button>;
  });
    return (
      
      
      <div className=" border-cyan-600 border-4 w-1/3 flex flex-wrap gap-2 p-3 justify-center" style={{ height: 'fit-content' }}>
        {categoriesList}
        {/* <Button title="new post">
          <div className="">
            <span>😊😊😊</span>
          </div>
        </Button>
        <Button title="most read">
          <div className="">
              <img className="w-[150px] pb-3" src="https://treenewal.com/wp-content/uploads/2020/11/environmental_factors_affecting_trees.png" alt="" />
          </div>
        </Button>
        <Button title="recent news">
          <h1>Click here</h1>
          <span>👍👍👍</span>
        </Button>
        <Button >
        </Button> */}
         </div>
       
    );
};
export default TagButton;