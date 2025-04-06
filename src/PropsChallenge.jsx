
import Post from "./Post";
import TagButton from "./TagButton";

const showCategories = true;

function PropsChallenge() {

  const posts =[
    {id: 1, title :"Tarmeez Academy",body : "ا تتردد في كتابة الاستفسارات حول هذا المقطع في جروب مجتمع ترميز في التيليجرام أو في خانة التعليقات"},
    {id: 2, title :"Hello World",body : "this is the hello world article"},
    {id: 3, title :"Tarmeez Academy",body : "this is the body of post 3"},
  ]
  const postsList = posts.map((post)=>{
    return <Post key={post.id} title={post.title} body={post.body}></Post>;
  })

  return (
    <>
      <div className="bg-cyan-600 w-full h-[150px] flex justify-center items-center font-bold text-amber-50 text-4xl">
        Tarmeez Academy
      </div>
      <div className="mt-5 flex gap-5 w-5xl mx-auto">
        {/* Post section */}
        <div className="w-2/3 flex flex-col gap-6 ">
          <Post title="Tarmeez Academy" body="لا تتردد في كتابة الاستفسارات حول هذا المقطع في جروب مجتمع ترميز في التيليجرام أو في خانة التعليقات.">
            <h1 className="text-3xl">20</h1>
          </Post>
          <Post title="Hello World" body="this is the hello world article"></Post>
          <Post title="Post 3" body="this is the body of post 3"></Post>

          {/* second way to show posts */}
          {postsList}
        </div>
        {/* SideMenu section */}
        <ShowCatgs></ShowCatgs>
      </div>
    </>
  );
}

function ShowCatgs(){
  if (showCategories == true) {
    return (<TagButton></TagButton>);
  }
  else{
    return null;
  }
  
}

export default PropsChallenge;
