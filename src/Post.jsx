
function Post({title,body,children}) {
    return (
       
         <div className=" border-cyan-600 border-4 p-3">
          {children}
            <h1 className="text-xl ">{title}</h1>
            <hr />
            <h2>{body}</h2>
          </div>
       
    );
};
export default Post;