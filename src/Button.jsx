
function Button({title,children}) {
    if (title == null || title == "") {
        return null;
    }
    return (
        <button className="bg-fuchsia-600 px-3 py-1 cursor-pointer shadow-lg text-amber-50  hover:bg-amber-500 rounded-xl h-fit">{title}{children}</button>
    );
};
export default Button;