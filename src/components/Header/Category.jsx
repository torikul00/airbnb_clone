

const Category = ({category}) => {

        const {icon:Icon,label} = category
      
        
  
    return (
        <div className="single-category">
           <Icon className='category-icons' size={24}/>
           <p className="category-label">{label}</p>
        </div>
        
    );
};

export default Category;