const path = 'https://hardeepcoder.in';
function detail({data}) {
    return (
        <div className="conatiner">
            <div className="row">
                <div className="col-md-6 text-capitalize m-auto card border-0">
                <h1 className="display-2"> {data.name} - {data.price}</h1>
                <p className="text-secondary">{data.short_description}</p>
                <img src={path + '/public/img/' + data.pro_img} className="w-100"/>
                <p>{data.description}</p>

                </div>
            </div>
           
            
        </div>
    )
}
export async function getServerSideProps(context){
    const id = context.query.id;
    const res = await fetch(path + '/api/product/' + id);
    const data = await res.json();

    return{
        props:{
            data
        }
    }
}
export default detail
